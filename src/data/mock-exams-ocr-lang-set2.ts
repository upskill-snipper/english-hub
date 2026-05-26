// @ts-nocheck
import { MockExamPaper } from '../types'

export const ocrLangMocksSet2: MockExamPaper[] = [
  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 1: Artificial Intelligence
  {
    id: 'ocr-lang-comp01-set2-001',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 1: The Age of Artificial Intelligence',
    description:
      'Students read an article about AI in everyday life and respond to writing tasks covering summary, persuasion, and advice.',
    sourceText: `ARTIFICIAL INTELLIGENCE: TRANSFORMING MODERN LIFE

The rapid advancement of artificial intelligence has moved beyond science fiction into the fabric of daily existence. From smartphone assistants to medical diagnostics, AI systems are becoming increasingly integrated into how we work, communicate, and solve problems. Understanding this technology and its implications is essential for informed citizenship in the twenty-first century.

Artificial intelligence refers to computer systems designed to perform tasks that typically require human intelligence. These tasks include learning from experience, recognizing patterns, understanding language, and making decisions. Modern AI uses machine learning-systems that improve through exposure to data rather than explicit programming. This distinction is crucial: AI systems become more capable through use, not through human refinement.

The applications are remarkably diverse. In healthcare, AI systems analyze medical imaging to detect diseases earlier than human radiologists. In transportation, autonomous vehicles use AI to navigate complex environments. In entertainment, recommendation algorithms learn user preferences to suggest content. In business, AI optimizes supply chains and predicts market trends. In education, personalized learning systems adapt to individual student needs.

The benefits are substantial and measurable. AI increases productivity by automating repetitive tasks, freeing humans for creative work. Accuracy improves dramatically in fields like medical diagnosis where AI matches or exceeds human performance. Accessibility expands when AI-powered tools assist disabled people-voice recognition enables hands-free operation, translation tools break language barriers. Cost reduction follows from automation and optimization. Decision-making improves when AI processes vast datasets that humans cannot analyze manually.

However, significant concerns demand serious attention. Bias in AI systems can perpetuate discrimination if training data reflects historical prejudice. Privacy threats emerge when AI systems analyze personal data. Job displacement occurs as automation replaces workers. Concentration of power threatens when large technology companies control AI systems. The "black box" problem means even developers cannot fully explain AI decision-making. Cybersecurity risks increase as AI becomes critical infrastructure. Algorithmic decision-making in criminal justice, hiring, and benefits allocation raises ethical questions about fairness and human dignity.

The path forward requires thoughtful governance. Regulation must ensure responsible development without stifling innovation. Transparency requirements should make AI decision-making more understandable. Diversity in AI development teams helps identify bias. Education about AI literacy enables citizens to understand and question AI systems affecting their lives. Investment in retraining ensures displaced workers can transition to new roles. International cooperation prevents regulatory arbitrage where companies relocate to avoid oversight.

The future will undoubtedly feature AI more prominently than today. The question is not whether AI will develop further, but how society will manage this powerful technology responsibly.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Summary Task',
        instruction:
          'Write a summary of the key benefits and concerns about artificial intelligence mentioned in the article. Your answer should be approximately 150-200 words.',
        marks: 20,
      },
      {
        taskNumber: 2,
        title: 'Persuasive Writing',
        instruction:
          'Write a persuasive article for a technology magazine arguing that AI development should continue, but only with strict government oversight. Address at least three specific concerns about AI and explain how regulation addresses each. Your answer should be approximately 250-300 words.',
        marks: 30,
      },
      {
        taskNumber: 3,
        title: 'Informative Writing',
        instruction:
          'Create an informative guide for adults learning about AI, explaining what artificial intelligence is, how it works, and where they will encounter it in daily life. Use clear language, headings, and practical examples. Your answer should be approximately 200-250 words.',
        marks: 30,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Accuracy and completeness of summary',
              marks: 10,
              details:
                'Identifies main benefits (productivity, accuracy, accessibility, cost reduction) and concerns (bias, privacy, job displacement, ethical issues). Award full marks for balanced coverage.',
            },
            {
              criterion: 'Appropriate vocabulary and clarity',
              marks: 5,
              details:
                'Uses subject-specific terminology (machine learning, automation, algorithms). Sentences are clear and technical where appropriate.',
            },
            {
              criterion: 'Length and form',
              marks: 5,
              details:
                'Approximately 150-200 words. Format as continuous prose or structured comparison.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Persuasive techniques and position',
              marks: 12,
              details:
                'Clearly argues for continued AI development with oversight. Uses evidence and logical reasoning. Anticipates counter-arguments.',
            },
            {
              criterion: 'Addressing specific concerns',
              marks: 10,
              details:
                'Identifies three distinct concerns (bias, privacy, displacement) and explains how regulation addresses each.',
            },
            {
              criterion: 'Structure and tone',
              marks: 8,
              details:
                'Clear introduction of position, developed paragraphs addressing each concern, conclusion reinforcing argument. Professional register.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Clarity of explanation',
              marks: 12,
              details:
                'Explains what AI is, how it works, and where encountered, using accessible language without oversimplification.',
            },
            {
              criterion: 'Practical examples',
              marks: 10,
              details:
                'Provides concrete, recognizable examples of AI in everyday contexts (smartphones, recommendations, navigation).',
            },
            {
              criterion: 'Organization and accessibility',
              marks: 8,
              details:
                'Effective use of headings and logical progression. Language is clear and welcoming for adult learners.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `ARTIFICIAL INTELLIGENCE: BENEFITS AND CONCERNS

Artificial intelligence offers substantial benefits for modern society. AI systems improve productivity by automating repetitive tasks, allowing humans to focus on creative work. Accuracy increases dramatically in specialized fields-AI medical imaging matches or exceeds human radiologist performance. Accessibility expands when AI-powered tools assist disabled people through voice recognition and translation. Costs reduce through automation and optimization across industries.

However, significant concerns require serious attention. Bias in AI systems can perpetuate historical discrimination if training data reflects prejudiced patterns. Privacy threats emerge as AI analyzes increasingly personal data. Job displacement occurs when automation replaces workers across sectors. Concentration of power threatens as large technology companies control AI systems. Decision-making opacity means developers cannot fully explain why AI systems reach specific conclusions. Ethical questions about fairness arise when AI makes consequential decisions about criminal justice, hiring, and benefits allocation.

The path forward requires balanced governance that enables beneficial AI while addressing legitimate concerns.`,
        marks: 19,
        feedback:
          'Excellent balanced coverage of both benefits and concerns. Clear terminology used appropriately. Could expand slightly on solutions or implications.',
      },
      {
        taskNumber: 2,
        answer: `HARNESSING AI RESPONSIBLY: THE CASE FOR DEVELOPMENT WITH OVERSIGHT

Artificial intelligence represents one of humanity's greatest opportunities for progress, yet uncontrolled development risks serious harms. Society should continue AI development, but only within a framework of strict government oversight that addresses legitimate concerns while preserving innovation.

The bias concern demands immediate attention. AI systems trained on historical data inherit human prejudice-hiring algorithms discriminate against women, criminal justice algorithms impose harsher sentences on minorities. Government regulation should mandate bias audits before AI systems deploy in high-stakes decisions. Independent oversight ensures developers address discriminatory patterns. This protects vulnerable populations without halting AI advancement-better AI systems, not fewer AI systems, solve the bias problem.

Privacy represents the second critical concern. AI's power to analyze personal data enables powerful beneficial applications like personalized medicine and improved infrastructure, yet threatens individual privacy. Regulation should require transparent data use, strong consent requirements, and penalties for misuse. Companies should not profit from personal data without clear user understanding. Government oversight prevents predatory data practices while permitting beneficial AI applications.

Job displacement, the third concern, demands proactive response. As AI automates jobs, workers deserve support. Government investment in retraining programs enables transitions to new roles. Policies should include transition assistance, wage support, and education in emerging fields. This transforms displacement from tragedy to opportunity. Development continues while workers receive support.

Some argue regulation will slow AI progress. This misses the point. Responsible development creates sustainable progress. AI systems people trust advance faster than systems people fear. Oversight builds public confidence. Companies can plan strategy around consistent rules. Innovation flourishes when society approves of applications.

The path forward is clear: continue developing this powerful technology while establishing guardrails protecting human dignity, fairness, and privacy.`,
        marks: 28,
        feedback:
          'Strong persuasive argument with clear position. Excellent addressing of three specific concerns with explanations of regulatory solutions. Well-structured with good evidence.',
      },
      {
        taskNumber: 3,
        answer: `UNDERSTANDING ARTIFICIAL INTELLIGENCE: A PRACTICAL GUIDE

What is Artificial Intelligence?

Artificial intelligence refers to computer systems designed to perform tasks normally requiring human thinking. Unlike traditional computer programs that follow exact instructions, AI systems learn and improve through exposure to data. Think of traditional software as following a recipe precisely, while AI adapts the recipe based on results.

How Does AI Actually Work?

AI systems learn patterns from large amounts of data. Imagine showing a computer millions of photographs labeled "dog" or "cat." The system identifies visual patterns distinguishing dogs from cats. When shown a new photograph, it recognizes patterns matching one category. This "machine learning" means the system improves through practice-just as you recognize friends faster the more you see them.

Where Will You Encounter AI?

AI is already in your daily life. Your smartphone uses AI for voice recognition-saying "Hey Siri" or "OK Google" activates AI systems understanding speech. Email systems use AI to filter spam, learning which messages you ignore. Social media platforms use AI to recommend content based on your preferences. Maps applications use AI to predict traffic and suggest fastest routes. Dating apps use AI to suggest matches based on compatibility patterns. Netflix recommendations and Spotify playlists use AI analyzing millions of user preferences.

Even more broadly, AI helps doctors detect diseases earlier, helps teachers personalize learning, and helps businesses understand customers better.

Why Should You Care?

Understanding AI helps you make informed decisions about technology in your life. You can question whether AI recommendations serve your interests or someone else's. You can understand data privacy implications when using AI-powered services. You can evaluate claims about AI's capabilities and limitations. In a world increasingly shaped by AI, literacy about this technology matters for your security, privacy, and empowerment.`,
        marks: 26,
        feedback:
          'Excellent clear explanations using accessible language and familiar examples. Good organization with headings. Could include more depth on some technical aspects for adult learners.',
      },
    ],
  },

  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 2: Urban Green Spaces
  {
    id: 'ocr-lang-comp01-set2-002',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 2: Reclaiming Urban Green Spaces',
    description:
      'Students read about urban green space initiatives and respond to writing tasks involving analysis, persuasion, and guidance.',
    sourceText: `THE GREENING OF CITIES: WHY URBAN GREEN SPACES MATTER

Cities are increasingly grey. Concrete dominates streetscapes, tall buildings block sunlight, and natural ecosystems are confined to fragmented patches. Yet growing evidence demonstrates that urban green spaces-parks, gardens, tree-lined streets, and green roofs-are not luxuries but necessities for healthy, livable cities. Cities worldwide are investing in greening initiatives, recognizing that environmental quality directly affects human wellbeing.

Urban green spaces serve multiple critical functions. Environmentally, they reduce air pollution by absorbing pollutants and producing oxygen. They manage stormwater runoff, reducing flooding during heavy rain. They reduce urban heat island effect-the phenomenon where cities become significantly warmer than surrounding areas due to heat-absorbing concrete and limited vegetation. Green spaces provide habitat for urban wildlife, maintaining biodiversity even in dense cities. They sequester carbon, contributing to climate change mitigation.

For human health, the evidence is compelling. Children who spend time in natural settings develop better cognitive abilities, improved focus, and reduced attention deficit symptoms. Green space exposure reduces stress hormones measurably-blood pressure decreases, cortisol (stress hormone) drops, anxiety lessens. Elderly people spending time in parks maintain better mobility and independence longer. Communities with accessible green spaces show lower rates of depression and mental illness. Regular park use predicts longer lifespans-nature exposure contributes to longevity.

Green spaces also strengthen communities. Parks serve as informal gathering places where neighbors meet, creating social bonds that strengthen community resilience. Community gardens enable food growing, economic benefit, and skill-sharing. Green streets with trees and plants feel safer than barren concrete-research shows reduced crime in greened neighborhoods. Economic value increases-properties near quality parks command higher prices, and businesses thrive in green neighborhoods.

Yet urban green spaces face systematic threats. City budgets prioritize immediate needs over parks. Real estate pressure converts green spaces into development. Maintenance proves expensive and thus deferred. Inequity means wealthy neighborhoods enjoy green abundance while low-income neighborhoods lack adequate parks. Fewer than thirty percent of urban residents in many cities have access to quality green space within walking distance.

Successful cities are reversing this trend. Paris expanded parks and green corridors dramatically. Melbourne invested in street tree planting, targeting shade coverage increases. Singapore converted former industrial lands into nature reserves and parks. Toronto created green roofs on public buildings. Barcelona redesigned streets to prioritize pedestrians and plants. These cities recognize that greening requires sustained investment, political will, and community engagement. Budgets must shift to prioritize environmental quality. Planning processes must protect existing green space from development. Citizens must advocate for and use green spaces, building political support for continued investment.

The path forward is clear: cities that invest in green spaces build healthier, more livable, more resilient communities.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Informative Summary',
        instruction:
          'Write an informative summary of the environmental and human health benefits of urban green spaces. Organize your response using clear headings for environmental and health benefits. Your answer should be approximately 150-200 words.',
        marks: 20,
      },
      {
        taskNumber: 2,
        title: 'Persuasive Campaign',
        instruction:
          'Write a persuasive campaign text for your local council arguing for increased investment in parks and green spaces. Address the concerns about budget constraints and maintenance costs, and explain why green space investment is economically justified. Your answer should be approximately 250-300 words.',
        marks: 30,
      },
      {
        taskNumber: 3,
        title: 'Community Action Guide',
        instruction:
          'Create a guide for community members on how to advocate for green space improvement in their neighborhood. Include practical steps, potential partners to engage, and how to build community support. Your answer should be approximately 200-250 words.',
        marks: 30,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Completeness of benefits',
              marks: 10,
              details:
                'Covers environmental benefits (air quality, stormwater, heat reduction, carbon sequestration) and health benefits (cognitive, stress reduction, physical). Award full marks for comprehensive coverage.',
            },
            {
              criterion: 'Organization and clarity',
              marks: 5,
              details:
                'Effective use of headings to separate environmental and health sections. Sentences clearly present specific benefits.',
            },
            {
              criterion: 'Evidence and examples',
              marks: 5,
              details:
                'References specific benefits from source material (e.g., stormwater management, cognitive development).',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Persuasive effectiveness',
              marks: 12,
              details:
                'Compelling argument for increased investment. Uses evidence and logic. Tone appropriate for council communication.',
            },
            {
              criterion: 'Addressing cost concerns',
              marks: 10,
              details:
                'Specifically addresses budget constraints and maintenance costs, explaining why investment is justified economically.',
            },
            {
              criterion: 'Structure and impact',
              marks: 8,
              details:
                'Clear argument development. Strong opening establishing need. Effective conclusion motivating council action.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Practical steps clarity',
              marks: 12,
              details:
                'Provides clear, actionable steps community members can follow. Steps are realistic and specific.',
            },
            {
              criterion: 'Identifying partners and resources',
              marks: 10,
              details:
                'Identifies relevant partners (council, environmental groups, businesses) and explains how to engage them.',
            },
            {
              criterion: 'Building community support',
              marks: 8,
              details:
                'Addresses how to generate momentum and build broad community engagement in advocacy.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `URBAN GREEN SPACES: ENVIRONMENTAL AND HEALTH BENEFITS

Environmental Benefits

Urban green spaces provide critical environmental functions. Trees and plants absorb air pollutants and produce oxygen, directly improving air quality for city residents. Green spaces manage stormwater runoff, reducing flooding during heavy rain and preventing water system overload. Plants reduce urban heat island effect-the phenomenon where cities become dangerously warmer than surrounding areas. Green spaces provide habitat for wildlife, maintaining urban biodiversity. Perhaps most importantly, vegetation sequesters carbon, contributing meaningfully to climate change mitigation.

Human Health Benefits

Research demonstrates that green space exposure significantly improves human wellbeing. Children who spend time in natural settings show improved cognitive abilities, better focus, and reduced attention deficit symptoms. Green space exposure measurably reduces stress-blood pressure decreases, stress hormones drop, and anxiety lessens. Mental health benefits are documented-communities with accessible green spaces show lower rates of depression and mental illness. Elderly residents who use parks maintain better mobility and independence longer. Regular green space exposure contributes to longer lifespans and generally improved health outcomes.

Green spaces serve essential rather than optional functions in healthy cities.`,
        marks: 20,
        feedback:
          'Excellent comprehensive coverage organized clearly with headings. Good balance of environmental and health benefits. Could include slightly more specific examples.',
      },
      {
        taskNumber: 2,
        answer: `INVESTING IN GREEN: THE ECONOMIC CASE FOR URBAN PARKS

Our council faces budget pressures. Difficult choices must be made about spending priorities. Yet I urge council members to recognize that park investment is not discretionary spending-it is essential infrastructure investment that generates measurable economic returns.

Consider maintenance cost concerns honestly. Yes, parks require ongoing maintenance. Yet this maintenance creates local jobs. Park upkeep employs maintenance workers, horticulturalists, and community engagement staff. These are local jobs, with wages spent locally, generating economic activity. Deferred maintenance in neglected neighborhoods ironically costs more-abandoned parks require intensive restoration while providing community harm in the interim.

More importantly, green space generates substantial direct economic value. Properties near quality parks sell for significantly higher prices-studies show ten to fifteen percent premiums for proximity to parks. Higher property values mean higher tax revenue for councils. Over five years, increased tax revenue from properties near improved parks frequently exceeds green space investment. Businesses thrive in green neighborhoods, attracting customers and employees. Commercial activity increases in green areas, again generating business tax revenue.

Health benefits generate indirect economic advantage. Residents using parks show measurably better health outcomes-lower rates of depression, obesity, and stress-related illness. Better health means lower healthcare costs for individuals and the public system. Healthier residents miss fewer work days, increasing productivity. These health gains are difficult to quantify yet economically significant.

Consider the alternative. Neighborhoods without green space experience higher healthcare costs, lower property values, reduced business activity, and social fragmentation. These neighborhoods require greater public expenditure on health and social services. So called "budget savings" from neglecting parks generate larger future costs through health, social, and infrastructure problems.

The economic case is clear: invest in parks now, or pay far more later in health, infrastructure, and social costs.`,
        marks: 29,
        feedback:
          'Strong persuasive argument directly addressing cost concerns. Excellent economic reasoning with specific value propositions. Could strengthen with one additional specific example.',
      },
      {
        taskNumber: 3,
        answer: `COMMUNITY GUIDE: ADVOCATING FOR LOCAL GREEN SPACE IMPROVEMENT

Step 1: Understand Your Current Situation

Begin by documenting your neighborhood's green space. How much accessible park space exists within a ten-minute walk? What is the condition of existing parks? What neighborhoods lack adequate green space? This understanding grounds your advocacy in facts rather than general complaints.

Step 2: Build Your Advocacy Coalition

Contact local environmental groups, school parent-teacher associations, seniors' organizations, and local business associations. These groups benefit from green space and will support advocacy. Each brings different perspectives and community reach. A coalition of diverse stakeholders proves more persuasive than individuals.

Step 3: Identify Specific Improvements

Instead of abstract requests for "more green space," propose specific projects: turning an unused lot into a community garden, planting trees on a barren street, improving an existing park's maintenance, creating a new small park on available land. Specific proposals are easier for councils to evaluate and fund.

Step 4: Gather Community Support

Organize a survey asking neighbors about their green space priorities. Collect signatures on a petition supporting improvements. Host community meetings to discuss priorities. Document this support-councils respond to demonstrated community demand.

Step 5: Engage Decision-Makers

Present your coalition's findings and proposals to council members, planning committees, and environmental department heads. Provide data about community support. Explain health, environmental, and economic benefits. Invite officials to walk your neighborhood and see current conditions.

Step 6: Maintain Long-Term Pressure

Improvement takes time. Attend council meetings, send letters, maintain media attention. Celebrate small victories to maintain momentum. The most successful green space campaigns sustain effort over years.

Your advocacy creates healthier, more livable neighborhoods for everyone.`,
        marks: 27,
        feedback:
          'Clear, practical steps with logical progression. Good identification of coalition partners. Could expand slightly on communication strategies with media.',
      },
    ],
  },

  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 3: Digital Literacy
  {
    id: 'ocr-lang-comp01-set2-003',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 3: Digital Literacy in the Modern Age',
    description:
      'Students read about digital literacy challenges and respond to writing tasks involving explanation, persuasion, and guidance.',
    sourceText: `DIGITAL LITERACY: THE ESSENTIAL SKILL OF THE 21ST CENTURY

In 2024, being literate means far more than reading and writing. Digital literacy-the ability to find, evaluate, create, and communicate using digital technologies-has become as fundamental as traditional literacy. Yet millions of people lack basic digital skills, creating inequalities in education, employment, and access to essential services. Addressing digital literacy is not optional; it is essential for inclusive, functioning societies.

Digital literacy encompasses multiple competencies. Technical skills include operating devices and using software applications. Information literacy involves finding relevant information, evaluating source credibility, and distinguishing reliable information from misinformation. Communication skills include understanding how to communicate safely online and recognizing digital etiquette norms. Creative skills involve using digital tools to produce content. Critical thinking about technology requires understanding algorithms, data privacy, and digital influence. Cybersecurity awareness includes recognizing phishing scams, strong password practices, and malware risks.

The gaps are substantial and concerning. In developed nations, up to twenty percent of adults lack basic digital skills. In developing nations, the proportion exceeds seventy percent in many regions. Older adults show particular vulnerability-nearly half of adults over sixty-five report low digital confidence. Low-income households lack devices and reliable internet access. Rural communities face bandwidth limitations. These gaps create cascading disadvantages: people without digital skills struggle to access online banking, government services, healthcare information, job applications, and educational opportunities.

The consequences of digital illiteracy are increasingly serious. During the COVID-19 pandemic, digital divide became starkly visible-students without internet access fell behind educationally, workers without digital skills struggled with remote work, and isolated elderly people lacked digital tools for connection. People vulnerable to online fraud and scams lose money and have identities compromised. Misinformation spreads rapidly among digitally unsophisticated populations. Job opportunities narrow for workers without digital skills as automation and digital transformation accelerate.

Conversely, digital literacy generates substantial benefits. People with strong digital skills access better job opportunities and higher earning potential. Digital literacy enables lifelong learning-accessing courses, tutorials, and knowledge freely online. Older adults with digital skills maintain social connections and independence longer. Parents who understand digital environments can guide children's technology use more effectively. Citizens who can evaluate information critically resist manipulation and make better-informed political choices. Entrepreneurs can reach customers globally through digital platforms.

Addressing digital literacy requires multi-pronged approaches. Schools must integrate digital skills throughout curricula, not as optional add-ons. Adult education programs should make digital training accessible and affordable. Libraries can serve as community technology centers providing equipment, training, and support. Technology companies should design more intuitive interfaces reducing barriers for less-experienced users. Policymakers must ensure internet access is universal. Media literacy education should teach information evaluation and misinformation recognition. Intergenerational mentoring can leverage digitally-skilled younger people to help older adults.

The future belongs to those who can navigate digital environments. Society must ensure all people develop these essential skills.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Summary Task',
        instruction:
          'Write a summary of the key digital literacy skills needed in modern life and the gaps that exist in digital competency. Your answer should be approximately 150-200 words.',
        marks: 20,
      },
      {
        taskNumber: 2,
        title: 'Persuasive Proposal',
        instruction:
          'Write a persuasive proposal to your local authority arguing that they should fund a free community digital literacy program. Address the benefits to different groups and explain how this investment benefits the whole community. Your answer should be approximately 250-300 words.',
        marks: 30,
      },
      {
        taskNumber: 3,
        title: 'Parent Information Guide',
        instruction:
          "Create an informative guide for parents on digital literacy, covering what it is, why it matters, warning signs of digital problems, and how parents can help develop their children's digital skills. Your answer should be approximately 200-250 words.",
        marks: 30,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Identifying digital literacy competencies',
              marks: 10,
              details:
                'Covers technical skills, information literacy, communication, creative skills, critical thinking, and cybersecurity. Award full marks for comprehensive coverage.',
            },
            {
              criterion: 'Explaining existing gaps',
              marks: 5,
              details:
                'Identifies specific gaps (age, income, geography, development level). Explains implications of gaps.',
            },
            {
              criterion: 'Clarity and conciseness',
              marks: 5,
              details:
                'Summary is clear, well-organized, and appropriately detailed within word limit.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Persuasive case for program',
              marks: 12,
              details:
                'Makes compelling argument for public digital literacy funding. Uses evidence and logic. Addresses why local authority should prioritize this.',
            },
            {
              criterion: 'Demonstrating community benefit',
              marks: 10,
              details:
                'Shows how program benefits diverse groups (elderly, low-income, families). Explains broader community advantages.',
            },
            {
              criterion: 'Structure and tone',
              marks: 8,
              details:
                'Appropriate formal tone for government proposal. Clear argument development with logical conclusion.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Explaining digital literacy',
              marks: 12,
              details:
                'Clearly explains what digital literacy means and what skills are included, in language accessible to parents.',
            },
            {
              criterion: 'Addressing parental concerns',
              marks: 10,
              details:
                'Identifies warning signs of problems (addiction, exposure to harmful content). Explains risks clearly.',
            },
            {
              criterion: 'Practical guidance',
              marks: 8,
              details:
                "Provides specific, actionable steps parents can take to develop children's digital skills safely.",
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `DIGITAL LITERACY: ESSENTIAL SKILLS AND EXISTING GAPS

Digital literacy encompasses multiple essential competencies for modern life. Technical skills include operating devices and applications. Information literacy involves finding information and evaluating source credibility in an era of misinformation. Communication skills include safe online communication and understanding digital etiquette. Creative skills enable using digital tools productively. Critical thinking about technology includes understanding algorithms and data privacy. Cybersecurity awareness includes recognizing scams and protecting personal information.

Despite these competencies' importance, substantial gaps exist. In developed nations, up to twenty percent of adults lack basic digital skills, with older adults showing particular vulnerability. In developing regions, digital literacy rates remain very low. Low-income households lack device access and reliable internet. Rural communities face bandwidth limitations. These gaps cascade into disadvantages-people without digital skills cannot access online banking, government services, healthcare information, or job applications easily. The gaps particularly affect elderly people, low-income communities, and less-developed regions.

Addressing these gaps requires community and governmental commitment.`,
        marks: 20,
        feedback:
          'Comprehensive coverage of digital literacy competencies and gaps. Good identification of affected populations. Could include specific statistics more effectively.',
      },
      {
        taskNumber: 2,
        answer: `PROPOSAL: ESTABLISHING A COMMUNITY DIGITAL LITERACY PROGRAM

We live in a digital age where essential services-banking, healthcare, government, employment-increasingly require digital access. Yet substantial portions of our community lack basic digital skills, creating serious disadvantages. I propose our local authority fund a free community digital literacy program. This investment will generate significant returns for our entire community.

Consider the elderly population. People over sixty-five constitute a growing demographic yet show the lowest digital confidence. Many retirees are isolated without digital tools for connection. Digital literacy enables video calls with grandchildren, online banking independence, health information access, and continued learning. Improving elderly digital skills strengthens our entire community by reducing social isolation and associated healthcare costs. Healthier, more connected elderly people require fewer public services.

Low-income families face different barriers. Lack of device access and internet connectivity prevents children from accessing educational opportunities increasingly available only online. Parents without digital skills struggle in job markets demanding technology competency. A community program providing free training and device access creates pathways to better employment and educational outcomes. Economic mobility increases across a generation.

Workforce development benefits extend broadly. Employers struggling to find workers with basic digital skills can partner with our program, creating recruitment pipelines. Small businesses in our community can access training enabling digital transformation. Workers displaced by automation can retrain in digital fields. Our community becomes more economically competitive.

Budget efficiency justifies this investment. Prevention is cheaper than remediation. Teaching digital skills costs less than managing the consequences of digital exclusion-fraud victimization, healthcare costs, educational failure, unemployment. A community digital literacy program prevents far more costly problems downstream.

This proposal requires modest initial investment for substantial community return. I urge approval.`,
        marks: 28,
        feedback:
          'Strong persuasive proposal with clear benefits demonstrated for multiple populations. Good economic reasoning. Could strengthen by addressing implementation details.',
      },
      {
        taskNumber: 3,
        answer: `DIGITAL LITERACY FOR PARENTS: A GUIDE

What is Digital Literacy?

Digital literacy means the ability to use technology safely and effectively. It includes finding reliable information online, understanding privacy and security, communicating appropriately online, and using technology to learn and create. Just as you teach children to read books and write letters, you can teach them digital literacy.

Why Does It Matter?

In today's world, digital skills are as essential as traditional literacy. Children without strong digital literacy struggle in education and later face employment disadvantages. Digital literacy also protects-young people who understand online risks avoid fraud, cyberbullying, and inappropriate content exposure. Digital literacy enables learning, creativity, and connection.

Warning Signs of Digital Problems

Watch for excessive screen time interfering with sleep, schoolwork, or physical activity. Notice if your child avoids offline activities they previously enjoyed. Look for anxiety or secretiveness about online activities. Pay attention to mood changes after online use. These warning signs suggest problems requiring conversation and adjustment.

How Can Parents Help?

Start by limiting screen time and ensuring devices aren't in bedrooms during sleep hours. Discuss online privacy-children should understand that information shared online can be permanent. Teach about stranger danger online as well as offline. Model healthy technology use yourself. Know your child's online contacts and accounts. Have open conversations rather than surveillance-children who trust parents share online experiences more openly.

Encourage productive digital use: research projects, creating content, online learning. Teach password safety and privacy settings. Discuss recognizing manipulation and misinformation. When children understand online risks and protective strategies, they develop healthy digital habits.

Digital literacy empowers children while protecting them from risks. Your involvement as a parent matters tremendously.`,
        marks: 26,
        feedback:
          'Clear, accessible guide addressing parent concerns effectively. Good balance of explanation and practical guidance. Could include more specific warning sign examples.',
      },
    ],
  },

  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 4: Ocean Plastic Pollution
  {
    id: 'ocr-lang-comp01-set2-004',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 4: The Ocean Plastic Crisis',
    description:
      'Students read about ocean plastic pollution and respond to writing tasks involving analysis, persuasion, and advocacy.',
    sourceText: `PLASTIC IN THE OCEAN: AN ENVIRONMENTAL CATASTROPHE

Every year, approximately ten million tons of plastic waste enters the ocean. This staggering figure represents an ongoing environmental catastrophe that threatens marine ecosystems, affects human health, and demands immediate global action. The problem has grown from environmental concern to urgent crisis requiring transformation in how humanity produces, uses, and disposes of plastic.

The sources of ocean plastic are diverse and widespread. Fishing nets intentionally abandoned remain in the water indefinitely, trapping and killing marine life for decades-these "ghost nets" account for approximately one tenth of ocean plastic. Single-use plastics-bags, bottles, straws, packaging-constitute the bulk of ocean plastic. Many of these items originate from developed nations yet float across oceans to accumulate in developing countries and remote ocean regions. Industrial microplastics from synthetic textiles, cosmetics, and car tire wear persist in marine environments. Improper waste management in coastal regions allows plastic to wash into waterways and oceans. Cruise ships, fishing vessels, and cargo ships contribute through intentional dumping and accidental loss of cargo.

The impacts are devastating. Large plastic pieces entangle marine animals-sea turtles, dolphins, seals, and seabirds choke on plastic or become tangled in fishing nets. Ingestion of plastic causes internal injuries and starvation as animals feel full without obtaining nutrition. Microplastics-tiny plastic fragments-circulate through marine food chains, accumulating in fish and shellfish that humans consume, potentially affecting human health. Plastic debris carries invasive species across oceans, disrupting native ecosystems when transported organisms establish themselves in new environments. Plastic particles release toxic chemicals into seawater, concentrating in marine organisms.

The scale is incomprehensible. The Great Pacific Garbage Patch encompasses an area twice the size of the continental United States. This is not a cohesive island of plastic but rather an area where plastic concentration exceeds background levels. Smaller garbage patches exist in other oceans. Microplastics have been detected in the deepest ocean trenches, the remotest sea ice, and the most pristine marine environments. Literally no ocean region remains uncontaminated. The accumulation continues-at current rates, the ocean will contain more plastic mass than fish by 2050.

The solutions exist but demand systemic change. Reducing single-use plastic consumption through behavioral change-refusing straws, bags, and unnecessary packaging-decreases ocean sources immediately. Extended producer responsibility policies require manufacturers to manage plastic product end-of-life, incentivizing less wasteful design. Improved waste management infrastructure in developing countries prevents plastic reaching oceans. Fishing regulation limits ghost net abandonment and encourages retrieval of lost gear. Microplastic regulations restrict cosmetic and industrial microplastics. Ocean cleanup technologies remove accumulated plastic, though these address symptoms rather than causes. Fundamental transition to alternative materials-paper, plant-based, compostable-requires innovation and investment.

Individual action matters. Consumers can refuse single-use plastics, support companies using sustainable packaging, properly dispose of waste, and advocate for policy change. But individual action alone is insufficient-systemic transformation requires corporate responsibility, governmental regulation, and international cooperation. The ocean's survival, and ultimately human survival, depends on urgent, comprehensive action.

The choice is stark: change our plastic consumption now through voluntary action, or face mandatory restrictions and environmental catastrophe later.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Analysis Task',
        instruction:
          'Write an analysis of the sources of ocean plastic pollution and the impacts it has on marine ecosystems. Organize your response clearly, addressing sources and impacts separately. Your answer should be approximately 150-200 words.',
        marks: 20,
      },
      {
        taskNumber: 2,
        title: 'Persuasive Article',
        instruction:
          'Write a persuasive article for a business magazine arguing that corporations must take responsibility for plastic waste by implementing sustainable packaging and production practices. Address cost concerns and explain why this is economically advantageous long-term. Your answer should be approximately 250-300 words.',
        marks: 30,
      },
      {
        taskNumber: 3,
        title: 'Action Guide',
        instruction:
          'Create a practical guide for consumers on reducing personal plastic consumption and ocean plastic impact. Include specific daily actions, shopping habits, and advocacy steps. Your answer should be approximately 200-250 words.',
        marks: 30,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Identifying plastic sources',
              marks: 10,
              details:
                'Covers fishing nets, single-use plastics, microplastics, industrial sources, improper waste management, and marine vessels. Award full marks for comprehensive coverage.',
            },
            {
              criterion: 'Explaining ecosystem impacts',
              marks: 5,
              details:
                'Addresses animal entanglement, ingestion consequences, food chain accumulation, ecosystem disruption, and chemical release.',
            },
            {
              criterion: 'Organization and clarity',
              marks: 5,
              details:
                'Clear separation of sources and impacts. Information is presented logically and understandably.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Persuasive case for corporate responsibility',
              marks: 12,
              details:
                'Makes compelling business argument for sustainable practices. Uses evidence and logic. Addresses why corporations should prioritize this.',
            },
            {
              criterion: 'Addressing cost concerns',
              marks: 10,
              details:
                'Specifically addresses short-term costs and explains long-term economic advantages (consumer loyalty, regulatory compliance, risk mitigation).',
            },
            {
              criterion: 'Structure and tone',
              marks: 8,
              details:
                'Professional business magazine tone. Clear argument with logical development and compelling conclusion.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Practical daily actions',
              marks: 12,
              details:
                'Provides specific, achievable daily actions consumers can implement immediately.',
            },
            {
              criterion: 'Shopping and consumption guidance',
              marks: 10,
              details:
                'Addresses sustainable shopping habits, packaging choices, and product selection.',
            },
            {
              criterion: 'Advocacy and systemic change',
              marks: 8,
              details:
                'Includes ways consumers can advocate for policy change and corporate responsibility.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `SOURCES AND IMPACTS OF OCEAN PLASTIC POLLUTION

Sources of Ocean Plastic

Ocean plastic originates from diverse sources. Fishing nets, intentionally abandoned or accidentally lost, remain in water for decades trapping marine life-these "ghost nets" account for approximately ten percent of ocean plastic. Single-use plastics including bags, bottles, and packaging constitute the bulk of ocean pollution, originating primarily from developed nations yet accumulating in developing countries and remote regions. Industrial microplastics from synthetic textiles, cosmetics, and car tire wear persist in marine environments. Coastal regions with inadequate waste management see plastic wash into waterways and oceans. Marine vessels including cruise ships, fishing boats, and cargo ships contribute through dumping and cargo loss.

Impacts on Marine Ecosystems

The impacts are severe and widespread. Large plastic pieces entangle marine animals-sea turtles, dolphins, and seabirds become trapped or choke, with many species facing extinction threats. Ingestion causes internal injuries and starvation as animals feel full without obtaining nutrition. Microplastics circulate through food chains, accumulating in fish and shellfish. Plastic carries invasive species across oceans, disrupting native ecosystems. Plastic particles release toxic chemicals into seawater, concentrating in marine organisms.

The accumulation continues at alarming rates threatening all ocean ecosystems.`,
        marks: 19,
        feedback:
          'Good comprehensive coverage of sources and impacts. Clear organization. Could strengthen with specific quantitative examples about scale.',
      },
      {
        taskNumber: 2,
        answer: `CORPORATE RESPONSIBILITY: WHY SUSTAINABLE PACKAGING MATTERS ECONOMICALLY

Business leaders often view environmental responsibility and profitability as opposing forces. This is false. In reality, adopting sustainable packaging practices generates substantial long-term economic advantage while addressing urgent environmental problems. I propose that corporations embracing plastic reduction and sustainable packaging gain competitive advantage in a changing market.

Yes, transitioning to sustainable packaging requires upfront costs. Developing new materials, retooling production lines, and training processes involve investment. Short-term expenses increase. Yet this cost-benefit analysis is shortsighted. Regulations are increasingly restricting plastic use-corporations that wait face mandatory transformation under regulatory pressure rather than strategic advantage. Early adopters shape regulations, influence standards, and build competitive moats. Those forced to transition later face rushed, expensive implementation.

Consumer preference increasingly favors sustainable companies. Millennials and Gen Z consumers actively prefer environmentally responsible brands and willingly pay premiums for sustainable products. Market research consistently shows consumers prefer companies demonstrating environmental commitment. Companies seen as plastic polluters face boycotts and reputational damage. Sustainable packaging becomes marketing advantage-free positive publicity as consumers share environmental values. Customer loyalty increases among environmentally conscious demographics.

Supply chain resilience improves through sustainability. Plastic dependency on finite petroleum sources creates long-term supply uncertainty. Alternative materials provide diversified sourcing and supply stability. Companies developing sustainable supply chains reduce future vulnerability to resource scarcity.

Risk mitigation is substantial. Corporations facing plastic-related lawsuits, regulatory fines, and supply chain disruption can avoid these costs through proactive transition. Insurance and financing costs decrease for companies demonstrating environmental responsibility.

The short-term cost of sustainable packaging transformation is outweighed by long-term benefits: regulatory advantage, market differentiation, consumer loyalty, supply chain resilience, and risk mitigation. Companies investing now in sustainability gain competitive advantage over slow adopters forced to transform under duress.

The economic case is compelling.`,
        marks: 29,
        feedback:
          'Excellent persuasive argument with strong business logic. Addresses cost concerns thoroughly with long-term perspective. Could strengthen with specific company examples.',
      },
      {
        taskNumber: 3,
        answer: `CONSUMER ACTION GUIDE: REDUCING PLASTIC CONSUMPTION

Daily Actions

The most impactful action is simply refusing single-use plastics. Refuse plastic bags by bringing reusable bags shopping. Refuse straws by requesting drinks without them or carrying reusable straws. Refuse plastic bottles by carrying a refillable water bottle. Refuse takeaway packaging by eating at restaurants or bringing containers for takeout. These simple refusals immediately eliminate sources of ocean plastic.

Smart Shopping Habits

Choose loose vegetables rather than pre-packaged. Select products in glass, metal, or paper containers instead of plastic. Buy package-free items from bulk bins. Choose companies using minimal or sustainable packaging. Check packaging for recycling symbols and material composition. Choose products from companies committed to sustainability. Small shopping choices aggregate into substantial environmental impact.

At Home

Reduce consumption overall-buy fewer items, choosing quality over quantity. Compost food waste reducing trash volume. Recycle properly, understanding your region's specific guidelines. Avoid single-use items: choose cloth napkins over paper towels, metal silverware over disposable, cloth shopping bags over plastic. Dispose of hazardous materials properly so they don't contaminate oceans. These household practices create cultural shifts toward sustainability.

Advocacy and Systemic Change

Individual action matters but is insufficient alone. Contact elected representatives supporting plastic reduction regulations. Support businesses demonstrating environmental commitment through purchases. Participate in beach cleanups removing existing ocean plastic. Join environmental organizations advocating policy change. Share information about ocean plastic with friends and family, expanding awareness. Push corporations toward sustainable practices through consumer pressure and social media advocacy.

Personal responsibility combines with systemic change creating substantial environmental impact.`,
        marks: 25,
        feedback:
          'Clear, actionable guide with practical suggestions across multiple areas. Good balance of personal and systemic actions. Could strengthen with specific product examples.',
      },
    ],
  },

  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 5: Mental Health in Schools
  {
    id: 'ocr-lang-comp01-set2-005',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 5: Supporting Mental Health in Schools',
    description:
      'Students read about school mental health challenges and respond to writing tasks involving analysis, persuasion, and guidance.',
    sourceText: `MENTAL HEALTH IN SCHOOLS: AN URGENT PRIORITY

The mental health crisis among young people has become impossible to ignore. Rates of anxiety, depression, and self-harm among school-age children have increased dramatically over the past decade. Schools, positioned at the center of young people's social and academic lives, bear both challenges and responsibility for supporting mental health. Yet many schools lack adequate resources, training, and frameworks for mental health support. Addressing this crisis requires recognition that mental health is as important as physical health in educational settings.

The statistics are alarming. Approximately one in five adolescents experience mental health difficulties. Anxiety disorders and depression increasingly begin in childhood rather than adolescence. Rates of self-harm among teenagers have doubled in recent years, particularly among girls. Suicide remains a leading cause of death among young people. School refusal and academic avoidance correlate strongly with untreated mental health conditions. The pandemic accelerated these trends-isolation, uncertainty, and disrupted routines intensified mental health struggles. Young people report feeling overwhelmed by academic pressure, social comparison, and future uncertainty.

Contributors to these struggles are complex. Academic pressure creates stress as young people face increasing standardized testing, competition for university places, and pressure to maintain high grades. Social comparison, amplified by social media, generates anxiety and low self-esteem as young people compare themselves to carefully curated social media images. Sleep deprivation from homework, social media use, and earlier school start times contributes to mental health decline. Bullying, including cyberbullying, creates persistent anxiety and social withdrawal. Family stress including parental conflict, financial instability, and loss affects school-age children profoundly. Developmental challenges of adolescence including identity formation and social navigation overwhelm some young people. Early traumatic experiences create long-lasting psychological effects.

Schools are uniquely positioned to address these challenges. Teachers spend more time with students than parents do during school years. Schools can identify struggling students early before crises develop. Mental health support integrated into schools increases accessibility-students receive help in familiar environments without stigma of seeking specialized mental health services. Schools provide space for prevention-teaching coping skills, resilience, and help-seeking before problems become severe.

Yet barriers are substantial. Lack of funding limits mental health resources and training. Shortage of school counselors means students wait months for support. Teacher training rarely includes adequate mental health preparation, leaving educators unprepared for distressed students. Stigma remains-students fear negative judgment from peers and teachers about mental health struggles. Academics remain prioritized over wellbeing, sending messages that mental health is secondary. Privacy concerns, though legitimate, sometimes prevent necessary information-sharing. Families facing barriers to external mental health care depend entirely on school resources.

Solutions require systemic change. Funding must increase for school mental health services-adding counselors, psychologists, and nurse practitioners. Curriculum must integrate mental health education teaching coping skills, resilience, and help-seeking. Teacher training must include mental health basics, recognizing distressed students, and appropriate responses. Anti-bullying policies with enforcement must be strengthened. Academic expectations must be reviewed to reduce pressure. Physical activity and sleep must be prioritized through schedule changes and education. Peer support programs train students to recognize struggling friends and connect them to help. Family engagement programs educate parents about mental health and provide family support. Access to specialized services should extend beyond school for complex needs. School culture must reduce stigma through open discussion of mental health as normal rather than shameful.

The evidence is clear: investing in school mental health saves lives, improves academic outcomes, and creates healthier communities.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Analysis Task',
        instruction:
          'Write an analysis identifying the key factors contributing to mental health problems in young people and explaining how schools can identify and support struggling students early. Your answer should be approximately 150-200 words.',
        marks: 20,
      },
      {
        taskNumber: 2,
        title: 'Persuasive Argument',
        instruction:
          'Write a persuasive article for educational leaders arguing that mental health support should be prioritized equally with academic achievement in schools. Address resource allocation concerns and explain why this benefits academic performance. Your answer should be approximately 250-300 words.',
        marks: 30,
      },
      {
        taskNumber: 3,
        title: 'Student Support Guide',
        instruction:
          'Create an informative guide for students on recognizing mental health struggles in themselves and friends, and accessing available support. Include warning signs, resources, and how to help a struggling friend. Your answer should be approximately 200-250 words.',
        marks: 30,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Identifying contributing factors',
              marks: 10,
              details:
                'Covers academic pressure, social comparison, sleep deprivation, bullying, family stress, developmental challenges, and trauma. Award full marks for comprehensive coverage.',
            },
            {
              criterion: 'School identification and support',
              marks: 5,
              details:
                'Explains how schools can identify struggling students and provide early intervention.',
            },
            {
              criterion: 'Analysis clarity',
              marks: 5,
              details: 'Analysis is clear, logical, and well-organized within word limit.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Persuasive case for mental health priority',
              marks: 12,
              details:
                'Makes compelling argument that mental health deserves equal prioritization with academics. Uses evidence and logic.',
            },
            {
              criterion: 'Addressing resource concerns',
              marks: 10,
              details:
                'Addresses funding constraints and explains how mental health investment benefits academic performance.',
            },
            {
              criterion: 'Structure and effectiveness',
              marks: 8,
              details:
                'Strong argument development. Appropriate tone for educational leadership audience. Compelling conclusion.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Warning sign identification',
              marks: 12,
              details:
                'Clearly identifies warning signs of mental health struggles (behavioral, academic, social changes).',
            },
            {
              criterion: 'Resource accessibility',
              marks: 10,
              details:
                'Lists specific available support resources and how students access them. Clear and welcoming presentation.',
            },
            {
              criterion: 'Supporting others',
              marks: 8,
              details:
                'Provides practical guidance on helping struggling friends and maintaining own wellbeing.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `CONTRIBUTORS TO MENTAL HEALTH STRUGGLES AND EARLY SCHOOL IDENTIFICATION

Multiple factors contribute to young people's mental health challenges. Academic pressure creates stress through standardized testing, competition for university places, and high grade expectations. Social comparison, amplified by social media, generates anxiety and low self-esteem as young people compare themselves to curated online images. Sleep deprivation from homework and social media disrupts wellbeing. Bullying creates persistent anxiety and social withdrawal. Family stress including parental conflict and loss profoundly affects school-age children. Developmental challenges of adolescence-identity formation and social navigation-overwhelm some. Early traumatic experiences create lasting psychological effects.

Schools can identify struggling students early through multiple approaches. Teachers, spending significant time with students, notice behavioral changes indicating distress. Academic performance decline often signals underlying mental health problems. Social withdrawal-reduced friend engagement and participation decline-suggests struggling. Absenteeism increases when students avoid school due to anxiety or depression. Specific concerning behaviors including self-harm discussion or unusually aggressive responses warrant intervention. Once identified, schools can provide early support through counselor referral, teacher mentorship, and peer support programs. Early intervention prevents crisis development and improves outcomes significantly.

School vigilance combined with supportive response saves lives.`,
        marks: 20,
        feedback:
          'Comprehensive identification of contributing factors with clear examples. Good explanation of school identification methods. Could strengthen with specific warning sign details.',
      },
      {
        taskNumber: 2,
        answer: `MENTAL HEALTH SHOULD EQUAL ACADEMICS: A BUSINESS CASE FOR SCHOOL LEADERSHIP

Educational leaders face pressure to maximize academic achievement. Testing scores, university admission rates, and academic metrics receive constant attention and drive resource allocation. Yet this focus inadvertently undermines the academic success they seek. Paradoxically, prioritizing mental health support actually improves academic outcomes more effectively than doubling down on academic pressure. I propose that educational leaders recognize this reality and allocate resources equal to academic and mental health support.

The business case is straightforward. Students experiencing untreated anxiety, depression, or trauma cannot concentrate academically. Mental illness is not a luxury concern-it directly impairs cognitive function, memory, and learning. Students with mental health support show measurably better academic performance than students without support. Research consistently demonstrates that students receiving mental health intervention improve grades and test scores. This is not coincidence-when students' basic psychological needs are met, their capacity for learning increases.

Furthermore, academic pressure itself drives mental health crisis. Students pushed toward ever-higher achievement become anxious and depressed. Perfectionism and fear of failure impair learning rather than enhance it. Student burnout reduces long-term academic engagement. The pursuit of academic metrics inadvertently creates conditions undermining sustainable academic achievement.

School mental health support generates downstream benefits. Students who develop coping skills and resilience face life challenges more effectively. Attendance improves when students enjoy school and experience manageable stress. Discipline problems decrease as students develop emotional regulation skills. Peer relationships improve, creating supportive school communities. Teacher stress decreases when managing fewer behavioral crises.

Cost objections are valid yet shortsighted. Mental health resources require budget allocation. Yet the cost of NOT supporting mental health is far higher-crisis interventions, special education placements for unidentified mental health problems, student dropouts, and untreated conditions affecting lifelong wellbeing. Prevention costs less than crisis management.

The choice is clear: invest in mental health support, watch academic outcomes improve, and create genuinely thriving schools.`,
        marks: 29,
        feedback:
          'Strong persuasive argument with compelling business logic. Excellent reframing of mental health as academically supportive. Could strengthen with specific outcome statistics.',
      },
      {
        taskNumber: 3,
        answer: `MENTAL HEALTH GUIDE FOR STUDENTS: RECOGNIZING AND ADDRESSING STRUGGLES

Understanding Your Own Mental Health

Mental health struggles are common and treatable-they do not mean weakness or failure. Recognize warning signs in yourself: persistent sadness lasting weeks, anxiety interfering with daily activities, sleep difficulties, appetite changes, loss of interest in activities you previously enjoyed, difficulty concentrating in class, social withdrawal from friends, or thoughts of harming yourself.

When you notice these signs, remember: struggling is not shameful. Seeking help is strength, not weakness. Your school has resources-counselors, nurses, teachers-trained to help.

Recognizing Struggling Friends

Watch for changes in behavior: friends becoming withdrawn from social activities, sudden academic decline, changes in appearance or hygiene, mood swings or unusual irritability, increased substance use, or concerning comments about hopelessness. Friends mentioning self-harm or suicide require immediate attention.

How to Help a Struggling Friend

Listen without judgment when friends share struggles. Avoid dismissing their feelings with "you're overreacting" or "just think positive." Simple presence and listening matter enormously. Encourage them to seek help-offer to accompany them to speak with a counselor if they're nervous. Share school resources including counselor contact information. In crisis situations when someone mentions suicide, immediately tell a trusted adult-teacher, counselor, parent-rather than keeping it secret.

Accessing Support

Your school has multiple support options. School counselors offer confidential conversation spaces. Nurses address physical health affecting mental health. Teachers can advocate for support. Your doctor can provide mental health referrals. Hotlines provide crisis support: text HOME to 741741 for Crisis Text Line (US) or similar services in your region. Online resources including Mind.org and Young Minds offer information.

Taking care of yourself matters. Use coping skills: exercise, spend time with friends, get adequate sleep, limit social media, engage in hobbies. Mental health is as important as physical health.

You are not alone. Asking for help is brave.`,
        marks: 26,
        feedback:
          'Accessible, helpful guide with practical information. Good balance of self-awareness and helping others. Could strengthen with more specific school-based resource examples.',
      },
    ],
  },

  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 6: Community Resilience
  {
    id: 'ocr-lang-comp01-set2-006',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 6: Building Community Resilience',
    description:
      'Students read about community resilience and respond to writing tasks involving explanation, persuasion, and community development guidance.',
    sourceText: `COMMUNITY RESILIENCE: STRENGTH THROUGH CONNECTION

When disaster strikes-natural disasters, economic upheaval, public health emergencies-communities experience varied outcomes. Some communities emerge relatively intact with minimal lasting damage. Others struggle for years, with some never fully recovering. The difference lies largely in community resilience: the capacity of communities to absorb stress, adapt to challenges, and emerge stronger. Building resilience is not optional preparation for disaster; it is essential investment in community wellbeing and long-term sustainability.

Community resilience encompasses multiple dimensions. Social cohesion refers to the strength of relationships within communities-do neighbors know and trust each other? Economic diversity ensures communities are not dependent on single industries or employers vulnerable to disruption. Infrastructure redundancy means systems have backup capabilities if primary systems fail. Institutional capacity refers to effective local governance, access to services, and organizational infrastructure. Health infrastructure includes quality healthcare and mental health services. Environmental sustainability ensures resource availability long-term. Cultural cohesion provides shared values and identity strengthening community bonds. Informational access enables communities to understand challenges and respond effectively.

The benefits of resilience extend far beyond crisis response. Resilient communities demonstrate better health outcomes-residents experience lower stress and better mental health when embedded in supportive communities. Educational outcomes improve when communities invest in learning and families support education. Economic vitality increases when communities attract and retain businesses and workers. Crime decreases in cohesive communities where people know neighbors and work collectively for safety. Civic engagement increases when people feel connected to community and invested in collective wellbeing. Innovation flourishes in communities supporting experimentation and entrepreneurship.

Yet building resilience faces systematic barriers. Increasing urbanization isolates people from neighborhoods. Digital technology enables connection across geography but can reduce local community engagement. Economic inequality creates division and reduces social cohesion. Population mobility means communities struggle with transient populations. Institutional fragmentation means organizations work independently rather than collaboratively. Limited resources mean poorer communities struggle more to invest in resilience infrastructure. Political polarization divides communities on fundamental issues. Short-term thinking prioritizes immediate needs over long-term capacity building.

Despite barriers, communities worldwide demonstrate resilience-building success. Community gardens transform vacant spaces into productive resources while building social connection. Neighborhood associations organize collective action on shared concerns. Cooperative businesses distribute economic benefits broadly while building worker investment. Community centers provide gathering spaces and services. Information networks using local media build awareness and connection. Community policing strategies build trust between law enforcement and residents. Disaster preparedness programs enable communities to respond effectively to predictable crises. Mentorship and apprenticeship programs transfer skills and knowledge. Community health workers extend healthcare access to underserved populations.

Building resilience requires commitment at multiple levels. Community members must engage with neighbors, support local institutions, and participate in collective action. Local governments must facilitate community gathering, support local businesses, and invest in infrastructure. Organizations should collaborate rather than compete, sharing resources and expertise. Businesses should invest in communities where they operate, recognizing long-term interdependence. Regional and national governments should ensure baseline resources and support for struggling communities. Individuals must recognize that personal security depends on community security-self-interest properly understood points toward investing in community resilience.

The evidence is clear: resilient communities are better prepared for whatever challenges emerge. In a world of increasing uncertainty, building community resilience is perhaps the most important investment possible.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Analytical Summary',
        instruction:
          'Write an analysis identifying the key dimensions of community resilience and explaining how these dimensions benefit communities beyond just crisis response. Your answer should be approximately 150-200 words.',
        marks: 20,
      },
      {
        taskNumber: 2,
        title: 'Persuasive Proposal',
        instruction:
          'Write a persuasive proposal to local government arguing that significant investment in community resilience programs is essential for long-term community wellbeing. Address cost concerns and explain how resilience investment generates economic returns. Your answer should be approximately 250-300 words.',
        marks: 30,
      },
      {
        taskNumber: 3,
        title: 'Community Engagement Guide',
        instruction:
          'Create a practical guide for community members on building local connections and contributing to community resilience. Include specific actions individuals can take and how to initiate community projects. Your answer should be approximately 200-250 words.',
        marks: 30,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Identifying resilience dimensions',
              marks: 10,
              details:
                'Covers social cohesion, economic diversity, infrastructure, institutional capacity, health, environmental sustainability, cultural cohesion, and information access. Award full marks for comprehensive coverage.',
            },
            {
              criterion: 'Benefits beyond crisis',
              marks: 5,
              details:
                'Explains how resilience improves health, education, economic vitality, crime reduction, civic engagement, and innovation.',
            },
            {
              criterion: 'Analytical clarity',
              marks: 5,
              details: 'Analysis is clear, logical, and well-organized within word limit.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Persuasive case for investment',
              marks: 12,
              details:
                'Makes compelling argument for government resilience investment. Uses evidence and logic. Addresses why local government should prioritize this.',
            },
            {
              criterion: 'Economic justification',
              marks: 10,
              details:
                'Addresses cost concerns and explains economic returns from resilience investment (improved health outcomes, economic development, disaster preparedness).',
            },
            {
              criterion: 'Structure and tone',
              marks: 8,
              details:
                'Appropriate tone for government proposal. Clear argument development with logical conclusion.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Individual actions clarity',
              marks: 12,
              details:
                'Provides specific, achievable actions individuals can take to build community connections.',
            },
            {
              criterion: 'Community project initiation',
              marks: 10,
              details:
                'Explains how to identify community needs, gather support, and initiate resilience-building projects.',
            },
            {
              criterion: 'Motivation and accessibility',
              marks: 8,
              details:
                'Demonstrates why community participation matters and makes participation accessible to varied individuals.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `COMMUNITY RESILIENCE: DIMENSIONS AND BENEFITS

Community resilience encompasses multiple essential dimensions. Social cohesion-the strength of relationships within communities-creates mutual support networks. Economic diversity ensures communities are not dependent on vulnerable single industries. Infrastructure redundancy provides backup capabilities if primary systems fail. Institutional capacity means effective local governance and organizational infrastructure. Health infrastructure ensures quality healthcare availability. Environmental sustainability provides long-term resource security. Cultural cohesion provides shared values strengthening community bonds. Informational access enables understanding of challenges and effective response.

Beyond crisis response, resilience generates substantial benefits. Resilient communities demonstrate better health outcomes-residents experience lower stress and better mental health in supportive communities. Educational outcomes improve when communities invest in learning. Economic vitality increases when communities attract and retain businesses and workers. Crime decreases in cohesive communities where people know neighbors and work collectively for safety. Civic engagement increases when people feel invested in community wellbeing. Innovation flourishes when communities support experimentation and entrepreneurship.

These benefits accumulate, creating the foundation for truly thriving communities.`,
        marks: 19,
        feedback:
          'Comprehensive coverage of resilience dimensions with clear examples of benefits. Good organization. Could strengthen with specific statistics about benefit magnitudes.',
      },
      {
        taskNumber: 2,
        answer: `INVESTING IN COMMUNITY RESILIENCE: AN ECONOMIC IMPERATIVE

Local government budgets face constant pressure. Competing demands for limited resources-schools, roads, emergency services-create difficult prioritization choices. Resilience investment often appears discretionary, readily deferred when budgets tighten. Yet this perspective misses the fundamental reality: resilience investment generates substantial economic returns, making it not discretionary but essential.

Consider disaster costs. Natural disasters-hurricanes, floods, earthquakes-cost communities far more than resilience preparation. A community prepared through redundant infrastructure and emergency planning recovers faster, with less disruption to business and employment. A community unprepared faces business closures, unemployment, and long recovery periods. Studies consistently demonstrate that resilience preparation costs far less than disaster recovery. Investing in flood prevention infrastructure now costs less than cleaning and rebuilding after flooding. Evacuation planning and preparation costs less than emergency response to unprepared communities.

Economic development accelerates in resilient communities. Businesses prefer locations with reliable infrastructure, educated workforce, and community stability. Resilient communities with good social cohesion, quality education, and reliable services attract business investment. Workers prefer communities offering good quality of life-health services, education, cultural opportunities, and social connection. Communities investing in resilience become magnets for economic activity.

Health outcomes improve directly in resilient communities, reducing healthcare costs. Communities with strong social cohesion show lower rates of depression, mental illness, and stress-related conditions. Lower healthcare utilization means lower costs for individuals and public systems. Resilient communities age better-elderly residents maintain independence longer when embedded in supportive communities. Preventive health improves in communities with good information and supportive social environments.

Crime reduction generates economic benefit. Communities where neighbors know each other and work together experience lower crime. Reduced crime means lower police costs, lower incarceration costs, lower insurance costs, and improved safety attracting business and residents. Economic activity increases when people feel safe using public spaces.

The budget analysis is clear: resilience investment has direct economic returns exceeding costs within five to ten years. Communities not investing face larger future expenditures on disaster recovery, healthcare, crime, and economic decline.

We can invest in resilience now, or pay far more later.`,
        marks: 28,
        feedback:
          'Strong economic argument with specific cost-benefit reasoning. Excellent disaster preparedness example. Could strengthen with specific dollar amount examples.',
      },
      {
        taskNumber: 3,
        answer: `BUILDING COMMUNITY RESILIENCE: YOUR PERSONAL ROLE

Getting to Know Your Neighbors

The foundation of resilience is connection. Make time to meet neighbors-attend block parties, introduce yourself during walks, chat with people at local businesses. These casual interactions build familiarity and trust. Participate in neighborhood social events. Join neighborhood association meetings if they exist, or help organize them if not. Knowing neighbors creates foundation for collective action when challenges arise.

Supporting Local

Economic diversity strengthens communities. Shop at local businesses rather than always choosing large chains. Recommend local businesses to friends. Support local farmers markets. Use local service providers. When economic activity circulates locally, more money stays in community and creates sustainable employment. Small business owners typically reinvest profits locally, supporting community institutions.

Participation and Skill-Sharing

Join community organizations-environmental groups, service organizations, hobby groups. Your participation strengthens institutions. Share skills-if you can mentor young people, teach, fix things, or offer services, volunteer your expertise. Mentorship and skill-sharing build individual capacity and community knowledge. Participation in community organizations helps identify community needs and organize response.

Community Project Initiation

See a community need? Don't assume someone else will address it. You can initiate projects. Community gardens transform vacant spaces into productive resources. Neighborhood watches create safety through collective attention. Food banks address food insecurity. Library reading groups build connection. Disaster preparedness groups organize community planning. Start by identifying a need, talking with neighbors, and finding willing participants. Resources are often available-local government may donate space, organizations may provide support.

Supporting Community Institutions

Schools, libraries, community centers, and local government provide critical services. Attend school board meetings, vote in local elections, participate in planning processes. Support library programming. Volunteer in community services. These institutions thrive when supported by engaged community members. Your participation strengthens these essential foundations.

Remember: your personal security depends on community security. Building community resilience is enlightened self-interest.`,
        marks: 27,
        feedback:
          'Excellent practical guide with specific achievable actions. Good variety of participation options. Could strengthen with examples of successful community projects.',
      },
    ],
  },
]
