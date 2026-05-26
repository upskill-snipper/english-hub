// @ts-nocheck
import { MockExamPaper } from '../types'

export const ocrLangMocks: MockExamPaper[] = [
  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 1
  {
    id: 'ocr-lang-comp01-001',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 1: The Rise of Remote Working',
    description: 'Students read an article about remote work trends and respond to writing tasks.',
    sourceText: `THE REVOLUTION IN HOW WE WORK
Remote Working: The Future is Now

The traditional office environment has dominated the workplace for over a century. Employees would commute to a central location, spend eight hours at a desk, and return home exhausted. However, the landscape of work is changing dramatically. Remote working is no longer a luxury reserved for a privileged few; it has become a mainstream reality that is reshaping how companies operate and how workers structure their lives.

Recent statistics demonstrate the scale of this transformation. According to the Office for National Statistics, the proportion of workers working from home has increased significantly since 2020. Some sectors have embraced remote work more readily than others. Technology companies, financial services, and professional services have led the charge, with many offering flexible working arrangements. Manufacturing and retail, by contrast, have limited scope for remote operations.

The benefits for employees are substantial. Working from home eliminates the daily commute, saving time and reducing environmental impact. Studies suggest that employees save an average of 45 minutes per day that would otherwise be spent travelling. This time can be reinvested in productivity, family time, or personal wellbeing. Additionally, remote workers often report higher job satisfaction and better work-life balance.

Employers also stand to gain significant advantages. Real estate costs are reduced when companies operate with smaller office spaces or distributed teams. Productivity metrics show that remote workers often achieve more, with fewer interruptions and distractions. Furthermore, companies can expand their talent pool geographically, hiring the best candidates regardless of location.

However, remote working does present challenges. Communication can become fragmented, and the spontaneous collaboration that happens in offices is more difficult to replicate. Mental health concerns have emerged, with some workers reporting isolation and loneliness. Training and onboarding new employees requires more intentional design when the team is dispersed.

The most effective approach appears to be hybrid working, combining the flexibility of remote work with the collaboration benefits of in-office time. Leading organizations are adopting this model, typically expecting employees to work on-site two to three days per week.

As we look to the future, remote working will undoubtedly remain a significant feature of the employment landscape. The key is finding the right balance for different roles, sectors, and individual preferences.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Summary Task',
        instruction:
          'Write a summary of the key advantages and disadvantages of remote working mentioned in the article. Your answer should be approximately 150-200 words.',
        marks: 20,
      },
      {
        taskNumber: 2,
        title: 'Persuasive Writing',
        instruction:
          'Write a persuasive article for a business magazine arguing that hybrid working is the ideal solution for modern organizations. Address at least three different audience concerns. Your answer should be approximately 250-300 words.',
        marks: 30,
      },
      {
        taskNumber: 3,
        title: 'Informative Writing',
        instruction:
          'Create an informative guide for a company newsletter explaining how to maintain team communication and morale when working remotely. Use headings, bullet points, and clear organization. Your answer should be approximately 200-250 words.',
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
                'Identifies all main advantages (commute savings, satisfaction, productivity) and disadvantages (communication, isolation, onboarding). Award full marks for balanced coverage of both.',
            },
            {
              criterion: 'Appropriate vocabulary and clarity',
              marks: 5,
              details:
                'Uses subject-specific terminology appropriately. Sentences are clear and concise.',
            },
            {
              criterion: 'Length and form',
              marks: 5,
              details:
                'Approximately 150-200 words. Format as continuous prose or structured list.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Persuasive techniques and effect',
              marks: 12,
              details:
                'Uses rhetorical questions, evidence-based arguments, inclusive language, and logical sequencing. Shows understanding of audience (business professionals).',
            },
            {
              criterion: 'Structure and organization',
              marks: 10,
              details:
                'Clear introduction establishing position, three developed paragraphs addressing different concerns, conclusion reinforcing argument.',
            },
            {
              criterion: 'Language choices and register',
              marks: 8,
              details:
                'Maintains formal, professional register throughout. Vocabulary is subject-specific and persuasive.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Effectiveness of informative content',
              marks: 12,
              details:
                'Provides practical, relevant advice about remote communication and morale. Information is clear and actionable.',
            },
            {
              criterion: 'Use of structural features',
              marks: 10,
              details:
                'Effective use of headings (at least 3), bullet points where appropriate, clear organization of ideas.',
            },
            {
              criterion: 'Tone and accessibility',
              marks: 8,
              details:
                'Maintains accessible, professional tone suitable for company newsletter. Language is clear and jargon is minimized or explained.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `Remote working offers substantial benefits and notable challenges. Key advantages include significant time savings through eliminating commutes (average 45 minutes daily), improved work-life balance, and higher employee satisfaction. Environmental benefits and reduced real estate costs also accrue. However, disadvantages are equally important. Communication becomes fragmented when teams are dispersed, and spontaneous collaboration diminishes. Employees report isolation and loneliness, affecting mental health. Training new staff requires more careful planning. The article suggests hybrid working-combining remote flexibility with in-office collaboration two to three days weekly-as the optimal solution, balancing advantages while mitigating disadvantages.`,
        marks: 18,
        feedback:
          'Excellent balance of advantages and disadvantages. Candidates could include slightly more specific evidence from the text.',
      },
      {
        taskNumber: 2,
        answer: `Why should your business embrace hybrid working? The answer lies in three compelling reasons that benefit both your organization and workforce.

First, productivity and efficiency increase dramatically. Remote workers face fewer interruptions and distractions, consistently delivering more work. When combined with two to three days of in-office collaboration, hybrid working maximizes output while maintaining team cohesion. Your bottom line improves without sacrificing workplace culture.

Second, cost savings are substantial. Reducing office space requirements significantly decreases real estate expenses-a major overhead for most organizations. These savings can be reinvested in employee development or technology infrastructure, creating a competitive advantage.

Third, access to talent expands considerably. Geographic restrictions disappear when roles offer flexibility. Your organization can recruit the best candidates nationally or internationally, strengthening your team's capabilities and innovation potential.

Yet concerns remain. Will communication suffer? Intentional communication systems and scheduled collaboration days prevent fragmentation. Can team culture survive? Hybrid arrangements actually enhance culture by respecting work-life balance and demonstrating trust in employees.

The evidence is clear: hybrid working represents the future of successful organizations. It balances flexibility with collaboration, cost savings with employee satisfaction. Organizations adopting this model now will lead their sectors tomorrow. The question isn't whether to implement hybrid working, but how quickly you can transition.`,
        marks: 28,
        feedback:
          'Strong persuasive structure with clear addressing of counterarguments. Excellent use of rhetorical devices and inclusive language throughout.',
      },
      {
        taskNumber: 3,
        answer: `MAINTAINING TEAM COHESION IN A REMOTE ENVIRONMENT

Introduction
Remote working doesn't mean losing team connection. This guide helps managers and employees maintain communication and morale while distributed.

Communication Systems
• Establish regular team meetings: Schedule weekly video check-ins with full team attendance
• Use appropriate channels: Email for formal matters, instant messaging for quick questions, video calls for complex discussions
• Set response expectations: Agree on reasonable response times to prevent communication bottlenecks

Building Team Spirit
• Create virtual social time: Monthly online team lunches or coffee breaks foster relationships
• Celebrate achievements publicly: Share wins in team channels to build momentum
• Include personal updates: Five-minute personal share-outs at meetings humanize interactions

Structure and Expectations
• Maintain consistent work hours: Core hours when everyone is available reduce confusion
• Document decisions: Ensure information is accessible to all, preventing isolation
• Check in individually: Managers should conduct regular one-to-one conversations

Conclusion
Remote working succeeds through intentional communication and human connection. These strategies ensure your team remains engaged, connected, and productive.`,
        marks: 27,
        feedback:
          'Well-organized with effective use of headings and bullet points. Content is practical and directly applicable to the challenge posed.',
      },
    ],
  },

  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 2
  {
    id: 'ocr-lang-comp01-002',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 2: Urban Green Spaces',
    description:
      'Students respond to writing tasks based on the importance of parks and green spaces in cities.',
    sourceText: `BREATHING ROOM: THE VITAL ROLE OF URBAN PARKS

Cities are growing rapidly. By 2050, approximately 70% of the world's population will live in urban areas. This unprecedented urbanization brings significant challenges: pollution, overcrowding, stress, and a disconnect from nature. Yet within this dense urban fabric, green spaces offer a powerful antidote to many modern city problems.

Urban parks provide essential environmental benefits. They act as lungs for the city, absorbing carbon dioxide and producing oxygen. Trees and vegetation filter air pollutants and reduce urban heat island effect-the phenomenon where cities become significantly warmer than surrounding rural areas, sometimes by 5-7 degrees Celsius. Green spaces improve drainage, reducing flooding during heavy rainfall. These environmental functions alone justify investment in parks and gardens.

Beyond environmental benefits, parks dramatically improve public health. Studies consistently demonstrate that access to green spaces reduces stress, anxiety, and depression. People who spend time in nature show lower blood pressure and heart rates. Regular park users report higher overall life satisfaction and better sleep quality. For children, parks provide essential space for physical activity and unstructured play-increasingly rare in congested urban environments.

Parks also serve crucial social functions. They are democratic spaces where people from all backgrounds meet and interact. Community events held in parks strengthen neighborhood bonds and create social cohesion. Parks provide safe spaces for exercise, recreation, and social gathering, particularly for elderly and disabled people who may struggle to access other community facilities.

Economically, parks generate significant value. Property near quality parks commands higher prices. Businesses benefit from improved foot traffic and customer wellbeing. Cities with good parks attract and retain talented workers and entrepreneurs, driving economic growth. The investment in park creation and maintenance returns substantial economic dividends.

Despite their obvious value, many urban parks face underfunding and underutilization. Budget constraints mean maintenance is sometimes deferred. Limited opening hours or poor accessibility discourage usage. Some parks suffer from neglect and safety concerns, ironically keeping people away despite these spaces being most needed.

The solution requires commitment from city planners, businesses, and residents. Prioritizing park investment, improving maintenance, and enhancing accessibility should be core urban policy. Every neighborhood deserves quality green space. Creating livable, healthy cities depends on it.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Informative Text',
        instruction:
          'Write an informative article for a local government website explaining the benefits of urban parks to different groups of people (residents, children, elderly people, businesses). Aim for approximately 250-300 words.',
        marks: 25,
      },
      {
        taskNumber: 2,
        title: 'Persuasive Campaign Text',
        instruction:
          'Write a persuasive leaflet for a campaign to fund the restoration of a neglected local park. Your text should appeal to both residents and local business owners. Approximately 200-250 words.',
        marks: 25,
      },
      {
        taskNumber: 3,
        title: 'Advisory Guide',
        instruction:
          'Create an advisory guide for new park users, covering safety, etiquette, and how to get the most from their park visit. Use formatting features appropriately. Approximately 200-250 words.',
        marks: 30,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Informative content and accuracy',
              marks: 10,
              details:
                'Clearly explains benefits to multiple audience groups. Information is accurate and drawn from source material.',
            },
            {
              criterion: 'Organization and clarity',
              marks: 8,
              details:
                'Logical progression through different beneficiary groups. Each benefit is clearly explained.',
            },
            {
              criterion: 'Appropriate tone and register',
              marks: 7,
              details:
                'Maintains informative, neutral tone suitable for government website. Language is clear and accessible.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Persuasive techniques',
              marks: 10,
              details:
                'Uses evidence, appeals to different audience interests, rhetorical devices. Clear call to action.',
            },
            {
              criterion: 'Addressing multiple audiences',
              marks: 8,
              details:
                'Effectively appeals to both residents (health, community) and business owners (economic benefit).',
            },
            {
              criterion: 'Structure and impact',
              marks: 7,
              details:
                'Engaging opening, clear arguments, strong closing. Format appropriate for leaflet.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Usefulness of advice',
              marks: 12,
              details:
                'Provides practical, relevant guidance. Information is clear and actionable for new users.',
            },
            {
              criterion: 'Use of formatting',
              marks: 10,
              details:
                'Effective use of headings, sub-headings, bullet points, or other organizational features.',
            },
            {
              criterion: 'Tone and accessibility',
              marks: 8,
              details: 'Welcoming, friendly tone. Language is clear without being condescending.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `THE VALUE OF URBAN PARKS FOR OUR COMMUNITY

Urban parks benefit everyone in our city. They provide essential services while improving quality of life for diverse populations.

For residents, parks offer immediate health benefits. Spending time in green spaces reduces stress and anxiety while improving overall wellbeing. Parks provide safe spaces for exercise and recreation without cost barriers. Properties near quality parks increase in value, benefiting homeowners directly.

Children gain particularly vital benefits. Parks provide essential space for physical activity and unstructured play-increasingly rare in urban environments. This freedom supports healthy development and creativity. Parks offer children connection to nature during formative years.

Elderly and disabled residents rely on parks for accessible recreation and social connection. Parks provide safe gathering spaces where people can exercise at their own pace and meet community members, combating isolation.

Businesses thrive near quality parks. Better customer foot traffic results from parks attracting people to neighborhoods. Employee wellbeing improves, boosting productivity. Businesses locate in areas with good parks, driving economic growth.

The environment benefits significantly. Trees absorb carbon dioxide and produce oxygen. Green spaces reduce urban heat island effect and improve air quality. Parks manage stormwater drainage, reducing flooding.

Quality parks represent essential investment in livable, healthy cities.`,
        marks: 23,
        feedback:
          'Excellent organization across different audience groups with clear benefits for each. Could include slightly more specific examples.',
      },
      {
        taskNumber: 2,
        answer: `INVEST IN OUR PARK: INVEST IN OUR FUTURE

Our neighborhood park sits neglected, its potential untapped. This campaign calls for immediate restoration-an investment that benefits every resident and local business.

Why your community needs this park restored:
Your health depends on it. Studies prove that park access reduces stress, anxiety, and depression. Our park will provide essential green space for exercise and wellbeing-free, accessible healthcare for the community.

Your family thrives in parks. Children need space for safe, unstructured play. The restored park becomes a gathering place where community bonds strengthen and isolation diminishes.

Why local businesses should support this campaign:
Your bottom line improves. Thriving parks attract foot traffic and customers. Properties near quality parks command higher prices, benefiting your business location and surrounding commercial value.

Your employees are happier. Workers with park access show higher productivity and satisfaction, directly improving your business performance.

Your city becomes more competitive. Businesses locate in areas with quality parks. Supporting park restoration strengthens your neighborhood's economic future.

The investment is clear. Park restoration costs far less than the health and economic benefits it generates. Our neglected park can become an asset serving residents and businesses alike.

Sign the petition. Attend the council meeting. Invest five minutes now to create a park our community deserves.`,
        marks: 24,
        feedback:
          'Strong persuasive structure with compelling appeals to both audiences. Well-organized with clear formatting.',
      },
      {
        taskNumber: 3,
        answer: `NEW TO OUR PARK? YOUR WELCOME GUIDE

Getting the Most from Your Visit

BEFORE YOU ARRIVE
• Check opening hours and facilities on our website
• Plan your route and identify nearby parking
• Check weather and dress appropriately

DURING YOUR VISIT

Safety and Awareness
Our park is welcoming and safe. Stay aware of surroundings and follow park guidelines. Use designated paths after dark. Report concerns to park staff.

Park Etiquette
Respect shared spaces. Keep noise at reasonable levels. Clean up after yourself and your family. Stay on designated paths to protect vegetation. Control pets and observe leash rules.

Making the Most of It
Explore different areas-meadows, woodlands, water features. Bring binoculars for bird watching. Use benches for meditation or reading. Join organized activities and events.

Accessibility
Park facilities include accessible toilets and parking. Mobility assistance is available-ask staff for information. Multiple entrance points accommodate different mobility levels.

For Children
Playgrounds are supervised during daylight. Children should remain with adults at all times near water features. Check equipment safety before use.

AFTER YOUR VISIT

Share Your Experience
Tell friends about your visit. Join our community group to help maintain the park. Attend events and volunteer for conservation activities.

The park thrives through community support. Welcome-we're glad you're here.`,
        marks: 28,
        feedback:
          'Excellent use of formatting with clear headings and bullets. Content is practical and welcoming. Well-structured guide.',
      },
    ],
  },

  // COMPONENT 01: Communicating Information and Ideas - Mock Exam 3
  {
    id: 'ocr-lang-comp01-003',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 01: Communicating Information and Ideas',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 3: The Skills Gap in Education',
    description:
      'Students respond to writing tasks about misalignment between education and workplace skills.',
    sourceText: `BRIDGING THE SKILLS GAP: WHY EDUCATION MUST EVOLVE

The disconnect between education and employment is becoming increasingly obvious. Every year, thousands of graduates enter the job market armed with theoretical knowledge but lacking practical skills employers desperately need. Simultaneously, many young people without university degrees struggle to find apprenticeships and entry-level positions requiring specific technical abilities. This skills gap represents one of the most pressing challenges facing modern economies.

Traditional academic education excels at developing certain competencies: critical thinking, subject knowledge, and analytical ability. These remain valuable. However, employers consistently report that graduates lack essential practical skills. Communication abilities-clear writing, persuasive speaking, and active listening-are frequently missing. Problem-solving in real-world contexts differs significantly from classroom exercises. Leadership and teamwork skills require experience and development beyond what lectures provide. Digital literacy, once a bonus, is now essential across nearly all sectors.

The causes are multifaceted. Schools and universities operate on established curricula that change slowly, while industry needs evolve rapidly. Budgets constrain practical training opportunities. Some educators lack current industry experience. Students often pursue academic pathways without understanding actual job market demands. Early career guidance is frequently inadequate, leaving young people with limited information about realistic career options.

The consequences are serious. Businesses struggle to fill positions, reducing productivity and limiting growth. Young people experience unemployment or underemployment despite educational qualifications. The broader economy suffers from reduced innovation and competitiveness. Social inequality widens when certain young people cannot access opportunity-creating education.

Solutions require collaboration between education providers and industry. Apprenticeship programs must expand, providing structured workplace training. Schools should integrate practical skill development throughout curricula. Industry experts should contribute to curriculum design. Work experience, internships, and project-based learning should be mandatory. Digital skills training must be embedded across all subjects. Careers guidance should begin in primary school and continue throughout secondary education.

Some organizations have begun implementing these solutions successfully. Companies partnering with educational institutions have seen improved graduate quality. Apprenticeship programs have expanded significantly in recent years. These successes prove that education can meet industry needs when stakeholders work together.

The skills gap will not close overnight, but action is essential. Young people deserve education that prepares them for meaningful employment. Employers need graduates with relevant capabilities. Societies need economically productive citizens. Bridging the skills gap benefits everyone involved.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Explanatory Article',
        instruction:
          'Write an explanatory article for an educational journal explaining why there is a gap between what schools teach and what employers need. Your answer should be approximately 200-250 words.',
        marks: 25,
      },
      {
        taskNumber: 2,
        title: 'Formal Proposal',
        instruction:
          'Write a formal proposal for a school senior leadership team, recommending three specific changes to how the school could better prepare students for employment. Explain the benefits of each change. Approximately 250-300 words.',
        marks: 28,
      },
      {
        taskNumber: 3,
        title: 'Persuasive Speech',
        instruction:
          'Write a persuasive speech for a business conference arguing that companies should invest in education partnerships. Address potential business objections. Approximately 200-250 words.',
        marks: 27,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Clarity of explanation',
              marks: 10,
              details:
                'Clearly explains multiple causes of skills gap. Ideas are well-developed and logically sequenced.',
            },
            {
              criterion: 'Use of source material',
              marks: 8,
              details: 'Incorporates relevant information from source text appropriately.',
            },
            {
              criterion: 'Appropriate register and structure',
              marks: 7,
              details: 'Maintains formal, neutral register. Clear paragraphing with logical flow.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Clarity and specificity of proposals',
              marks: 10,
              details:
                'Three distinct, specific, and feasible recommendations. Each clearly explained.',
            },
            {
              criterion: 'Explanation of benefits',
              marks: 10,
              details:
                'Benefits are clearly articulated for each proposal. Benefits are realistic and compelling.',
            },
            {
              criterion: 'Formality and structure',
              marks: 8,
              details:
                'Maintains formal register appropriate for senior leadership. Clear structure with introduction, three proposals, conclusion.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Persuasive techniques',
              marks: 10,
              details:
                'Uses evidence, logical arguments, rhetorical devices. Appeals to business interests effectively.',
            },
            {
              criterion: 'Addressing objections',
              marks: 9,
              details:
                'Acknowledges and refutes potential business concerns. Shows understanding of business perspective.',
            },
            {
              criterion: 'Speech structure and delivery',
              marks: 8,
              details:
                'Strong opening, clear argument development, compelling conclusion. Appropriate for speech format.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `THE SKILLS GAP: UNDERSTANDING THE DISCONNECT

A significant disconnect exists between education and employment. Graduates possess theoretical knowledge yet lack skills employers urgently require. This skills gap results from multiple interconnected causes.

First, education systems evolve slowly while industry needs change rapidly. Curricula established years ago cannot quickly adapt to emerging technologies and new workplace demands. Budgets constraining practical training limit hands-on skill development. Some educators lack current industry experience, making it difficult to teach genuinely contemporary skills.

Second, young people often lack understanding of actual job market demands. Early career guidance remains inadequate, leaving students uninformed about realistic career options and required skills. Students pursue academic pathways without exploring alternative routes. Many don't understand which skills are genuinely valued by employers.

Third, practical skill development requires resources-workshop facilities, industry equipment, experienced practitioners-often unavailable in educational settings. Communication skills, teamwork, and real-world problem-solving require experiences beyond classroom lectures.

The consequences extend beyond individual unemployment. Businesses struggle to fill positions, reducing growth and innovation. The broader economy suffers competitiveness losses. Social inequality widens when certain young people cannot access opportunity-creating education.

Resolving this gap requires collaboration. Schools must integrate practical skill development throughout curricula. Industry experts should contribute to curriculum design. Work experience and internships should be mandatory. Digital literacy must be embedded across all subjects. Early careers guidance should begin immediately.

These solutions prove effective where implemented. Successful partnerships demonstrate that education can meet industry needs when stakeholders collaborate. The skills gap will not close overnight, but action is essential and achievable.`,
        marks: 24,
        feedback:
          'Excellent explanation of causes with clear connections between concepts. Well-structured with appropriate register for educational journal.',
      },
      {
        taskNumber: 2,
        answer: `PROPOSAL: BRIDGING THE SKILLS GAP THROUGH STRUCTURED CHANGE

TO: Senior Leadership Team
FROM: Curriculum Development Committee
SUBJECT: Three Priority Recommendations for Employment Readiness

Our school must better prepare students for meaningful employment. Three specific changes will significantly enhance employment readiness while strengthening overall educational outcomes.

RECOMMENDATION 1: Mandatory Work Experience Program
Implement a compulsory work experience placement for all Year 10 and Year 12 students, minimum two weeks annually.

Benefits:
- Students develop practical workplace skills in authentic contexts
- Communication and teamwork abilities improve through real experience
- Students gain realistic understanding of career options
- Local businesses access potential employees
- School reputation strengthens through community partnerships

RECOMMENDATION 2: Industry-Expert Curriculum Contribution
Establish a curriculum advisory board comprising local business leaders, meeting twice yearly to inform subject content.

Benefits:
- Curriculum remains current with real industry demands
- Teaching incorporates authentic, contemporary examples
- Students understand practical applications of knowledge
- Partnerships create apprenticeship and employment opportunities
- Employers gain influence over graduate skill development

RECOMMENDATION 3: Integrated Digital and Soft Skills Development
Embed communication, collaboration, and digital skills across all subject curricula rather than isolated lessons.

Benefits:
- Students develop capabilities across multiple contexts
- Skills become embedded and automatic rather than theoretical
- All students develop capabilities regardless of subject choices
- Teaching becomes more engaging and relevant
- Skills transfer to varied employment contexts

CONCLUSION
These recommendations require modest resource investment while delivering significant employment outcomes improvement. Implementation across the next academic year will position our school as an employment-ready institution.`,
        marks: 27,
        feedback:
          'Strong proposal format with clear, specific recommendations. Benefits are well-articulated and realistic. Excellent use of formal structure.',
      },
      {
        taskNumber: 3,
        answer: `INVESTING IN EDUCATION: THE BUSINESS CASE FOR PARTNERSHIP

Good morning. I want to challenge a common business assumption: that education partnership costs money with limited return. In fact, education partnership is among the smartest investments your organization can make.

Consider your current challenge. Talented workers are difficult to find. New graduates lack capabilities you need. You invest time and money training staff to acceptable standards. This problem persists despite significant graduate unemployment. Why? Because education systems cannot prepare workers effectively without industry involvement.

Partnership solves this problem. Companies collaborating with schools shape graduates matching your exact needs. You influence curriculum development, ensuring future employees arrive job-ready. Apprenticeship programs train workers in your specific requirements. Partnership invests in future workforce reliability.

The financial case is compelling. Recruitment costs drop when graduates arrive prepared. Training expenses decrease substantially. Staff retention improves when employees feel prepared and capable. These savings far exceed partnership investment.

Beyond financial benefits, consider competitive advantage. Organizations known for education investment attract top talent. Young people preferentially work for companies investing in their development. Partnership strengthens your employer brand significantly.

Some worry about resource investment. Certainly, involvement requires time. However, successful partnerships leverage existing resources efficiently. One senior employee serving as curriculum advisor influences hundreds of future employees. Structured apprenticeships actually reduce recruitment spending. The investment is manageable for substantial return.

Others fear instability-that partnerships might collapse. Successful models prove sustainable. Companies benefit continuously as young people enter employment pipeline. Relationships strengthen when all parties recognize mutual benefit.

The evidence is clear. Companies investing in education partnerships gain competitive advantage, reduce costs, and strengthen workforce capability. The question isn't whether your company can afford partnership. The question is whether your company can afford not to participate.

I encourage you to view education partnership not as charitable corporate responsibility, but as essential business strategy. Let's work together to bridge the skills gap. Your company, young people, and our economy will benefit.`,
        marks: 26,
        feedback:
          'Excellent persuasive structure with strong objection handling. Clear business case articulated throughout. Effective speech delivery with strong opening and closing.',
      },
    ],
  },

  // COMPONENT 02: Exploring Effects and Impact - Mock Exam 1
  {
    id: 'ocr-lang-comp02-001',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 02: Exploring Effects and Impact',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 1: Language and Persuasion in Climate Advertising',
    description:
      'Students analyze how language techniques create persuasive effects in climate change advertisements.',
    sourceText: `ADVERTISEMENT 1: "YOUR FUTURE MATTERS"
[Image: Young child planting a tree, vibrant green landscape]

"Your Future Matters"

Every choice you make impacts our planet's future. The decisions you make today determine the world your children will inherit. Climate change isn't a distant threat-it's happening now, in our communities, affecting our families.

But here's the truth: you have power. Your choices matter more than ever.

This Earth Day, join thousands of people taking action. Switch to renewable energy. Reduce your carbon footprint. Support sustainable businesses. These aren't sacrifices-they're investments in your family's future.

The transition to sustainable living is inevitable. The only question is: will you be part of the solution, or waiting for change to happen to you?

Take action today. Your future-and theirs-depends on it.

[Call to action button: "START YOUR SUSTAINABLE JOURNEY NOW"]

---

ADVERTISEMENT 2: "CLIMATE CRISIS: THE FACTS"
[Image: Polar ice melting, graph showing rising temperatures]

THE CLIMATE CRISIS IS REAL

Rising temperatures. Melting ice caps. Extreme weather. Ocean acidification. Extinction of species. These are not exaggerations-they are documented scientific facts.

Governments worldwide have committed to action. The Paris Agreement, signed by 193 nations, commits to limiting global warming. Yet individual commitment remains crucial. Every ton of carbon avoided matters.

Facts matter. Science matters. Your action matters.

The solution requires urgent, sustained action across sectors:
- Reduce energy consumption
- Support renewable energy investment
- Demand corporate accountability
- Advocate for policy change
- Support climate research

This isn't about guilt or sacrifice. This is about acknowledging reality and demanding change. Our civilization depends on it.

Evidence is overwhelming. Time for debate is past. Time for action is now.

[Call to action button: "SUPPORT CLIMATE ACTION NOW"]

ADVERTISEMENT 3: "CLIMATE HOPE"
[Image: Community garden, children smiling, sunset over renewable energy panels]

Small actions. Big difference.

You don't need to change everything overnight. One person, one action, one day at a time-this is how movements begin.

Plant native plants. Reduce plastic consumption. Use public transport once more weekly. Support local farmers. Choose renewable energy when you can. Every action, no matter how small, contributes to change.

Climate change feels overwhelming. But throughout history, ordinary people have achieved extraordinary things. The civil rights movement. The end of apartheid. Women's suffrage. Environmental protection. Change happens when people decide it must.

You are ordinary. Your actions are extraordinary.

Join communities of people across the world taking meaningful action. Celebrate every step. Build momentum. Show others what's possible.

The future is not written. We are writing it, together, with every choice.

[Call to action button: "JOIN THE CLIMATE COMMUNITY"]`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Analysis of Persuasive Techniques',
        instruction:
          'Choose one of the three advertisements. Identify and analyze three language techniques used to persuade the audience. For each technique, explain what it is, provide a quotation as evidence, and explain its persuasive effect. Approximately 250 words.',
        marks: 24,
      },
      {
        taskNumber: 2,
        title: 'Comparative Analysis',
        instruction:
          'Compare how two of the three advertisements use different persuasive approaches to address the climate issue. What are the strengths and limitations of each approach? Approximately 300 words.',
        marks: 28,
      },
      {
        taskNumber: 3,
        title: 'Critical Evaluation',
        instruction:
          'Evaluate the overall effectiveness of these advertisements in persuading young people to take climate action. Consider audience, tone, language choices, and potential limitations. Approximately 250 words.',
        marks: 28,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Identification of techniques',
              marks: 8,
              details:
                'Three distinct language techniques correctly identified (e.g., rhetorical questions, emotive language, direct address, repetition, imperatives).',
            },
            {
              criterion: 'Accurate quotation and evidence',
              marks: 8,
              details:
                'Quotations accurately reflect text. Evidence clearly supports identified technique.',
            },
            {
              criterion: 'Explanation of persuasive effect',
              marks: 8,
              details:
                'Persuasive effect clearly explained. Connection between technique and audience response is articulated.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Clear comparison of approaches',
              marks: 10,
              details:
                'Two distinct persuasive approaches identified and compared. Similarities and differences are clear.',
            },
            {
              criterion: 'Analysis of strengths and limitations',
              marks: 10,
              details:
                'Strengths and limitations of each approach are articulated with supporting evidence.',
            },
            {
              criterion: 'Engagement with purpose and audience',
              marks: 8,
              details:
                'Considers how each approach appeals to target audience. Discusses effectiveness for purpose.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Comprehensive evaluation',
              marks: 10,
              details:
                'Evaluates across multiple aspects: audience appropriateness, emotional appeal, logical argument, tone, likelihood of action.',
            },
            {
              criterion: 'Supported judgments',
              marks: 10,
              details:
                'Judgments supported with specific textual evidence. Explanations are detailed.',
            },
            {
              criterion: 'Consideration of context and limitations',
              marks: 8,
              details:
                'Acknowledges strengths while identifying limitations or potential weaknesses.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `PERSUASIVE TECHNIQUES IN "YOUR FUTURE MATTERS"

Advertisement 1 employs multiple persuasive strategies targeting emotional and personal concerns.

First, direct address creates personal responsibility. The repeated use of "you" ("Your choices matter," "will you be part") directly addresses the reader individually. This technique makes climate change personal rather than abstract. Readers cannot passively observe-they are directly implicated in decision-making. This creates psychological engagement and accountability.

Second, emotive language evokes emotional response. The phrase "the world your children will inherit" appeals to parental concern and future security. This emotional appeal bypasses rational argument, touching deeper values. Parents become motivated not by data but by protective instinct toward their children. The emotiveness of this language is highly persuasive because it touches fundamental human concerns.

Third, rhetorical questions engage active thinking. "Will you be part of the solution, or waiting for change to happen to you?" forces the reader to mentally answer. This technique is more persuasive than direct statement because it requires active participation. Readers convince themselves rather than being told. The dichotomy presented offers only two acceptable options-participation or passivity-creating psychological pressure toward action.

Finally, imperatives ("Take action today") create urgency and command. The imperative mood demands immediate response. Unlike suggestions, imperatives feel authoritative and non-negotiable. Combined with "today," this creates pressure for immediate action.

These techniques work together to personalize climate action, emotionalize consequences, and demand immediate response.`,
        marks: 23,
        feedback:
          'Excellent identification and analysis of techniques. Each technique is clearly explained with effective evidence. Could provide slightly more detail on audience psychology.',
      },
      {
        taskNumber: 2,
        answer: `COMPARING PERSUASIVE APPROACHES: "YOUR FUTURE MATTERS" VS. "CLIMATE CRISIS: THE FACTS"

These two advertisements employ fundamentally different persuasive strategies, each with distinct strengths and limitations.

Advertisement 1 ("Your Future Matters") uses emotional and personal appeal. It emphasizes individual agency, parental concern, and positive action. Language is warm, inclusive, and future-focused. The tone suggests climate action as achievable and personally rewarding. Strength lies in emotional engagement-it motivates through hope and responsibility rather than fear. This approach likely appeals to individuals motivated by personal relationships and positive outcomes. Limitation: it lacks rigorous evidence. Readers wanting scientific justification may find this approach insufficient. It risks appearing superficial to skeptics.

Advertisement 2 ("Climate Crisis: The Facts") uses evidence and urgency. It emphasizes scientific reality, policy commitment, and systematic response. Language is direct, factual, and authoritative. The tone suggests crisis requiring immediate action. Strength lies in credibility and urgency-readers cannot dismiss evidence. Scientific backing appeals to rationally-motivated individuals. The scope-governmental commitment, multiple sectors-demonstrates systemic seriousness. Limitation: it risks overwhelming readers with scale and complexity. The emphasis on what others must do (governments, corporations) may diminish individual agency, reducing personal motivation.

Combined evaluation: Advertisement 1 motivates through emotion and personal agency. It's likely effective with parents and individuals seeking hope. Advertisement 2 motivates through evidence and systemic concern. It appeals to analytically-minded individuals and those prioritizing urgency. Together, they employ complementary approaches-one motivating through feeling, one through thinking. Separately, each has limitations the other addresses.`,
        marks: 27,
        feedback:
          'Excellent comparative analysis with clear articulation of different approaches. Strengths and limitations well-explained with supporting evidence.',
      },
      {
        taskNumber: 3,
        answer: `EVALUATING EFFECTIVENESS FOR YOUNG AUDIENCES

These advertisements employ distinct approaches with varying effectiveness for young people.

Strengths across all three include emotional engagement. Climate change feels abstract and overwhelming to young people. These advertisements personalize it, making connection to individual choice and community action. The tone-hopeful, empowering, inclusive-prevents despair and offers agency. Young people respond to being treated as agents of change rather than victims. This is a significant strength.

Strengths in specific approaches: Advertisement 1's emphasis on personal agency and future is particularly effective for young audiences. They will inhabit future consequences, making this relevant. The parental language may resonate with older teens considering their own parental futures. Advertisement 2's emphasis on scientific evidence appeals to analytically-minded students and those valuing credibility. Advertisement 3's focus on community and social movements acknowledges peer influence, significant for young people.

Limitations exist. Advertisement 1 lacks concrete action guidance-"switch to renewable energy" may seem inaccessible to young people with limited financial control. Advertisement 2's emphasis on scale may feel overwhelming, creating apathy rather than action. Advertisement 3's focus on "small actions" may seem insufficient in crisis scope, creating skepticism about impact.

Critical question: Will any motivate concrete action? Young people face barriers-limited autonomy, financial constraints, competing concerns. The advertisements motivate thought and emotion but may not translate to sustained behavior change. They work best when supported by accessible, achievable actions young people can genuinely take.

Overall, the advertisements effectively communicate climate importance and personal relevance. Their effectiveness depends on whether young people transition from emotional engagement to sustained action-a significant challenge these texts alone may not overcome.`,
        marks: 27,
        feedback:
          'Strong critical evaluation acknowledging multiple perspectives. Consideration of audience-specific factors is excellent. Balanced assessment of strengths and limitations.',
      },
    ],
  },

  // COMPONENT 02: Exploring Effects and Impact - Mock Exam 2
  {
    id: 'ocr-lang-comp02-002',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 02: Exploring Effects and Impact',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 2: Language and Manipulation in Social Media',
    description:
      'Students analyze how language creates effects and impacts in social media content.',
    sourceText: `SOCIAL MEDIA POST SERIES

POST 1: Celebrity Influencer
@GlamourLife
💎 OMG just got this NEW @LuxuryBrand handbag and I'm OBSESSED 😍✨ Worth every penny! If you love yourself, you need this. Link in bio to get yours! 🛍️ #AD #LuxuryLifestyle #MustHave

💬 Comments (2,847):
"NEEDS!!!" - @JennyLoves
"This is literally my dream bag 😭" - @SarahWants
"How much???" - @CuriousMind
"Um... don't you get PAID to post this?" - @SkepticalViewer

---

POST 2: Fitness Coach
@FitLife_Coach
Transform Your Body in 12 Weeks! 💪 My clients achieve INCREDIBLE results using my scientifically-proven system. Check out these BEFORE and AFTER photos 📸 Don't waste time or money on other programs. THIS is the solution you've been searching for. Sign up for my $199 Program today!

[Images show dramatic physical transformations]

Testimonial: "I couldn't believe the results! Best investment ever!" - Jessica R.

Note in small text: "Results may vary. This testimonial is from a personal friend of the coach."

---

POST 3: Mental Health Awareness Campaign
@MindMatters
Real Talk: Your struggles are valid. 🫂 We see so much pressure to appear "fine" on social media-curated highlights, filtered reality. Here's the truth: everyone struggles sometimes. Anxiety. Depression. Loneliness. These are normal human experiences, not failures.

You don't need to fix yourself. You need support, community, and sometimes professional help. There's no shame in asking.

If you're struggling: Text MINDCARE to 741741 or visit mindmatters.org. We're here to listen. No judgment. Just real talk.

Your worth isn't measured by followers, likes, or how you look. You matter exactly as you are. 💚

---

POST 4: News Organization
@NewsDaily
SHOCKING: Study finds link between social media use and depression in teens. Scientists warn of urgent need for research. Full story: [link]

Comments show heated debate about study validity, social media impact, and teen mental health.

---

POST 5: Wellness Brand
@WellnessNow
Feeling stressed? 😰 Overwhelmed? 😫 Try our NEW ReBalance Tea ☕✨ Made with NATURAL ingredients including: ashwagandha, chamomile, and mystical ancient herbs from the Himalayas 🏔️

SCIENTIFICALLY FORMULATED to reduce stress and anxiety. Customers report: "Total game-changer!" "Finally feel calm!" "Why didn't I find this sooner?"

Limited time: 40% OFF your first order! ⏰

*These statements have not been evaluated by health authorities. These products are not intended to diagnose, treat, cure, or prevent disease.`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Analysis of Language Effects',
        instruction:
          'Select two of the five posts. Analyze how language choices create specific effects on the audience. Consider tone, vocabulary, punctuation, visual elements (emojis, capitalization), and techniques. Approximately 280 words.',
        marks: 26,
      },
      {
        taskNumber: 2,
        title: 'Comparative Analysis of Persuasive Intent',
        instruction:
          'Compare how Posts 1 and 2 use language to persuade audiences to make purchasing decisions. Analyze the strategies each uses, considering appeals to emotion, credibility, and social proof. Approximately 300 words.',
        marks: 27,
      },
      {
        taskNumber: 3,
        title: 'Critical Evaluation of Authenticity and Impact',
        instruction:
          'Evaluate the impact of these different types of social media content on young audiences. Consider concepts of authenticity, manipulation, community, and wellbeing. How might young people be affected by exposure to these posts? Approximately 270 words.',
        marks: 27,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Selection and analysis of language features',
              marks: 10,
              details:
                'Two posts selected. Multiple language features identified and analyzed for each. Features appropriate and clearly explained.',
            },
            {
              criterion: 'Explanation of effects on audience',
              marks: 10,
              details:
                'Effects on audience clearly explained. Connection between language choice and audience response articulated.',
            },
            {
              criterion: 'Use of textual evidence',
              marks: 6,
              details:
                'Specific quotations and examples provided. Evidence effectively supports analysis.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Analysis of persuasive strategies',
              marks: 10,
              details:
                'Different persuasive strategies clearly identified in each post. Strategies compared effectively.',
            },
            {
              criterion: 'Engagement with emotional, credibility, and social appeals',
              marks: 10,
              details:
                'All three appeal types addressed. How each post uses them is clearly explained.',
            },
            {
              criterion: 'Effectiveness assessment',
              marks: 7,
              details:
                'Assessment of which strategy may be more effective and why. Considers audience and context.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Comprehensive evaluation across multiple posts',
              marks: 10,
              details:
                'Considers impact of varied content types. Acknowledges both positive and negative potential impacts.',
            },
            {
              criterion: 'Discussion of authenticity and manipulation',
              marks: 10,
              details:
                'Engages with authenticity concept. Identifies manipulative elements. Discusses implications.',
            },
            {
              criterion: 'Critical consideration of young audience vulnerability',
              marks: 7,
              details:
                'Considers age-specific vulnerabilities. Discusses wellbeing implications. Balanced perspective.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `LANGUAGE EFFECTS IN POSTS 3 AND 5

Post 3 (Mental Health Campaign) uses language creating emotional connection and authentic support.

Tone is conversational and intimate. "Real Talk" signals authenticity-casual, honest communication rather than formal messaging. This tone creates permission for vulnerability. The phrase "Your struggles are valid" uses direct validation, addressing the shame many feel discussing mental health. This is emotionally powerful because it offers acceptance.

Punctuation choices reinforce intimacy. Repeated em-dashes ("anxiety. Depression. Loneliness.") create emphasis and pause, forcing reader consideration of each condition. This structural choice makes struggles feel recognized rather than glossed over. The emoji choice (💚 green heart) signals hope and care rather than clinical detachment.

Language avoids medicalization. Rather than "mental illness" or "clinical depression," the post uses accessible language. "Everyone struggles sometimes" normalizes emotional difficulty, reducing stigma. This language choice is effective because it makes professional help feel accessible rather than desperate.

Post 5 (Wellness Product) uses language creating false credibility and urgency.

"SCIENTIFICALLY FORMULATED" uses capitalization to suggest authority, but provides no actual scientific evidence. This is manipulative-authority claimed without justification. "Natural ingredients" suggests safety through naturalness, appealing to preference for natural over synthetic without evidence that natural equals safe.

Vague language obscures claims. "Ancient herbs from the Himalayas" creates exotic mystique without specificity or evidence. This appeals to beliefs in traditional wisdom but lacks accountability.

Urgency is artificially created. "Limited time: 40% OFF" and ⏰ emoji pressure immediate purchase. This emotional pressure overrides considered decision-making.

Small print disclaimer reveals actual claims lack support-statements "have not been evaluated" and product "not intended to diagnose, treat, cure, or prevent disease"-contradicting marketing claims.

Post 3 builds trust through honest vulnerability. Post 5 manipulates through false authority and artificial urgency.`,
        marks: 25,
        feedback:
          'Strong analysis of language features with clear explanation of effects. Good use of specific evidence. Could expand slightly on audience psychology.',
      },
      {
        taskNumber: 2,
        answer: `PERSUASIVE STRATEGIES: LUXURY vs. TRANSFORMATION

Post 1 (Luxury Handbag) and Post 2 (Fitness Program) employ distinct persuasive strategies to drive purchasing decisions.

Post 1 uses emotional appeal and social proof. Language centers on personal enthusiasm ("OMG," "OBSESSED," emojis). The celebrity status creates aspirational appeal-audiences want to emulate this lifestyle. "If you love yourself, you need this" equates product ownership with self-love, making purchase a self-care act. Emotional language ("NEEDS!!!") in comments creates social proof-many people desire this product, so it must be valuable. The influencer's authority comes from status and likeability rather than expertise.

This strategy works through envy and aspiration. Audiences desire the lifestyle the influencer presents. The product becomes symbol of that lifestyle. Purchase feels like achieving identity transformation.

Post 2 uses transformation promise and credibility appeal. Language emphasizes results ("INCREDIBLE results," "BEFORE and AFTER"). Scientific language ("scientifically-proven system") claims authority. Testimonial provides social proof-real people achieved results. Time-limited offer ($199 program) creates urgency.

This strategy works through hope and self-improvement. Audiences desire physical change. The program promises transformation through legitimate methodology. Purchase feels like investment in self-improvement.

Key difference: Post 1 sells lifestyle and identity aspiration. Post 2 sells transformation and self-improvement. Post 1 appeals to desire to be like someone else. Post 2 appeals to desire to be better version of yourself.

Both are persuasive but manipulatively so. Post 1 obscures that this is advertising despite #AD. Post 2 includes small-print caveats ("Results may vary," testimonial from friend) contradicting claims. Neither acknowledges limitations of their promises. Post 2 may be more manipulative because it combines transformation promise with false scientific authority and obscured limitations.`,
        marks: 26,
        feedback:
          'Excellent comparative analysis of different persuasive strategies. Clear articulation of how each appeals to different audience motivations. Good critical assessment.',
      },
      {
        taskNumber: 3,
        answer: `IMPACT ON YOUNG AUDIENCES: AUTHENTICITY, MANIPULATION, AND WELLBEING

These diverse posts create complex impacts on young social media users, requiring careful consideration of manipulation, community, and mental health.

Posts 1, 2, and 5 employ commercial persuasion. Each uses manipulative techniques-false authority, artificial urgency, emotional pressure-designed to drive spending. Young people, developing critical thinking about advertising, are particularly vulnerable to subtle manipulation. Influencer authority (Post 1) feels like friendship rather than advertising. Scientific claims (Post 2, 5) feel authoritative without scrutiny. The cumulative exposure to purchasing pressure affects financial decision-making and self-worth, as product ownership becomes linked to identity and self-care.

In contrast, Posts 3 and 4 offer different impacts. Post 3's authentic vulnerability creates community and permission for help-seeking. Young people struggling with mental health see their experiences validated and support offered. This likely improves wellbeing by reducing shame. Post 4's news reporting informs audience about important research, supporting informed citizenship.

The complexity lies in co-existence. Young people navigate authentic mental health support alongside manipulative product marketing that claims to address the same struggles. A young person reading Post 3's validation might then encounter Post 5 suggesting a product "solves" their anxiety. This creates confusion-is mental health struggle something requiring professional support (Post 3) or treatable through product purchase (Post 5)?

Overall impact depends on media literacy. Young people understanding Post 1's sponsorship and Posts 2 and 5's manipulative techniques can resist them. Those lacking literacy may internalize messages linking self-worth to consumption and authenticity to curated content.

Posts 3 and 4 offer genuine community and information, supporting wellbeing. Posts 1, 2, and 5 undermine wellbeing through manipulation and false solutions. The challenge for young audiences is distinguishing between them, developing critical consumption of social media content.`,
        marks: 27,
        feedback:
          'Excellent comprehensive evaluation acknowledging different content types and their varied impacts. Strong engagement with authenticity and manipulation concepts.',
      },
    ],
  },

  // COMPONENT 02: Exploring Effects and Impact - Mock Exam 3
  {
    id: 'ocr-lang-comp02-003',
    board: 'OCR',
    spec: 'J351',
    component: 'Component 02: Exploring Effects and Impact',
    duration: '2 hours',
    totalMarks: 80,
    title: 'Mock Exam 3: Language and Power in Political Rhetoric',
    description:
      'Students analyze how language creates effects and impacts in political communication.',
    sourceText: `POLITICAL SPEECHES AND STATEMENTS

SPEECH 1: ELECTION CAMPAIGN ADDRESS
[Delivered to large crowd at rally]

"My fellow citizens,

For too long, our community has been forgotten. Broken promises. Failed leadership. While our families struggled, our leadership looked the other way. While our workers fought for dignity, corporations grew richer. While our children deserved quality schools, budgets shrunk year after year.

But I'm here to tell you: that changes NOW.

We are the people this country was built for. We are the workers, the parents, the small business owners, the dreamers. We are the ones who built this nation with our own hands and our own determination. And we deserve leadership that remembers us.

Together, we will rebuild. We will restore dignity to work. We will protect our families and our futures. We will reclaim the promise of this nation.

They say change is impossible. They say you can't win. They want you to believe you're powerless. Don't believe them. You are the most powerful force in this nation. Your voice matters. Your vote matters.

On election day, we vote for change. We vote for ourselves. We vote for our future.

Together, we win."

---

SPEECH 2: ENVIRONMENTAL POLICY ANNOUNCEMENT
[Government minister addressing parliament]

"Madam Speaker, honorable members,

I rise today to present a comprehensive environmental strategy grounded in scientific evidence and economic pragmatism. Climate change presents both existential risk and economic opportunity. Our response must be proportionate, evidence-based, and economically sustainable.

The data is clear: global temperatures have risen 1.1 degrees Celsius since pre-industrial times. This warming correlates with documented ecological change. However, alarmist rhetoric obscures the complexity of climate science and risks counterproductive policy.

Our approach integrates three priorities: emissions reduction through investment in renewable energy technology, economic transition supporting affected workers, and innovation leadership positioning our nation competitively.

Specific measures include: carbon pricing mechanisms reflecting environmental cost while maintaining economic competitiveness; renewable energy investment of $2 billion over five years; workforce training programs for economic transition; research funding for carbon reduction technologies.

This balanced approach acknowledges climate reality while maintaining economic stability. We reject both denial and panic. We embrace evidence-based policy.

International cooperation remains essential. Our strategy aligns with Paris Agreement commitments while protecting domestic interests. We lead by example, demonstrating that environmental responsibility and economic prosperity are compatible.

I commend this strategy to this house."

---

SPEECH 3: COMMUNITY ACTIVIST SPEECH
[Community meeting discussing local government cuts]

"Look around this room. Teachers. Parents. Nurses. Social workers. These are the people who make our community work. These are the people being told their work doesn't matter because there's no money.

They're lying.

There's always money when corporations need tax breaks. There's always money for projects politicians care about. But when it comes to schools? Libraries? After-school programs? Suddenly there's no money.

It's not about scarcity. It's about priorities. And right now, our community's priorities are being decided by people who don't live here, who don't care about our families, who see us as budget lines instead of neighbors.

We have power. Not them. Us.

When we organize, when we show up, when we speak together-they listen. We've done this before. We've fought and won. We can do it again.

This isn't about left or right. It's about whether our community values the people who make it function. It's about saying: our children deserve better. Our teachers deserve better. Our community deserves better.

So here's what we're doing. We're organizing. We're showing up at council meetings. We're speaking for ourselves. We're making them listen.

Who's with me?"`,
    tasks: [
      {
        taskNumber: 1,
        title: 'Analysis of Rhetorical Techniques',
        instruction:
          'Choose one speech. Identify and analyze four different rhetorical techniques used to create persuasive effects. For each technique, provide evidence, explain what it is, and explain its effect on the audience. Approximately 300 words.',
        marks: 26,
      },
      {
        taskNumber: 2,
        title: 'Comparative Analysis of Tone and Register',
        instruction:
          'Compare how Speeches 1 and 2 use different tones and registers (formal vs. informal language, emotional vs. logical appeals). How do these differences reflect their purposes and audiences? Approximately 300 words.',
        marks: 27,
      },
      {
        taskNumber: 3,
        title: 'Critical Evaluation of Rhetorical Power and Effect',
        instruction:
          'Evaluate how each speech uses language to create power and influence. Which speech is most persuasive and why? Consider ethos, pathos, and logos. What are the implications of each rhetorical approach? Approximately 280 words.',
        marks: 27,
      },
    ],
    markScheme: {
      taskMarking: [
        {
          taskNumber: 1,
          criteriaWeighting: [
            {
              criterion: 'Identification of rhetorical techniques',
              marks: 10,
              details:
                'Four distinct techniques correctly identified and named (e.g., repetition, anaphora, direct address, rhetorical questions, parallel structure, antithesis, emotive language, inclusive pronouns).',
            },
            {
              criterion: 'Accurate evidence and quotation',
              marks: 8,
              details:
                'Quotations accurately represent techniques. Evidence clearly supports identification.',
            },
            {
              criterion: 'Explanation of effect',
              marks: 8,
              details:
                'Effect on audience clearly explained. How technique creates persuasion is articulated.',
            },
          ],
        },
        {
          taskNumber: 2,
          criteriaWeighting: [
            {
              criterion: 'Clear identification of tone and register differences',
              marks: 10,
              details:
                'Different tones clearly identified (emotional vs. logical). Register differences articulated (formal vs. informal).',
            },
            {
              criterion: 'Connection to purpose and audience',
              marks: 10,
              details:
                'How tone and register reflect purpose and target audience clearly explained.',
            },
            {
              criterion: 'Supported with textual evidence',
              marks: 7,
              details: 'Specific examples and quotations support comparison.',
            },
          ],
        },
        {
          taskNumber: 3,
          criteriaWeighting: [
            {
              criterion: 'Application of ethos, pathos, logos',
              marks: 10,
              details:
                'All three rhetorical appeals discussed. How each speech uses them is explained.',
            },
            {
              criterion: 'Judgment of persuasiveness',
              marks: 10,
              details:
                'Clear judgment about which speech is most persuasive. Judgment is supported with reasoning.',
            },
            {
              criterion: 'Critical reflection on implications',
              marks: 7,
              details:
                'Implications of rhetorical approaches discussed. Critical perspective is evident.',
            },
          ],
        },
      ],
    },
    modelAnswers: [
      {
        taskNumber: 1,
        answer: `RHETORICAL TECHNIQUES IN SPEECH 1: CAMPAIGN ADDRESS

This campaign speech employs multiple techniques to create emotional persuasion and mobilize audience action.

First, repetition of "we" creates inclusive unity. "We are the people," "We will rebuild," "Together, we win"-the repeated pronoun includes audience in movement. This technique psychologically merges speaker with audience, making victory feel collective rather than individual. Audience members transform from spectators to participants.

Second, anaphora (repeated sentence openings) creates rhythmic persuasion. "For too long...Broken promises...While our families...While our workers...While our children" repeats structural patterns, building momentum. This technique is hypnotic-audiences absorb repeated patterns emotionally rather than rationally. The rhythm feels powerful and unstoppable.

Third, binary opposition creates moral clarity. "They say change is impossible...Don't believe them." "They want you powerless...You are the most powerful." These oppositions divide world into us (good) and them (bad). This simplification is persuasive because it eliminates ambiguity-audience knows exactly which side to support.

Fourth, rhetorical questions demand internal answering. "Don't believe them-don't you believe it?" The question form requires audience mental participation. Readers cannot passively receive; they must think through the question. This active engagement makes the persuasion feel like discovery rather than imposition.

These techniques work together to create emotional intensity, moral clarity, and audience participation. The speech doesn't argue logically; it persuades through emotional rhythm and inclusive participation. Audiences feel empowered, unified, and morally justified-powerful persuasive effects without requiring detailed policy analysis.`,
        marks: 25,
        feedback:
          'Excellent identification and analysis of four distinct techniques. Effects are clearly explained. Could provide slightly more context about technique effectiveness.',
      },
      {
        taskNumber: 2,
        answer: `COMPARING TONE AND REGISTER: SPEECHES 1 AND 2

These speeches employ fundamentally different tones and registers, reflecting their distinct purposes and audiences.

Speech 1 uses informal, emotional tone. Language is conversational and accessible ("I'm here to tell you," "don't believe them"). Sentence length varies dramatically, creating rhythm and emphasis. Short sentences ("Together, we win.") land powerfully. The overall tone is passionate and rallying. This tone reflects the campaign's purpose-mobilizing emotional commitment-and addresses a general audience expecting emotional engagement. The informality suggests authenticity and connection-voters want leaders who feel like them, not distant elites.

Speech 2 uses formal, logical tone. Language is parliamentary and technical ("grounded in scientific evidence," "carbon pricing mechanisms"). Sentence structure is complex and sophisticated. The tone is measured and authoritative. This tone reflects parliamentary purpose-persuading educated legislators through evidence-and addresses an audience expecting logical rigor. Formality suggests expertise and careful deliberation.

Key difference: Speech 1 prioritizes emotional connection and popular mobilization. Speech 2 prioritizes intellectual credibility and institutional legitimacy. These reflect different power bases-Speech 1 appeals to popular support (election votes), Speech 2 appeals to institutional authority (parliamentary colleagues).

Implications: Speech 1's informality builds connection but might seem simplistic to skeptics. Speech 2's formality builds credibility but might seem elitist or disconnected from ordinary people. Each tone serves its purpose well but would be counterproductive in the other context. A campaign speech using parliamentary register would seem inauthentic. A parliamentary address using emotional register would seem unprofessional.

These tonal differences reveal how speakers strategically construct authority-through emotional connection in one case, through technical expertise in the other. Both work, but they work through different psychological mechanisms.`,
        marks: 27,
        feedback:
          'Strong comparative analysis with clear articulation of tone and register differences. Excellent connection to purpose and audience. Well-reasoned implications discussed.',
      },
      {
        taskNumber: 3,
        answer: `RHETORICAL POWER: ETHOS, PATHOS, LOGOS ANALYSIS

The three speeches employ different rhetorical appeals, creating different types of persuasive power.

Speech 1 prioritizes pathos (emotional appeal). Emotionally charged language ("our families struggled," "your voice matters") creates emotional connection. Personal pronouns ("we," "you") build identification. The rhythm and repetition feel powerful emotionally. However, the speech provides minimal logical argument or factual support. Logic is absent-"they say change is impossible" dismisses counter-arguments rather than answering them. Ethos relies on audience identifying with the speaker as "one of us" rather than established credentials.

Speech 2 prioritizes logos (logical appeal). Evidence grounds arguments ("global temperatures risen 1.1 degrees," "$2 billion investment"). Multi-part structure logically develops ideas. Technical language suggests expertise. However, emotion is minimal-the measured tone may seem cold. Ethos relies on institutional authority and technical expertise rather than personal connection.

Speech 3 balances pathos and logos. Emotional appeals about community values combine with logical observations about budget priorities. The speaker establishes ethos through belonging to the community ("our teachers," "our children") and demonstrated experience ("we've fought and won").

Persuasiveness depends on audience. Speech 1 persuades audiences seeking emotional mobilization and community feeling. Voters feeling disconnected respond powerfully. Speech 2 persuades audiences valuing technical rigor and institutional credibility. Legislators deliberating policy respond to evidence. Speech 3 persuades audiences experiencing community concerns, using both emotional and logical appeals.

Critical implication: Different rhetorical approaches create different types of power. Emotional rhetoric (Speech 1) mobilizes masses but risks simplification. Logical rhetoric (Speech 2) builds credibility but risks alienating those seeking connection. Balanced rhetoric (Speech 3) attempts both. None is inherently superior-each serves different purposes and audiences. Understanding these differences reveals how language creates power and how audiences respond to different persuasive mechanisms.`,
        marks: 27,
        feedback:
          'Excellent critical evaluation using rhetorical framework. Clear judgment of persuasiveness with reasoning. Strong reflection on implications of different approaches.',
      },
    ],
  },
]
