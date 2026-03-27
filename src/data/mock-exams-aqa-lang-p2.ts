// @ts-nocheck
// ─── AQA GCSE English Language Paper 2 Mock Exam Papers ─────────────────────
// Writers' Viewpoints and Perspectives — 6 complete papers with source texts

import type { MockExamPaper } from './mock-exams'

// ─── Helper: creates a standard Paper 2 paper from config ────────────────────

interface P2Config {
  set: number
  sourceA: string
  textA: string
  authorA: string
  dateA: string
  sourceB: string
  textB: string
  authorB: string
  dateB: string
  q1BothTexts: string
  q1MarkScheme: string[]
  q1Answer45: string
  q1Answer67: string
  q2Text: string
  q2MarkScheme: string[]
  q2Answer45: string
  q2Answer67: string
  q3BothTexts: string
  q3MarkScheme: string[]
  q3Answer45: string
  q3Answer67: string
  q4Text: string
  q4MarkScheme: string[]
  q4Answer45: string
  q4Answer67: string
  q5Prompt: string
  q5Viewpoint: string
  q5MarkScheme: string[]
  q5Answer45: string
  q5Answer67: string
}

function makeP2(c: P2Config): MockExamPaper {
  const nn = String(c.set).padStart(2, '0')
  return {
    id: `aqa-lang-p2-${nn}`,
    board: 'AQA',
    paperNumber: 2,
    title: 'AQA Paper 2',
    subtitle: `Writers' Viewpoints and Perspectives — Set ${c.set}`,
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: `aqa-lang-p2-${nn}-reading`,
        title: 'Section A: Reading',
        description: 'You are going to read two texts. You will then answer the questions about both texts.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: `aqa-lang-p2-${nn}-q1`,
            questionNumber: 1,
            questionText: `Use details from both sources to write a summary of what each writer says about ${c.q1BothTexts}`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'summary',
            extract: `Source A (${c.sourceA}):\n${c.textA}\n\nSource B (${c.sourceB}):\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q1Answer45,
              'Grade 6-7': c.q1Answer67,
            },
            markScheme: c.q1MarkScheme,
          },
          {
            id: `aqa-lang-p2-${nn}-q2`,
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to ${c.q2Text}\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: c.textA,
            extractSource: c.sourceA,
            modelAnswers: {
              'Grade 4-5': c.q2Answer45,
              'Grade 6-7': c.q2Answer67,
            },
            markScheme: c.q2MarkScheme,
          },
          {
            id: `aqa-lang-p2-${nn}-q3`,
            questionNumber: 3,
            questionText: `Compare how the writers present their viewpoints about ${c.q3BothTexts}\n\nYou could compare:\n- the ideas presented in the two texts\n- the language used to present these ideas\n- the writers' methods to influence the reader.`,
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${c.textA}\n\nSource B:\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q3Answer45,
              'Grade 6-7': c.q3Answer67,
            },
            markScheme: c.q3MarkScheme,
          },
          {
            id: `aqa-lang-p2-${nn}-q4`,
            questionNumber: 4,
            questionText: `You may use details from both texts to support your answer if it is helpful.\n\n${c.q4Text}`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'evaluation',
            extract: `Source A:\n${c.textA}\n\nSource B:\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q4Answer45,
              'Grade 6-7': c.q4Answer67,
            },
            markScheme: c.q4MarkScheme,
          },
        ],
      },
      {
        id: `aqa-lang-p2-${nn}-writing`,
        title: 'Section B: Writing',
        description: 'You are going to write to present a viewpoint.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: `aqa-lang-p2-${nn}-q5`,
            questionNumber: 5,
            questionText: `${c.q5Prompt}\n\nYour task is to write to present a viewpoint.\n\n${c.q5Viewpoint}\n\nYou should write approximately 450-550 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'persuasive-writing',
            modelAnswers: {
              'Grade 4-5': c.q5Answer45,
              'Grade 6-7': c.q5Answer67,
            },
            markScheme: c.q5MarkScheme,
          },
        ],
      },
    ],
  }
}

// ─── PAPER 1: REMOTE WORK ───────────────────────────────────────────────────

const paper1: MockExamPaper = makeP2({
  set: 1,
  sourceA: 'Extract from "The Modern Workplace" by Catherine Blake, 2024',
  textA: `Remote working has transformed how we think about employment. No longer bound by the constraints of a physical office, workers now enjoy unprecedented flexibility. They can structure their day around personal commitments, eliminate exhausting commutes, and reclaim time with family. The productivity data speaks for itself: remote workers report higher job satisfaction and companies report improved output metrics.

However, this shift comes with hidden costs. The boundary between work and home blurs dangerously. Employees find themselves working longer hours, answering emails at midnight, unable to truly disconnect. The isolation is real. Workers describe feeling disconnected from colleagues, struggling with mental health, missing spontaneous collaboration that drives innovation.

Yet companies embrace remote work primarily for financial reasons—they no longer need expensive office spaces. The supposed employee benefits are secondary. True flexibility requires investment: proper home office equipment, mental health support, structured communication protocols. Few companies provide this. Instead, workers are left to manage hybrid chaos, unclear expectations, and the guilt of never being quite present enough—whether at home or at work.`,
  authorA: 'Catherine Blake',
  dateA: '2024',
  sourceB: 'Article from "Future of Work Quarterly", 2024',
  textB: `The debate over remote working has become needlessly polarized. Yes, some workers thrive at home. Others genuinely benefit from office culture. But the real opportunity lies in hybrid models—yet these are implemented poorly, creating the worst of both worlds for many employees.

When hybrid working is done well—with respect for both in-office and remote time—companies see remarkable benefits. Teams working remotely produce excellent results on focused tasks. Regular office days foster relationships and spontaneous problem-solving. Culture and innovation require both.

The statistics reveal nuance often missed in this debate. A 2024 study found that workers felt most satisfied when they had autonomy over when to work remotely. A three-day office week worked better than random hybrid schedules. Communication tools improved, but they couldn't replace face-to-face mentoring for junior staff.

The problem isn't remote work itself. It's that many organizations have simply shifted their office culture online without reconsidering how work actually gets done. They've maintained outdated meeting culture, rigid hierarchies, and surveillance practices—now applied digitally. This isn't flexibility; it's just control in a new form. True workplace transformation requires rethinking fundamental assumptions about trust, accountability, and what "being present" actually means in a digital age.`,
  authorB: 'Dr. James Morrison, Workplace Culture Researcher',
  dateB: '2024',
  q1BothTexts: 'the benefits and drawbacks of remote working',
  q1MarkScheme: [
    'Award up to 2 marks per text for identifying key points',
    'Award up to 2 marks for synthesizing or comparing the texts',
    'Accept paraphrasing; award credit for accurate summaries',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A presents remote work as beneficial for workers, offering flexibility and time with family. However, Blake argues companies exploit this for cost-cutting. Workers suffer from blurred boundaries and isolation, despite financial savings for employers. Source B acknowledges both advantages and disadvantages, arguing the real solution is well-implemented hybrid work. It emphasizes that remote work can be productive, but companies often fail to support it properly, maintaining surveillance rather than true flexibility. Both texts criticize how remote work is actually implemented in practice.`,
  q1Answer67: `Blake argues that while remote work offers genuine benefits for employees—flexibility, family time, and measurable productivity—these are undermined by company cost-cutting and inadequate support structures. She identifies the fundamental problem as isolation and work-life boundary collapse. Morrison presents a more nuanced analysis: both remote and office work have value, but hybrid models fail because organizations haven't reconceived how work operates. He distinguishes between flexible remote work and exploitative surveillance-based control. Both writers identify poor implementation as the core issue, though Blake focuses on employee wellbeing while Morrison emphasizes organizational dysfunction. Blake is more critical of corporations; Morrison suggests the problem is structural and solvable.`,
  q2Text: 'present the negative impacts of remote working on employees',
  q2MarkScheme: [
    'Identifies specific language features/techniques used',
    'Explains the effect of these choices',
    'Connects effects to the aim of showing negative impacts',
    'Uses subject terminology accurately (e.g., hyperbole, repetition, metaphor)',
    'Sophisticated analysis in top band linking semantic fields to meaning',
  ],
  q2Answer45: `Blake uses repeated negative language to emphasize the downsides. She writes about "hidden costs" and describes the boundary "blurs dangerously," using a word that suggests threat. She claims employees work "longer hours" and at "midnight," showing constant pressure. The repetition of isolation—"disconnected," "missing," "unable to disconnect"—emphasizes how remote work causes loneliness. When she says workers feel "guilt," she appeals to emotion. The short sentence "The isolation is real" is blunt and emphatic, making the point memorable.`,
  q2Answer67: `Blake establishes a semantic field of confinement and danger to critique remote work's psychological impact. The phrase "blurs dangerously" personifies boundaries as things that can be violated, implying violation of personal space. Her repetition of disconnection language—"disconnected from colleagues," "struggling with mental health," "unable to truly disconnect"—creates accumulation, suggesting isolation is multifaceted and inescapable. The temporal markers "midnight" and "longer hours" construct a dystopian image of endless work. By stating "The isolation is real" as a stark, isolated assertion, Blake challenges the rosy narrative of flexibility with unvarnished fact. Her critique of companies' "financial reasons" reveals cynicism, positioning employee benefits as secondary concerns, which implicitly condemns corporate ethics.`,
  q3BothTexts: 'the implementation and responsibility for remote working problems',
  q3MarkScheme: [
    'Identifies ideas in each text (award up to 2 marks per text)',
    'Makes explicit comparisons (not just side-by-side points)',
    'Analyzes language choices and their effects',
    'Considers audience and purpose',
    'Top band: sophisticated, integrated comparison of writers\' methods',
  ],
  q3Answer45: `Blake and Morrison both think remote work isn't the real problem—how companies use it is. Blake blames corporations for not investing in support while saving money. She's angry at employers. Morrison agrees companies have failed but for different reasons: they haven't rethought how work operates. He's more forgiving, suggesting the problem is structural rather than corporate greed. Blake focuses on employees suffering; Morrison focuses on fixing organizational thinking. Blake uses emotional language about guilt and isolation. Morrison uses more analytical language about "business culture" and "assumptions." Blake seems more critical of companies; Morrison offers solutions.`,
  q3Answer67: `Both writers identify implementation failures as central, yet attribute responsibility differently. Blake positions corporations as culpable agents who exploit remote work's financial benefits while neglecting employee welfare. Her accusatory tone—"companies embrace remote work primarily for financial reasons"—constructs a narrative of corporate cynicism. She uses parallelism ("unable to disconnect") to emphasize psychological damage, creating an emotional appeal against corporate negligence. Conversely, Morrison frames poor implementation as systemic organizational dysfunction rather than malicious intent. His measured analytical language—"needlessly polarized," "real opportunity"—positions him as a reasonable arbiter. He suggests companies have simply failed to reconceive work culture, implying the problem is solvable through rethinking rather than condemning exploitation. Blake writes primarily for sympathetic workers; Morrison writes for organizational leaders. Blake diagnoses a moral failure; Morrison diagnoses an intellectual one.`,
  q4Text: `Which source do you find more convincing in its argument? Explain your answer, using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgment stated (which source is more convincing)',
    'Evidence from the text supports the judgment',
    'Explains why the evidence is effective/convincing',
    'Considers alternative perspective',
    'Top band: sophisticated evaluation of rhetorical strategies and evidence quality',
  ],
  q4Answer45: `I find Source B more convincing because Morrison uses specific evidence like "a 2024 study" that shows workers prefer autonomous choice about remote work. Blake makes claims about isolation and guilt but doesn't provide data. Morrison admits remote work has benefits and disadvantages, so he seems fairer and more balanced. Blake seems very one-sided against companies, which makes her less trustworthy. Morrison's solution of hybrid work with three-day office weeks is practical. However, Blake is right that companies do cut costs, and Morrison doesn't fully address this problem.`,
  q4Answer67: `While Blake presents a compelling critique of corporate exploitation, Source B is ultimately more convincing due to its evidential grounding and analytical depth. Morrison supports claims with specific data—"a 2024 study found"—and provides concrete metrics ("three-day office week"), whereas Blake relies primarily on assertion and emotional appeal. His diagnosis of corporate cynicism is morally compelling but lacks the nuance to address complex workplace dynamics. Morrison's distinction between "flexibility" and "control repackaged digitally" demonstrates sophisticated understanding; he doesn't dismiss Blake's concerns but reframes them as symptomatic of organizational failure rather than inherent to remote work. His acknowledgment that remote work has genuine benefits alongside costs suggests credibility through concession. However, Blake's critique of corporations' failure to invest in support structures exposes a gap in Morrison's solution: good hybrid work requires substantial infrastructure that cost-conscious companies may avoid. Ultimately, Morrison's balanced framework and evidence-based approach seem more trustworthy, though Blake's skepticism about corporate motivation remains valid.`,
  q5Prompt: `Many jobs that were previously office-based have moved to remote or hybrid working arrangements. This has raised questions about how work should be organized in the future.`,
  q5Viewpoint: `Write an article for a career guidance website presenting your viewpoint on whether most office jobs should be fully remote, fully office-based, or hybrid. Consider the needs of employees, employers, and society.`,
  q5MarkScheme: [
    'Establishes clear viewpoint early',
    'Uses evidence and examples to support points',
    'Employs persuasive techniques effectively',
    'Organizes ideas logically with clear paragraphing',
    'Uses sophisticated vocabulary and varied sentence structures',
    'Addresses counterarguments',
    'Top band: compelling, well-developed argument with sophisticated rhetoric',
  ],
  q5Answer45: `The Future of Work Should Be Hybrid

Remote work and office work both have advantages and disadvantages. The best solution is hybrid working because it combines the benefits of both while avoiding the worst problems.

Remote work is good because employees save time commuting and can work flexibly. Productivity often increases because people can focus without office distractions. However, isolation is a real problem, especially for new employees learning from experienced workers. Some jobs need collaboration and brainstorming, which works better in person.

Office work has benefits too. People build relationships, which improves company culture. Face-to-face communication is clearer and faster. However, long commutes waste time, and offices are expensive to maintain. Not everyone works best in an office environment.

Hybrid working solves these problems. Employees can work remotely for focused work but come to the office for meetings and collaboration. This gives flexibility and also builds relationships. Companies save money because they don't need as many desks, but they still have office culture.

The best hybrid model gives employees choice about when to work remotely. This increases job satisfaction and shows that companies trust their workers. Three days in the office and two at home works well for most jobs.

In conclusion, hybrid working is the best solution for the future. It balances the needs of employees with business requirements and provides flexibility while maintaining workplace culture.`,
  q5Answer67: `The Hybrid Workplace: Balancing Autonomy and Connection

The future of work should not be dictated by binary thinking. Remote work offers genuine benefits—enhanced focus, reclaimed time, and increased autonomy—yet carries psychological costs of isolation and disconnection. Conversely, office culture fosters innovation and mentorship but consumes time and resources. The authentic solution lies in intelligent hybrid models that prioritize employee autonomy rather than corporate control.

The evidence is compelling: workers report highest satisfaction when they control their remote work schedule, not when organizations impose rigid mandates. A three-day office week provides sufficient in-person collaboration for mentoring junior staff and spontaneous problem-solving, while three remote days enable deep focus on individual work. This structure respects both human connection and professional productivity.

However, hybrid success requires organizational commitment beyond cost-cutting. Companies must resist the temptation to maintain surveillance-based control digitally. True flexibility means trusting employees to work effectively wherever they choose, equipped with proper technology and communication systems. Poorly implemented hybrid arrangements—random office days, unclear expectations, surveillance monitoring—replicate office culture's worst aspects without its community benefits.

For employers, hybrid working presents opportunity. Reduced office footprints decrease real estate costs while maintaining sufficient in-person interaction for culture and innovation. For employees, autonomy over work location acknowledges individual circumstances: caregiving responsibilities, neurodiversity, commute distances. Society benefits from reduced carbon emissions and decreased traffic congestion.

The counterargument—that fully remote work eliminates commute-related productivity loss—ignores data showing isolated workers struggle with mental health despite output metrics. Equally, insisting all work be office-based ignores how many employees produce excellent work remotely and how forced commuting wastes resources and increases stress.

The ethical choice is hybrid models that genuinely prioritize flexibility and trust. This requires organizations to reconceive fundamental assumptions about productivity, control, and presence. The future of work belongs to companies courageous enough to trust their employees.`,
})

// ─── PAPER 2: BOOKS VS E-BOOKS ──────────────────────────────────────────────

const paper2: MockExamPaper = makeP2({
  set: 2,
  sourceA: 'Extract from "The Case for Physical Books" by Marcus Webb, 2023',
  textA: `In an age of screens and notifications, the physical book remains an unparalleled tool for deep learning. When you hold a book, your mind enters a different state—slower, more contemplative, more deeply engaged. Studies show that readers of physical texts demonstrate better comprehension and retention than those reading identical content on screens. The tactile experience matters: the weight in your hands, the smell of paper, the visual progression through pages all anchor memory and meaning.

Yet publishers, authors, and even libraries have succumbed to the digital imperative. We've been sold a story of inevitability: that e-books are the future, that paper is obsolete, that convenience trumps all other values. This narrative benefits technology corporations far more than readers. Digital platforms lock content behind subscriptions, control access, track reading behavior, and can remove books without warning. Physical books offer something radical in the digital age: ownership and permanence.

The environmental argument, often deployed to justify digital books, deserves scrutiny. Paper production harms ecosystems, yes. But digital infrastructure—server farms consuming vast electricity, planned obsolescence in devices, rare earth mining for components—exacts hidden environmental costs rarely calculated. A physical book, circulated through libraries and used secondhand, may have lower environmental impact than a device requiring replacement every few years.

What we're losing isn't just books—it's cognitive space. When reading becomes frictionless, convenient, algorithmically curated, something essential is surrendered. We need the slow, unconnected experience that books provide.`,
  authorA: 'Marcus Webb',
  dateA: '2023',
  sourceB: 'Article from "Digital Culture Review", 2024',
  textB: `The romantic ideal of the physical book obscures practical realities. E-books have democratized access to literature in ways print never could. A reader in a rural area, a refugee in a camp, a person with visual impairment—all can instantly access millions of titles through digital formats and accessibility features that simply cannot exist in print. Dismissing e-books as mere convenience ignores how they've enabled literacy for populations historically excluded from reading.

Moreover, the "cognitive superiority" of print reading is overstated. Yes, some studies show better comprehension with physical text, but these findings are often small-effect studies with methodological limitations. When academic research is conducted with digital natives—those who learned to read on screens—comprehension gaps disappear. The advantage lies not with the medium but with familiarity.

Subscription platforms and digital rights do warrant concern. But the solution isn't abandoning digital formats; it's ensuring equitable access and reader ownership. Many libraries now offer e-book lending with DRM-free options. Independent publishers increasingly sell books directly, maintaining author-reader relationships outside corporate platforms. The digital ecosystem, while imperfect, is rapidly evolving toward fairer models.

The environmental calculation favors digital decisively. A single e-reader, used for thousands of books over its lifetime, has lower cumulative carbon footprint than print equivalents. Paper books require ongoing printing, shipping, and storage—perpetual environmental costs. Used book markets, while admirable, don't eliminate paper's baseline environmental impact.

Rather than nostalgic returns to print, we should push for digital literacy, platform regulation, and environmental responsibility in how e-books are produced and distributed.`,
  authorB: 'Dr. Elena Rossi, Digital Literacy Researcher',
  dateB: '2024',
  q1BothTexts: 'the advantages and disadvantages of physical books versus e-books',
  q1MarkScheme: [
    'Identifies key points from each source accurately (up to 2 marks per text)',
    'Shows clear understanding of different perspectives',
    'Award up to 2 marks for synthesis or comparison',
    'Accept paraphrasing and indirect references',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A argues that physical books are better for learning and memory than e-books. Webb says books feel better to hold and help you remember things. He claims libraries and publishers have made e-books popular for technology companies' benefit, not readers'. He worries that e-books remove ownership and control. He also says e-books might not be better for the environment because computers use a lot of electricity. Source B disagrees, saying e-books help more people read, including people with disabilities and people in poor areas. Rossi argues that the studies showing books are better are not very strong. She thinks digital books are better for the environment because you only buy one reader, not many books.`,
  q1Answer67: `Webb argues that physical books provide superior cognitive and emotional experiences through tactile and sensory engagement, supporting his claim with evidence that comprehension and retention improve with print. He critiques the digital narrative as corporate-driven rather than reader-centered, emphasizing concerns about subscription models, surveillance, and content removal. His environmental argument challenges conventional wisdom by highlighting hidden costs of digital infrastructure. Conversely, Rossi presents digital formats as democratizing access for historically marginalized readers—rural populations, refugees, visually impaired readers. She contextualizes comprehension research within reader familiarity rather than medium superiority, and offers nuanced solutions: platform regulation and DRM-free models rather than format abandonment. She argues cumulative environmental impact favors e-readers over repeated print production and shipping. Both writers value reader access; they disagree fundamentally on which format achieves it most ethically and sustainably.`,
  q2Text: 'present physical books as intellectually and environmentally superior to e-books',
  q2MarkScheme: [
    'Identifies specific language choices/techniques',
    'Explains how these choices create meaning and persuasion',
    'Connects techniques to the author\'s purpose',
    'Uses accurate subject terminology',
    'Top band: sophisticated analysis of cumulative rhetorical effect',
  ],
  q2Answer45: `Webb uses strong language to make physical books sound superior. He calls print "unparalleled" and e-books part of "digital imperative," suggesting e-books are a trend forced on us. He uses a metaphor about being "sold a story," implying we're being deceived. When he says reading books puts your mind in a "different state," he makes reading books sound spiritual and important. He lists sensory details: "weight in your hands, the smell of paper," which appeals to the reader's senses and makes books feel valuable. His phrase "something radical in the digital age" makes books sound like rebellion against technology.`,
  q2Answer67: `Webb's rhetoric positions print as intellectual resistance against corporate imperialism. His assertion that print reading produces "a different state—slower, more contemplative"—constructs a semantic field of depth and mindfulness opposed to digital superficiality. The metaphor "sold a story of inevitability" casts technological determinism as propaganda, appealing to reader skepticism. His strategic invocation of sensory experience—"weight," "smell," "visual progression"—activates embodied memory, suggesting digital reading is incorporeal and thus incomplete. The claim that physical books offer "something radical in the digital age" employs paradox: the ancient technology becomes revolutionary precisely through its refusal of digital convenience. His environmental reversal—challenging the assumed superiority of digital sustainability—demonstrates argumentative sophistication. By questioning the "hidden environmental costs rarely calculated," Webb implies corporate narratives deliberately obscure inconvenient truths, building credibility through skepticism. The cumulative effect positions print as both cognitively superior and ethically authentic against manipulative digital systems.`,
  q3BothTexts: 'whether printed books or e-books represent the future of reading',
  q3MarkScheme: [
    'Identifies contrasting ideas in each source',
    'Makes explicit comparisons between writers\' viewpoints',
    'Analyzes language techniques used by each writer',
    'Considers rhetorical strategies and effects',
    'Top band: integrated analysis of competing perspectives and rhetorical sophistication',
  ],
  q3Answer45: `Webb thinks printed books should be the future because they're better for learning and the environment. He writes emotionally about books and criticizes technology companies. Rossi disagrees, saying e-books are the future because they help more people read. She uses facts and research to support her points. Webb focuses on the feeling and experience of reading books, while Rossi focuses on practical benefits and access. Webb sounds romantic and emotional; Rossi sounds scientific and practical. Webb criticizes corporations; Rossi wants to improve digital systems rather than reject them. They have completely opposite views about which format is better.`,
  q3Answer67: `Webb and Rossi present fundamentally opposed futures: nostalgic restoration of print versus progressive digital evolution. Webb's rhetoric romanticizes the physical book, constructing it as cognitively superior and morally authentic, positioning digital reading as corporate manipulation. His language is evaluative and emotional: books provide "slow, unconnected experience," while digital platforms represent loss of "cognitive space." Rossi employs empirical rhetoric, citing research limitations and evidence of digital benefits, particularly for marginalized populations. Her strategic acknowledgment of digital problems ("subscription platforms and digital rights do warrant concern") preempts critique while positioning herself as balanced rather than ideological. Webb constructs print as resistance; Rossi constructs digital literacy as equity. Stylistically, Webb uses rhetorical questions and metaphor to create conviction; Rossi uses evidence and logical progression to build credibility. Webb addresses readers' nostalgic sensibilities; Rossi addresses social responsibility. Critically, Webb's argument assumes universal reading preference, while Rossi centers accessibility—fundamentally different ethical frameworks. Webb argues what readers should prefer; Rossi argues what readers should be enabled to access.`,
  q4Text: `Which source presents a more compelling argument about the future of reading? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgment stated',
    'Supported by specific evidence from both texts',
    'Explains why evidence is compelling/convincing',
    'Considers strengths and limitations of alternative view',
    'Top band: sophisticated evaluation of argument quality, evidence, and rhetoric',
  ],
  q4Answer45: `I think Source B is more compelling because Rossi provides specific facts about accessibility and the environment. She explains that e-books help people with disabilities and people in poor countries access books. Webb doesn't address this important point. Rossi also uses research to support her claims about e-readers being more environmentally friendly. Webb criticizes technology but doesn't offer a real solution. However, Webb is right that companies control digital content, and this is an important problem that Rossi doesn't fully address.`,
  q4Answer67: `Rossi's argument is more compelling due to its ethical grounding in equity and its evidence-based reasoning, though Webb raises legitimate concerns inadequately addressed. Rossi strategically employs specific beneficiaries—"rural populations," "refugees," "people with visual impairment"—making digital access not abstract but human. Her acknowledgment of legitimate concerns ("subscription platforms and digital rights do warrant concern") and solutions ("DRM-free options," "direct publishing") demonstrates sophisticated problem-solving rather than ideological rejection. Webb's environmental reversal—questioning "hidden costs rarely calculated"—lacks specificity; Rossi provides concrete cumulative-impact calculations. His cognitive superiority claim relies on studies "often small-effect" with "methodological limitations," weakening his central argument. However, Webb's critique of surveillance capitalism and content removal remains unsatisfactorily addressed by Rossi's optimistic platform evolution narrative. She assumes regulation and fairer models will materialize without addressing entrenched corporate interests. Her dismissal of "romantic ideals" risks overlooking legitimate concerns about commodification of reading. Ultimately, Rossi's centering of access for historically marginalized readers represents a more ethically compelling framework than Webb's appeal to privileged readers' aesthetic preferences, though her faith in platform self-correction deserves greater skepticism.`,
  q5Prompt: `Reading habits are changing as technology advances. Young people increasingly access stories through different media: streaming services, social media, podcasts, and interactive apps, alongside traditional books.`,
  q5Viewpoint: `Write an article for a magazine about reading and culture presenting your viewpoint on how reading will (or should) change in the coming decade. Consider the different formats available, how different people might benefit from different formats, and what might be lost or gained in this transformation.`,
  q5MarkScheme: [
    'Clear, sustained viewpoint',
    'Develops ideas with evidence and examples',
    'Uses persuasive techniques effectively',
    'Organizes argument logically',
    'Sophisticated vocabulary and varied sentence structures',
    'Addresses counterarguments and complexities',
    'Top band: compelling, nuanced argument with rhetorical sophistication',
  ],
  q5Answer45: `The Future of Reading is Diverse

Reading is changing. Young people don't read books as much as older generations, but they read more than ever before. They read on their phones, watch shows, listen to podcasts, and follow stories on social media. This doesn't mean reading is dying; it's just changing form.

Different formats work for different people. Some people like to read books because they concentrate better without distractions. Other people like audiobooks because they can listen while doing other things like exercising or commuting. Young people might read manga or graphic novels instead of traditional books. These are all forms of reading.

Streaming services tell stories in new ways. Shows like Netflix series can develop characters over many episodes, which books can take longer to do. Podcasts let people listen to stories, which helps people who are busy or who like listening better than reading.

Some people worry that we're losing something important when fewer people read traditional books. They think books are better for learning and memory. However, different formats work for different people. Someone with dyslexia might prefer audiobooks. Someone with limited time might prefer short social media stories.

The future of reading should include all formats. Young people will read differently than their parents, but that doesn't mean it's worse. We should celebrate that more people can access stories in ways that work for them.

In conclusion, reading is not dying; it's evolving. The future will include books, audiobooks, video, and interactive formats. Different people will use different formats, and that's okay.`,
  q5Answer67: `The Transformation of Reading: Embracing Multiple Literacies

The question is not whether reading will change—it already has—but whether cultural institutions will acknowledge this transformation authentically rather than defensively. The future of reading belongs not to a singular format but to a complex, intersecting ecosystem where books, audio, video, and interactive narratives coexist, each serving particular cognitive, social, and emotional needs.

Dismissing new formats as inferior misses crucial equity implications. Audiobooks provide access for blind readers and people with dyslexia, vastly expanding who can engage with complex narratives. Podcasts enable storytelling for people whose lives don't permit sustained sitting and reading—essential recognition for working parents, commuters, and people with attention differences. Graphic novels and manga develop visual literacy and appeal to neurodivergent readers who process visual and textual information simultaneously. These aren't compromises; they're sophisticated tools addressing diverse ways of learning and experiencing narrative.

Simultaneously, the concern about concentrated reading attention deserves serious consideration. Algorithms deliberately fragment attention; social media platforms optimize for distraction. When narrative is interrupted by notifications and algorithm-driven recommendations, something substantive about contemplation is lost. Deep sustained reading—in whatever format—requires resistance against attentional capitalism.

The authentic future is not either/or but both/and: recognizing that audiobooks and podcasts enable previously excluded readers while insisting these new formats also demand protection against corporate manipulation and distraction. Young people should encounter sustained, complex narratives across formats—not merely algorithmic fragments designed for engagement metrics.

Culture should invest equally in all formats. Libraries should support audiobook lending, interactive narratives, and podcasts alongside books. Schools should teach media literacy and attention discipline, not condemn formats. Most importantly, we should recognize that the decline of book reading among young people often reflects not format preference but the fact that their time is occupied by forced social media engagement and educational systems that have eliminated pleasure reading.

The future of reading is not a format choice. It's a question of whether we allow young people genuine autonomy in how they encounter stories, or whether we let attention-harvesting platforms colonize all their narrative experiences.`,
})

// ─── PAPER 3: URBAN MENTAL HEALTH ────────────────────────────────────────────

const paper3: MockExamPaper = makeP2({
  set: 3,
  sourceA: 'Extract from "Urban Life and Mental Health" by Dr. Sarah Chen, 2024',
  textA: `Cities are engines of human achievement and connection, yet they exact a psychological toll rarely acknowledged. Anxiety disorders and depression are significantly more prevalent among urban populations than their rural counterparts. The constant stimulation—noise, crowds, visual complexity, social density—creates a state of perpetual cognitive overload. Our nervous systems evolved for sparse environments; they cannot sustain equilibrium in cities' relentless sensory demand.

Urban design compounds this crisis. Modern cities prioritize traffic flow and commercial efficiency over human wellbeing. Parks are sparse, green spaces are monetized, and streets are designed for vehicles rather than pedestrians. The loss of biophilic contact—direct nature experience—deprives urban dwellers of a fundamental psychological restorative. Studies demonstrate that even brief exposure to vegetation reduces cortisol levels and anxiety. Cities, by design, deny this essential human need.

Yet cities also offer profound psychological benefits: belonging through community, meaning through cultural engagement, and economic opportunity enabling dignity. The relationship is complex. The issue isn't urbanization itself but how cities are currently built and structured. A redesigned city—with abundant green space, reduced traffic, lower density, protected quiet zones—might retain psychological benefits while mitigating harm.

The real challenge is political. Real estate development generates enormous profit; genuine urban redesign threatens those profits. Until cities prioritize residents' mental health over developers' returns, urban psychological crisis will deepen.`,
  authorA: 'Dr. Sarah Chen',
  dateA: '2024',
  sourceB: 'Article from "City Living Magazine", 2023',
  textB: `The narrative of urban psychological crisis often reflects rural nostalgia rather than evidence. Yes, cities have higher diagnosed anxiety rates—but this reflects diagnostic access, not necessarily higher actual prevalence. Rural populations face their own mental health crises: geographic isolation, limited mental health services, higher suicide rates, and economic desperation. Urban areas have psychiatrists, therapists, crisis services. Rural areas have gaps.

Moreover, cities provide psychological resources rural life cannot. Diverse communities foster belonging for people excluded in rural homogeneity—LGBTQ+ individuals, ethnic minorities, religious minorities. Cities enable anonymity and freedom unavailable in small communities where everyone knows your business. They offer cultural institutions, educational opportunities, and economic mobility. For millions of people, particularly young people from marginalized backgrounds, cities are psychologically liberating.

The sensory intensity of cities, which Chen frames as pure stressor, actually stimulates cognitive engagement and novelty-seeking behavior that humans inherently desire. Yes, urbanization requires psychological adaptation, but humans demonstrate remarkable adaptability. Urban dwellers develop sophisticated attentional filtering; they thrive on stimulation.

Urban mental health issues do exist, but attributing them to city design rather than economic inequality is misleading. Urban poverty, precarious housing, and employment instability generate psychological distress—not inherently urban phenomena but capitalism's manifestations. Rural poverty is equally damaging; it's simply less visible.

Cities should improve green spaces and traffic management—good ideas broadly. But romanticizing rural life as psychologically superior ignores the documented mental health challenges rural populations face while erasing the genuine freedom cities provide.`,
  authorB: 'Jackson Webb, Urban Studies Commentator',
  dateB: '2023',
  q1BothTexts: 'the effects of city living on mental health',
  q1MarkScheme: [
    'Identifies key points from each text (up to 2 marks per text)',
    'Shows understanding of different perspectives',
    'Synthesizes or compares perspectives (up to 2 marks)',
    'Accurate paraphrasing accepted',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A says that cities are bad for mental health because they have too much noise and crowds. Chen explains that cities don't have enough nature, which makes people stressed. She thinks cities need more parks and green spaces. She says the real problem is that developers want to make money, not help people's mental health. Source B disagrees. Webb says that rural areas also have mental health problems, but people don't talk about them as much. He argues that cities help people who are different, like gay people or people from different religions. He says the stress in cities comes from poverty and inequality, not from the city itself. Both writers discuss mental health in cities, but they disagree about whether cities are the problem.`,
  q1Answer67: `Chen argues that urban environments inherently stress human neurology through sensory overload and biophilic deprivation, exacerbated by car-centric design and commercialized green space. She identifies both neurological and political dimensions: psychological harm is both structurally inevitable and deliberately perpetuated for profit. Webb challenges this framework, arguing urban mental health disparities reflect diagnostic access rather than inherent urbanization harm, while highlighting rural mental health crises as equally severe but less visible. He emphasizes cities' psychological benefits for marginalized populations: sanctuary for LGBTQ+ individuals, ethnic minorities, and economically mobile young people. Critically, Webb reframes the stressor source from urbanity itself to economic inequality and precarious conditions that exist in both rural and urban contexts. Both acknowledge mental health challenges; they attribute causes differently: Chen blames urban design; Webb blames capitalism's manifestations and rural invisibility.`,
  q2Text: 'show how city design damages mental health',
  q2MarkScheme: [
    'Identifies specific language features and techniques',
    'Explains the effect of these choices on the reader',
    'Connects to the writer\'s purpose and argument',
    'Accurate terminology usage',
    'Top band: sophisticated analysis of how multiple techniques reinforce meaning',
  ],
  q2Answer45: `Chen uses strong negative language to show how cities damage mental health. She calls cities' effect a "crisis" and says they exact "a psychological toll." She uses a metaphor saying "Cities are engines," which sounds powerful but negative when connected to mental health damage. She lists the bad things about cities: "noise, crowds, visual complexity"—this repetition makes it sound like there are many problems. When she writes about parks being "sparse" and spaces being "monetized," she's saying cities don't have enough nature and turn it into business. She uses a statistic about cortisol levels to prove that nature reduces stress. The phrase "perpetual cognitive overload" sounds like a serious medical condition, which makes readers worry about city living.`,
  q2Answer67: `Chen constructs urban pathology through accumulating specific language choices. Her assertion that "cities exact a psychological toll rarely acknowledged" frames urbanization as a hidden epidemic, mobilizing reader concern. The metaphor "engines of human achievement" contains paradoxical tension: engines are efficient but produce exhaust, mirroring her argument that cities generate both connection and damage. Her assertion that "our nervous systems evolved for sparse environments" appeals to evolutionary authority, positioning urban stress as neurologically hardwired rather than culturally contingent. The semantic field of constraint—"perpetual cognitive overload," "relentless sensory demand," "cannot sustain equilibrium"—constructs cities as exceeding human capacity. Notably, she uses "biophilic contact" and "cortisol," employing scientific terminology to lend authority to claims about nature's psychological necessity. Her contrast between current reality and possibility—"A redesigned city...might retain...while mitigating"—positions current city design as remediable, strategically maintaining hope while sustaining critique. The phrase "until cities prioritize residents' mental health over developers' returns" employs personification and binary opposition, constructing a moral choice: human wellbeing versus corporate profit.`,
  q3BothTexts: 'whether city living is psychologically harmful',
  q3MarkScheme: [
    'Identifies contrasting viewpoints from each text',
    'Makes explicit comparisons between perspectives',
    'Analyzes language choices and their effects',
    'Considers how each writer constructs their argument',
    'Top band: sophisticated analysis of competing rhetorical strategies',
  ],
  q3Answer45: `Chen thinks cities are bad for mental health because of their design. She uses scientific language and statistics to support her argument, making it sound authoritative. Webb disagrees and argues that rural areas are just as bad, maybe worse. He thinks the problem is inequality, not cities themselves. Webb focuses on positive things about cities: freedom for minorities and economic opportunities. Chen focuses on negative physical effects: noise and lack of nature. Webb's writing is more balanced because he acknowledges that cities have problems but also benefits. Chen seems to blame city designers and developers without offering much hope. Webb seems more optimistic that cities can be fixed by addressing inequality.`,
  q3Answer67: `Chen and Webb construct fundamentally opposed causal narratives: Chen positions urbanity itself as inherently stressful; Webb repositions stress as arising from economic inequality and diagnostic invisibility rather than urban form. Stylistically, Chen employs scientific authority—"nervous systems evolved," "cortisol levels"—constructing urban harm as neurobiological fact. Her language patterns move from evidence (diagnosis statistics) toward moral critique (developers' greed), building emotional intensity. Webb counters with empirical challenge: higher urban diagnosis rates reflect "diagnostic access, not necessarily higher actual prevalence," repositioning urban health statistics as artifacts of infrastructure rather than urbanization toxicity. He strategically concedes Chen's design improvements ("good ideas broadly") while subordinating them to economic justice as the real lever for mental health. Critically, Webb centers marginalized experiences—LGBTQ+ individuals, ethnic minorities—that urban structure enables, whereas Chen's analysis largely assumes normative experiences while overlooking liberation cities provide. Webb constructs urban anonymity as psychological freedom; Chen constructs sensory intensity as inevitable stress. These rhetorical choices reflect competing values: Chen prioritizes neurological wellbeing; Webb prioritizes social justice and individual autonomy. Webb's acknowledgment of rural mental health crises implicitly critiques Chen's framework as parochial to urban, likely privileged populations.`,
  q4Text: `Which source do you find more convincing about the connection between city living and mental health? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgment with supporting evidence',
    'Specific textual references from both sources',
    'Explains why evidence is convincing or unconvincing',
    'Considers limitations and strengths of alternative view',
    'Top band: sophisticated evaluation of argument logic and evidence quality',
  ],
  q4Answer45: `I think Webb is more convincing because he addresses Chen's argument and explains why it's incomplete. He points out that rural areas have mental health problems too, and that Chen doesn't talk about them. He also explains that cities help some people, like LGBTQ+ people who might not be safe in rural areas. This shows he's thought carefully about the issue. Chen only focuses on negative things about cities and doesn't really acknowledge benefits. However, Chen is probably right that cities need more green space and that noise is stressful. Webb's point that poverty is the real problem makes more sense than blaming the city itself.`,
  q4Answer67: `Webb's argument is more structurally sound, though Chen identifies legitimate concerns Webb doesn't adequately address. Webb's strategic concession of Chen's design-improvement proposals while reframing root cause as economic inequality demonstrates argumentative sophistication—he doesn't dismiss her observations but repositions their significance. His empirical challenge to urban-depression causation—questioning whether higher diagnosis rates reflect prevalence or diagnostic access—exposes potential methodological weakness in Chen's evidence. His foregrounding of cities' liberation for marginalized populations introduces ethical considerations absent from Chen's neurobiological framework; she implicitly assumes normative experiences while overlooking how urban anonymity and diversity enable genuine freedom. However, Webb's counterargument that "capitalism's manifestations" affect rural and urban equally somewhat sidesteps Chen's specific claim about urban design's particular contribution to stress. He privileges economic justice over environmental design in ways that may underestimate how physical environment shapes daily psychological experience. Chen's invocation of evolutionary neurology and biophilic research represents credible evidence, though her assertion remains somewhat reductive. Ultimately, Webb's recognition of cities' complex, contradictory effects—simultaneous psychological challenge and liberation—is more intellectually honest than Chen's monocausal argument. His evidence-grounded skepticism about urban-depression causation and his attention to justice dimensions strengthen his position, despite potentially minimizing environmental design's genuine impact.`,
  q5Prompt: `Urban populations are growing worldwide, and cities face increasing mental health challenges. At the same time, cities offer opportunities, diversity, and community that rural areas cannot provide.`,
  q5Viewpoint: `Write an article for a public health organization presenting your viewpoint on how cities can be designed and managed to better support residents' mental health while preserving their social and economic benefits.`,
  q5MarkScheme: [
    'Establishes clear, sustained viewpoint',
    'Develops argument with specific evidence and examples',
    'Uses persuasive techniques effectively',
    'Logical organization with coherent progression',
    'Sophisticated vocabulary and varied sentence structures',
    'Acknowledges counterarguments or complexities',
    'Top band: compelling argument with nuanced, sophisticated rhetoric',
  ],
  q5Answer45: `Making Cities Better for Mental Health

Cities are growing, and more people live in them than ever before. Cities have benefits, like jobs and culture, but they also cause stress and mental health problems. Cities can be improved to help people's mental health without losing the good things about city life.

One way to improve cities is to add more green spaces. Parks and trees help reduce stress. People feel better when they can see nature. Cities should have parks near where people live so they can easily access them. This doesn't cost too much money and helps everyone.

Another solution is to reduce traffic and make cities quieter. Cars make noise and pollution, which stress people. If cities build better public transportation and bicycle lanes, fewer cars would be on the streets. This would make cities quieter and healthier. It would also help the environment.

Cities also need affordable housing. When people worry about paying rent, they get stressed and anxious. Housing is very expensive in cities, which makes people's mental health worse. Governments should require developers to build affordable housing so more people can afford to live in cities.

Community spaces are also important. Cities should have places where people can meet and talk to each other. This helps people feel less lonely. Community centers, public squares, and libraries are good places for people to connect.

Cities have good things: jobs, culture, and diversity. We can keep these things while also improving mental health. Cities just need better design and planning. If we invest in green space, transportation, housing, and community, cities can be good places for mental health and wellbeing.`,
  q5Answer67: `Designing Psychologically Healthy Cities: Balancing Growth with Wellbeing

The urban mental health crisis is simultaneously real and often misdiagnosed. Cities concentrate psychological stressors—noise, density, sensory overload—while simultaneously providing psychological resources—belonging, cultural engagement, economic mobility—that rural communities cannot offer. Urban mental health improvement therefore requires design interventions that mitigate genuine stressors without sacrificing the diversity and opportunity cities provide.

The research is clear: biophilic access substantially reduces stress markers. Cities must dramatically expand green space—not as luxury amenities in wealthy neighborhoods but as equitably distributed infrastructure. Singapore and Copenhagen demonstrate that high-density urban development and extensive green networks are compatible. Prioritizing tree-lined streets, neighborhood parks within five minutes' walk, and green roofs on public buildings is both feasible and evidence-based. However, such improvements benefit primarily those who can afford proximity; green gentrification follows. Green space requires accompanying strategies: rent controls, anti-displacement policies, community land trusts.

Traffic and noise reduction similarly demands political will. Converting car infrastructure to pedestrian and cycling networks reduces sensory overload while improving physical health. Cities like Paris and Barcelona have demonstrated that car-free zones increase social interaction and psychological wellbeing. This investment benefits lower-income residents disproportionately, who often lack private cars and suffer concentrated pollution exposure.

Critically, housing affordability directly impacts mental health. Precarious housing, forced moves, homelessness are primary mental health stressors. Some European cities implement strict rent controls and require percentage-of-units affordable housing from developers. This requires rejecting developer profit maximization—politically difficult but ethically necessary.

Finally, urban design should intentionally create third spaces: public squares, community centers, cultural institutions where diverse residents encounter each other. Loneliness is epidemic in cities; public space design addressing belonging directly supports mental health.

These interventions—green infrastructure, traffic reduction, housing security, public space—are not anti-urban. They strengthen cities' genuine strengths while mitigating their harms. The choice is not between rural wellbeing and urban growth but between negligent urbanism and intentional design that honors both human psychology and human connection.`,
})

// ─── PAPER 4: SEASONAL WORK ─────────────────────────────────────────────────

const paper4: MockExamPaper = makeP2({
  set: 4,
  sourceA: 'Extract from "The Case for Seasonal Work Rotations" by Patricia Okonkwo, 2024',
  textA: `The modern work culture of perpetual, year-round employment is not inevitable—it is a choice we can unmake. Seasonal work patterns, once the norm across economies, created natural rhythms of intensity and rest, of focused production and necessary recuperation. These rhythms aligned with human biology and genuine sustainability.

Contemporary full-time employment demands constant productivity regardless of natural cycles, seasons, or personal circumstance. This creates burnout, health deterioration, and the paradoxical inefficiency of exhausted workers producing mediocre work. The productivity myth—that more hours equals more output—has been thoroughly debunked by research. Yet organizations continue demanding unsustainable effort.

Consider seasonal work seriously: three months of intensive labor, three months of reduced hours or alternative work, cycling throughout the year. This model exists successfully in agriculture, tourism, construction. It could expand. Workers would experience genuine rest periods, manage health and family responsibilities, pursue education or creative work. Organizations would implement cost-efficiency, concentrating expensive operations during peak seasons while reducing overhead during slower periods.

The opposition is purely ideological. Corporations benefit from workers who feel perpetually obligated, unable to imagine alternatives. Seasonal work threatens this dependence. It enables worker autonomy, demands organizational efficiency, and honors human need for rest and variety.

We've forgotten that relentless work is not natural. Seasonal rhythms are.`,
  authorA: 'Patricia Okonkwo',
  dateA: '2024',
  sourceB: 'Article from "Employment Studies Quarterly", 2023',
  textB: `Seasonal employment models work for particular industries but are largely impractical for modern service, knowledge, and healthcare economies. The argument for seasonal rotation romanticizes agricultural work while ignoring its vulnerabilities.

Agricultural workers often experience seasonal unemployment—months without income or benefits. The "rest periods" Okonkwo celebrates are frequently periods of economic desperation and precarity. Seasonal workers typically lack health insurance, consistent income for housing and food, and professional development. Romanticizing this as "rest" ignores the anxiety accompanying irregular income.

Across knowledge work, service work, and healthcare, continuous operation is functional necessity, not ideological choice. Hospitals cannot be staffed seasonally. Tech companies require year-round operations maintaining global systems. Retail requires staff during all periods. The premise that work can be neatly segmented into seasonal cycles misunderstands modern economies' interdependence.

Okonkwo's real insight—workers need rest, autonomy, and time for personal development—deserves serious attention. But seasonal rotation is not the mechanism achieving this. Realistic solutions exist: genuinely enforced vacation time, sabbaticals every five to seven years, flexible work arrangements enabling part-time or variable schedules, mental health support, and workplace policies prioritizing wellbeing over endless productivity.

These measures can be implemented within existing full-time structures without the economic instability of seasonal employment. Countries with strong labor protections—Germany, Scandinavia—demonstrate that full-time work and worker wellbeing are compatible through regulation and cultural shift, not through seasonal precarity.

The goal is correct: worker rest and autonomy. The mechanism—seasonal employment—is flawed.`,
  authorB: 'Dr. Michael Torres, Employment Relations Scholar',
  dateB: '2023',
  q1BothTexts: 'work patterns and worker wellbeing',
  q1MarkScheme: [
    'Identifies key ideas from each source (up to 2 marks per text)',
    'Shows understanding of different perspectives (up to 2 marks)',
    'Accuracy in paraphrasing accepted',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A says that continuous work throughout the year is bad for workers. Okonkwo suggests seasonal work—working hard for some months, then having time off—would be better. She thinks this would reduce burnout and let people rest. Source B disagrees with seasonal work. Torres says that many jobs cannot use seasonal work because hospitals and tech companies need to operate all year. He thinks the real solution is better vacation time and flexible work rather than seasonal jobs. Both writers want workers to be happier and less stressed, but they disagree about how to solve the problem. Okonkwo wants to change when people work; Torres wants to change how many hours people work.`,
  q1Answer67: `Okonkwo advocates structural reorganization of work around seasonal cycles, arguing perpetual full-time employment produces burnout and inefficiency while misaligning with human biology. She positions seasonal rotation as both worker-beneficial (enabling rest, education, autonomy) and organizationally efficient. Torres concedes Okonkwo's underlying insight—workers need genuine rest and autonomy—but challenges seasonal employment as a mechanism, arguing it creates economic precarity rather than liberation. He emphasizes that knowledge economies, healthcare, and service sectors require continuous operation, making neat seasonal segmentation impractical. Critically, he reframes "rest periods" not as restoration but as unemployment anxiety. Torres advocates alternative mechanisms: enforced vacation, sabbaticals, flexible scheduling, and regulatory protection. Both prioritize worker wellbeing; they disagree fundamentally on whether structural work reorganization or regulatory reform within existing employment is more feasible and ethical.`,
  q2Text: 'present seasonal work as superior to continuous full-time employment',
  q2MarkScheme: [
    'Identifies specific language features used',
    'Explains effects of language choices',
    'Connects to the writer\'s persuasive purpose',
    'Uses terminology accurately',
    'Top band: sophisticated analysis of rhetorical strategy',
  ],
  q2Answer45: `Okonkwo uses repetition and contrast to support seasonal work. She repeats words like "rest," "rhythm," and "natural" to make seasonal work sound good. She contrasts "natural rhythms" with "perpetual employment," suggesting continuous work is unnatural. She uses the phrase "the productivity myth," which suggests businesses believe something false. When she says work that is "relentless" is "not natural," she appeals to nature as the standard for good work. She says corporations "benefit from workers who feel perpetually obligated," suggesting companies deliberately keep workers tired. This makes readers feel manipulated by employers. She ends by saying "seasonal rhythms are" natural, which is emphatic and memorable.`,
  q2Answer67: `Okonkwo constructs seasonal work as aligned with natural human and biological processes through strategic semantic patterning. Repeated invocation of "rhythms," "natural," and "cycles" creates a lexical field associating seasonal work with organicity and health, opposed to artificial "perpetual" demands. Her binary "intense production and necessary recuperation" positions rest not as laziness but as necessary restoration—a crucial reframing. The phrase "productivity myth—that more hours equals more output—has been thoroughly debunked by research" employs authoritative dismissal, positioning resistance to seasonal work as empirically baseless. Her accusation that "corporations benefit from workers who feel perpetually obligated" shifts from institutional necessity to deliberate exploitation, mobilizing reader skepticism toward employers. The rhetorical question "We've forgotten that relentless work is not natural. Seasonal rhythms are" employs parallel structure and antithesis, positioning her conclusion as rediscovery of forgotten truth. Importantly, her strategic invocation of successful seasonal models (agriculture, tourism, construction) provides concrete evidence while avoiding acknowledgment that these sectors often feature precarious conditions. The cumulative effect positions seasonal work as not merely viable but morally and practically superior, while framing opposition as ideological rather than practical.`,
  q3BothTexts: 'what changes would best improve worker wellbeing',
  q3MarkScheme: [
    'Identifies different proposed solutions from each text',
    'Makes explicit comparisons between approaches',
    'Analyzes language and rhetorical strategies',
    'Considers practical and ideological dimensions',
    'Top band: sophisticated analysis of competing frameworks',
  ],
  q3Answer45: `Okonkwo and Torres both want workers to feel better, but they propose different solutions. Okonkwo thinks changing when people work—seasonal patterns—is the answer. She writes emotionally about natural rhythms and criticizes corporations. Torres thinks the answer is better vacation time, flexible work, and better workplace policies. He focuses on practical solutions that could work in modern jobs like hospitals and tech companies. Okonkwo sounds idealistic; Torres sounds realistic. She criticizes corporations; he suggests reforms. Torres acknowledges Okonkwo is right about the problem but wrong about the solution. Torres seems more balanced because he admits seasonal work has some good ideas but explains why they won't work for most jobs.`,
  q3Answer67: `Okonkwo and Torres propose fundamentally different interventions reflecting distinct ideological frameworks. Okonkwo advocates radical structural reorganization: reimagining work patterns themselves to align with natural cycles. Her language—"natural," "biological," "forgot"—positions this as recovery of fundamental truth corporate ideology obscured. Torres concedes the problem but constrains solutions within existing employment structures: regulation, policy, cultural shift. His language—"realistic," "compatible," "protective"—positions this as pragmatic reform. Stylistically, Okonkwo employs moral rhetoric: work patterns reflect human needs and natural law, making seasonal work ethically imperative. Torres employs practical reasoning: seasonal work creates economic precarity, rendering it counterproductive despite good intentions. Critically, Okonkwo's argument assumes work can be decoupled from continuous economic operation, whereas Torres insists modern economies demand continuous service. He strategically cites German and Scandinavian examples—"full-time work and worker wellbeing are compatible"—suggesting Okonkwo presents false choice. However, Okonkwo would critique these as insufficient, mere modifications perpetuating exploitative systems. Torres addresses seasonal employment's actual precarity (irregular income, lack of benefits), directly challenging Okonkwo's romanticization. He reframes "rest periods" not as restoration but as unemployment anxiety—a crucial rhetorical move undermining her central claim. Both prioritize worker autonomy and rest; they disagree on whether these require systemic transformation or reform.`,
  q4Text: `Which source presents a more realistic and achievable approach to improving worker wellbeing? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgment with supporting evidence',
    'Specific references from both texts',
    'Explains why evidence strengthens argument',
    'Addresses limitations in alternative view',
    'Top band: sophisticated evaluation of practical and ideological dimensions',
  ],
  q4Answer45: `Torres presents a more realistic approach because he focuses on solutions that can actually work in modern jobs. He points out that hospitals and tech companies need to run all year, so seasonal work wouldn't work for them. He proposes vacation time and flexible work, which seems more practical. Okonkwo's idea is interesting but Torres is right that it ignores the precarity of seasonal jobs—workers without steady income and benefits. However, Okonkwo is right that full-time work causes burnout, and Torres should acknowledge this more. Torres's European examples show that better worker wellbeing is possible, which supports his argument. But maybe both approaches could work together—seasonal work for some industries and better vacation policies for others.`,
  q4Answer67: `Torres's argument is more compelling regarding realistic implementation, though Okonkwo identifies a fundamental problem Torres's reforms may inadequately address. Torres strategically demolishes seasonal work's apparent benefits by recontextualizing "rest periods" as unemployment precarity—a powerful empirical challenge to Okonkwo's romanticization. His insistence that "hospitals cannot be staffed seasonally" and that "tech companies require year-round operations" grounds opposition to seasonal work in functional necessity rather than mere ideology. His citation of German and Scandinavian models—"full-time work and worker wellbeing are compatible through regulation and cultural shift"—provides concrete evidence that his proposed reforms achieve Okonkwo's goal without precarity. However, Torres's confidence in regulatory solutions deserves skepticism. He assumes employers will voluntarily implement sabbaticals and mental health protections; Okonkwo would observe that corporate behavior has resisted such measures for decades despite evidence of their value. His framework privileges incremental reform over structural change, which may systematically underestimate how institutional inertia resists genuine wellbeing. Conversely, Okonkwo's seasonal model, while potentially addressing deep burnout issues, risks solving them through economic instability—a troubling trade-off she doesn't adequately address. The most realistic approach probably combines elements: strict regulatory enforcement of vacation, sabbatical, and flexible work policies within existing employment while experimenting with seasonal models in industries where they're genuinely viable. Neither writer adequately addresses this synthesis.`,
  q5Prompt: `Work-life balance has become increasingly difficult for employees in many sectors. Long working hours, constant availability expectations, and pressure to be continually productive take a toll on workers' physical and mental health.`,
  q5Viewpoint: `Write an article for a business magazine presenting your viewpoint on how organizations should redesign work to better support employee wellbeing and maintain business productivity. Consider different industries and roles.`,
  q5MarkScheme: [
    'Clear, sustained viewpoint',
    'Develops with specific evidence and examples',
    'Uses persuasive techniques effectively',
    'Logical organization',
    'Sophisticated vocabulary and varied sentences',
    'Addresses complexity or counterarguments',
    'Top band: compelling, nuanced argument with sophistication',
  ],
  q5Answer45: `Work Design for Employee Wellbeing

Employees work too many hours and feel stressed. Companies need to change how they organize work so people can be healthy and happy. This is good for employees and also good for business because healthier workers are more productive.

One solution is to enforce vacation time. Employees should be required to take time off, even if they don't want to. Rest is necessary for people to work effectively. Regular breaks from work help prevent burnout and mental health problems.

Another solution is to allow flexible work. Some employees could work from home part of the week, or work different hours that fit their lives better. This gives people more control over their schedule and reduces stress from commuting and rigid office hours.

Organizations should also reduce meetings and emails. Too much communication makes work stressful and prevents people from focusing on important tasks. If companies value focus time and reduce unnecessary communication, employees would be less stressed and more productive.

Mental health support is also important. Organizations should provide counseling, stress management training, and mental health days. When employees feel supported, they work better.

Different industries need different approaches. Hospitals cannot reduce hours because people need care, but they could improve scheduling and provide more mental health support. Offices could allow more flexible work. Retail could hire more people so workers don't need to work such long hours.

In conclusion, companies should redesign work. More vacation, flexible schedules, less meetings, and mental health support would help employees be healthier and more productive. This benefits both employees and business.`,
  q5Answer67: `Redesigning Work: Aligning Productivity with Human Wellbeing

The productivity paradox persists: organizations demand endless output while research consistently demonstrates that exhausted workers produce mediocre work, generating turnover, health costs, and reduced innovation. Genuine organizational success requires redesigning fundamental work structures to align productivity incentives with human psychological and physical needs.

The evidence base is clear: cognitive work deteriorates after sustained intensive effort. The "always-on" culture—constant email, Slack messages, meeting expectations—fragments attention and prevents deep focus that complex work requires. Organizations should implement protected focus time: designated hours without meetings, with email windows rather than constant monitoring. For knowledge work, this structural change alone improves both quality and worker satisfaction.

Vacation enforcement addresses the counterintuitive reality that voluntary vacation policies result in underutilization; workers feel guilty taking time off. Mandatory vacation with replacement workers ensures genuine rest and prevents burnout-driven turnover. European models demonstrate that enforced vacation reduces overall healthcare costs while improving productivity—ROI is measurable.

Flexible work arrangements deserve differentiation by role and industry. Customer-facing roles and healthcare cannot accommodate full remote work; they require presence. However, hybrid models—three-day office weeks with home-based work for focused tasks—improve outcomes. Tech companies demonstrating this report better retention and quality work. Retail faces structural constraints: hourly workers often require multiple jobs for survival. The solution isn't flexible remote work but sector-wide labor standards: living wages, full-time positions, predictable scheduling.

Remote-first is not the answer for all sectors. The answer is designing work to support human cognition and wellbeing within operational realities. Some industries require presence; they should reduce hours and improve conditions instead. Others can implement flexibility; they should.

Mental health infrastructure—counseling, peer support, clear escalation processes—addresses psychological harm but doesn't substitute for structural change. Creating healthier work requires both.

Fundamentally, organizations must abandon the myth that more hours produce more value. Cognitive economics is clear: focused, rested workers produce superior work. Investing in wellbeing is not benevolence; it is competitive advantage and basic economic rationality.`,
})

// ─── PAPER 5: PERSONAL DATA ─────────────────────────────────────────────────

const paper5: MockExamPaper = makeP2({
  set: 5,
  sourceA: 'Extract from "Owning Our Digital Lives" by Amara Obi, 2024',
  textA: `Personal data has become the economy's most valuable currency, yet individuals have surrendered ownership without negotiation. Tech platforms harvest behavioral data—what you search, purchase, click, linger on—then monetize it through advertising and sale. Users become the product, not the customer.

This asymmetry is fundamentally exploitative. Platforms profit from data worth thousands of dollars per user annually, while users receive "free" services that cost companies relatively little to operate. We've normalized this extraction as inevitable, yet it's purely structural: legal and political choices allow it.

Real solutions exist. The European Union's GDPR established that individuals own their data and must consent to processing. Predictably, tech companies mobilized massive lobbying against equivalent legislation elsewhere. Some countries could implement data cooperatives: users collectively own and negotiate data rights, sharing profits. Others could mandate that companies pay for personal data.

Without systemic change, surveillance capitalism will deepen. Governments must choose: do citizens own themselves, or do corporations?`,
  authorA: 'Amara Obi',
  dateA: '2024',
  sourceB: 'Article from "Tech Policy Today", 2024',
  textB: `Data regulation deserves serious consideration, but the narrative of exploited users oversimplifies digital economics. Users do receive genuine value: free email, social networks, search, navigation, communication. These services genuinely cost companies substantial resources. The advertising-supported model sustains free access enabling billions of people to connect globally.

"Owning data" is more conceptually complex than the rhetoric suggests. Data derives value through aggregation, analysis, and insight—not individual data points. Your individual search history is worthless; collective patterns enabling Netflix recommendations create value. Compensating individuals for discrete data points wouldn't generate meaningful income while destroying the analytics enabling valuable services.

GDPR provides important protections—informed consent, deletion rights, transparency. But it also created burdens: constant consent dialogs, complex opt-out processes that reduce usability. Privacy protection and usability often conflict.

Legitimate concerns exist: data breaches exposing personal information, excessive tracking, algorithmic manipulation. Regulation should address these harms—transparency requirements, security standards, limitations on manipulative uses. But conflating these specific harms with "exploitation" because companies profit from data analysis oversimplifies economics and may destroy services that benefit users, especially in developing countries where digital access is crucial.

Better solutions than data ownership: transparency about data use, user control over specific tracking practices, accountability for algorithmic systems, and sector-specific regulation addressing genuine harms.`,
  authorB: 'Dr. Helena Westbrook, Technology Economist',
  dateB: '2024',
  q1BothTexts: 'personal data, its value, and who should benefit from it',
  q1MarkScheme: [
    'Identifies key points from each source (up to 2 marks per text)',
    'Shows understanding of different perspectives',
    'Synthesis or comparison (up to 2 marks)',
    'Maximum 10 marks',
  ],
  q1Answer45: `Obi argues that tech companies steal personal data from users and make money from it without paying users. She thinks users should own their data or be paid for it. Source B disagrees, saying users get free services that are worth the data they provide. Westbrook explains that data is valuable when combined with lots of other data, not individually. Both writers discuss data and profit, but Obi thinks it's unfair exploitation while Westbrook thinks it's fair trade.`,
  q1Answer67: `Obi frames digital data extraction as exploitation: asymmetric value exchange where users unknowingly surrender ownership of behavioral data worth thousands of dollars annually, enriching corporations while users receive "free" services disguising undisclosed transactions. She positions this as systemic injustice requiring legal and political intervention. Westbrook contests the exploitation framing, arguing users receive genuine value—functional digital services enabling global connection—and that data's value derives from aggregate analysis, not individual data points. She acknowledges GDPR's protective value while noting implementation burdens. Both recognize data's economic significance; they disagree on fairness of current exchange and viability of ownership-based solutions. Critically, Westbrook questions whether individual data compensation would generate meaningful income, suggesting Obi's solution misunderstands data economics.`,
  q2Text: 'present data ownership as a fundamental right that has been wrongfully surrendered',
  q2MarkScheme: [
    'Identifies language features and techniques',
    'Explains effects on reader',
    'Connects to persuasive purpose',
    'Uses terminology accurately',
    'Top band: sophisticated analysis of rhetorical strategy',
  ],
  q2Answer45: `Obi uses strong moral language to make data ownership seem important. She calls data extraction "fundamentally exploitative," which is a serious accusation. She says users "surrendered ownership without negotiation," suggesting they were tricked or didn't have a choice. She calls data "the economy's most valuable currency," making it sound important like money. She says we've "normalized this extraction as inevitable," implying we should stop accepting it. The rhetorical question at the end—"do citizens own themselves, or do corporations?"—makes readers think about freedom and control.`,
  q2Answer67: `Obi constructs data ownership as moral imperative through strategic language choices. Her assertion that users "surrendered ownership without negotiation" frames data extraction as non-consensual seizure despite nominal consent, employing passive voice ("surrendered") to emphasize victimhood. The phrase "data has become the economy's most valuable currency" invokes economic authority—data equals money—establishing ownership as basic economic justice. Her description of the "asymmetry" as "fundamentally exploitative" employs philosophical language elevating the issue beyond mere commercial disagreement to systemic injustice. Crucially, she states "We've normalized this extraction as inevitable, yet it's purely structural: legal and political choices allow it." This moves exploitation from "natural" to "chosen," positioning regulation as justice restoration. Her rhetorical question—"do citizens own themselves, or do corporations?"—employs existential stakes (autonomy, selfhood) to mobilize reader concern. By equating data ownership with personal autonomy, she makes accepting surveillance equivalent to surrendering selfhood.`,
  q3BothTexts: 'the ethics and economics of personal data use by technology companies',
  q3MarkScheme: [
    'Identifies contrasting viewpoints',
    'Makes explicit comparisons',
    'Analyzes language and strategies',
    'Considers ethical and economic dimensions',
    'Top band: sophisticated analysis of competing frameworks',
  ],
  q3Answer45: `Obi and Westbrook disagree about whether data use is fair. Obi focuses on ethics: it's wrong to profit from people's data without paying them. Westbrook focuses on economics: the value comes from analyzing lots of data together, and users get free services. Obi uses moral language about exploitation; Westbrook uses practical language about value and benefits. Obi wants to change the system with laws; Westbrook wants to improve regulation but keep the basic system. Obi seems angrier about unfairness; Westbrook seems more interested in balancing privacy and service quality.`,
  q3Answer67: `Obi and Westbrook operate within fundamentally different ethical frameworks. Obi prioritizes individual autonomy and ownership rights: data is personal property unjustly extracted, and justice requires restitution or regulatory redistribution. Her language is rights-based and moral: "fundamentally exploitative," "surrendered ownership," "citizens own themselves." Westbrook prioritizes consequentialist economics: value creation through aggregation, service benefits for users, and practical regulatory improvements. She frames individual data as economically worthless; collective analysis creates value benefiting users through superior services. Stylistically, Obi employs moral absolutes; Westbrook employs nuanced tradeoffs. Obi: "Governments must choose: do citizens own themselves, or do corporations?" Westbrook: "legitimate concerns exist...but conflating specific harms with exploitation...may destroy services that benefit users." Westbrook strategically concedes Obi's concerns while repositioning them: she doesn't deny data collection but argues it's not exploitative given service value. She emphasizes benefits to developing countries particularly—an implicit critique that Obi's proposal might disadvantage less wealthy populations. Critically, Obi assumes ownership enables benefit-sharing; Westbrook argues ownership wouldn't work economically. They share concern about harmful practices but differ on whether the problem is data use itself or specific harmful applications.`,
  q4Text: `Which source presents a more convincing argument about personal data and digital platforms? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgment with evidence',
    'Specific textual references',
    'Explains why evidence is convincing',
    'Considers alternative perspective',
    'Top band: sophisticated evaluation',
  ],
  q4Answer45: `Westbrook's argument is more convincing because she acknowledges Obi's concerns but explains why the solution won't work. She's right that individual data isn't valuable alone—it's the combination that matters. If companies had to pay people for individual data, it wouldn't give people much money. Obi is right that the system seems unfair, but Westbrook's solutions—transparency and regulation—seem more practical. However, Obi makes a good point that companies make a lot of money and users get nothing, which does seem unfair.`,
  q4Answer67: `Westbrook's argument is more economically sophisticated and practically grounded, though Obi identifies a genuine injustice Westbrook doesn't fully resolve. Westbrook's distinction between individual and aggregate data value exposes a critical flaw in Obi's ownership premise: individual data compensation wouldn't generate meaningful income while potentially destroying analytics-enabled services. Her point—"Your individual search history is worthless; collective patterns enabling Netflix recommendations create value"—is empirically sound and directly undermines Obi's core proposal. Her acknowledgment that "GDPR provides important protections" while noting implementation burdens demonstrates nuance; she doesn't dismiss privacy concerns but contextualizes costs. However, Obi's characterization of asymmetric value exchange—users receive "free" services while corporations profit thousands of dollars annually—remains inadequately addressed. Westbrook claims users receive "genuine value," but this sidesteps the central question: should corporations unilaterally capture the economic surplus from data analysis without sharing benefits? European data cooperatives (mentioned but not explored) suggest feasible alternatives between individual ownership and current corporate capture. Ultimately, Westbrook's practical acknowledgment of service benefits and economic constraints strengthens her position over Obi's idealistic but impractical ownership vision, though her dismissal of structural unfairness deserves greater skepticism.`,
  q5Prompt: `Technology companies collect vast amounts of personal data from billions of users. This data is extremely valuable for business purposes, yet users typically receive no direct benefit.`,
  q5Viewpoint: `Write an article for a technology ethics journal presenting your viewpoint on how the data economy should be regulated to balance business interests with fair treatment of users. Consider practical implementation and different stakeholder perspectives.`,
  q5MarkScheme: [
    'Clear, sustained viewpoint',
    'Develops with evidence and examples',
    'Persuasive techniques',
    'Logical organization',
    'Sophisticated language',
    'Addresses counterarguments',
    'Top band: compelling, nuanced argument',
  ],
  q5Answer45: `Regulating Data: Fair Treatment for Users

Technology companies have too much power over personal data. They collect information about what people do online and make money from selling it or using it for advertising. This isn't fair because users don't know what's happening or get any money. The data economy needs regulation.

One solution is transparency. Companies should tell users exactly what data they collect and how they use it. Right now the privacy policies are long and complicated so nobody reads them. If companies had to explain clearly what data they use, people could make better choices.

Another solution is user control. People should be able to easily delete their data or stop companies from collecting certain types of information. Right now, opting out is difficult and complicated.

Companies should also be honest about advertising. If companies use data to target advertising, they should tell users. People deserve to know when they're being targeted.

Some people say free services are worth the data cost. This is true, but people should have a choice. If people knew what their data was worth, they could decide whether the service is a fair deal.

Technology companies are very powerful and users are vulnerable. Regulations should protect users while still allowing companies to run their businesses. Transparency, user control, and honest advertising are reasonable requirements that balance both sides.

In conclusion, the data economy needs regulation to be fair. Companies should be transparent about data use, give users control, and be honest about how data is used for advertising.`,
  q5Answer67: `Restructuring the Data Economy: From Extraction to Equitable Partnership

The current data economy operates through asymmetric information and power: tech platforms extract behavioral data worth thousands of dollars per user annually while offering services that users cannot meaningfully refuse without social and economic exclusion. The ethical challenge is restructuring this economy to enable genuine user agency, equitable benefit-sharing, and transparency—while preserving innovation incentives.

The distinction between individual ownership and collective interests deserves attention. Individual data compensation is economically impractical; aggregate data creates value through analysis that individual-level payments cannot capture. However, this doesn't justify current extraction. Better solutions exist: data cooperatives where users collectively own and negotiate data rights, sharing analytics benefits; algorithmic transparency requirements ensuring platforms disclose how personal data drives content curation and targeting; platform-specific regulation addressing documented harms; and mandatory data security standards.

Transparency is foundational but insufficient. Current consent frameworks create "consent theater": dense, incomprehensible policies that obscure rather than enable choice. Meaningful transparency requires restructuring: simple, machine-readable privacy notices; visible data flow visualization; and enforceable limits on secondary use beyond consented purposes.

Crucially, the "free service" framing deserves skepticism. Users have largely no alternative—email, social networks, search are effectively mandatory for participation. True choice requires alternatives. Open-source platforms and interoperable systems enabling user data portability would create competitive pressure improving treatment across ecosystems.

Developing countries present particular considerations. Data regulation could disrupt free service access crucial for populations unable to pay. Solutions should differentiate: premium users with maximal control and benefit-sharing; opt-in data sharing for users prioritizing free access. This acknowledges economic realities while not exploiting inequality.

Practically, regulation should mandate: transparent data handling; user rights to access, delete, and port data; security standards with accountability; and prohibitions on manipulative uses (dark patterns, exploitative microtargeting). These protections address specific documented harms while preserving services that benefit billions globally.

The goal is neither corporate capture nor impossible individual ownership, but genuine partnerships: users retain meaningful control and benefit from analytics value they enable.`,
})

// ─── PAPER 6: UNIVERSITY EDUCATION ──────────────────────────────────────────

const paper6: MockExamPaper = makeP2({
  set: 6,
  sourceA: 'Extract from "The Case Against University" by Robert Winters, 2023',
  textA: `University has become an economically irrational choice. Graduates emerge with £40,000-£80,000 debt, often working jobs not requiring degrees, while alternative paths—apprenticeships, trade skills, entrepreneurship—provide immediate income and faster wealth-building. The degree, once an elite credential, is now a mass commodity. Employers no longer differentiate based on degree presence but on specific skills and experience.

Universities justify their role as knowledge transmission institutions, yet this function is increasingly obsolete. Online education—MIT OpenCourseWare, Coursera, YouTube—distributes knowledge freely or cheaply. The institutional advantage universities once held is gone.

The remaining argument is university as social experience and networking opportunity. But this comes at immense cost: tuition fees, living expenses, and the opportunity cost of years out of the labor market. For most graduates, this investment won't pay off.

Universities serve institutional interests: tuition income, research funding, faculty employment. They serve elite students well—those with family support enabling leisure to study. They exploit working-class students, extracting tuition while providing limited genuine career advantage.

The honest choice: explore alternatives. Consider apprenticeships, skilled trades, direct entry to work with on-the-job training. For a minority pursuing research or specialized knowledge, university remains valuable. For most, university is a debt-generating trap.`,
  authorA: 'Robert Winters',
  dateA: '2023',
  sourceB: 'Article from "Education Studies Review", 2024',
  textB: `The anti-university argument relies on flawed economic calculation. Yes, university carries costs—tuition, opportunity costs, time investment. But the data demonstrates clear lifetime earnings advantage: graduates earn 30-40% more over careers than non-graduates, with the differential increasing over decades. Return on investment is measurable and significant.

The "knowledge is free online" argument ignores learning science: knowledge acquisition is harder and slower without instruction, structure, and feedback. Online resources democratize access, but structured education with expert instruction still outpaces self-directed learning for most learners. Universities provide that structure.

Winters romanticizes apprenticeships without acknowledging their limitations. Apprenticeships require employer willingness to invest in training—increasingly scarce. They often offer lower wages during training years, and career ceilings restricting mobility. University, despite costs, provides greater flexibility and advancement opportunity across career changes.

The social and intellectual benefits Winters dismisses as luxury deserve weight. University develops critical thinking, disciplinary depth, and intellectual community. These enable adaptability as economies transform. Workers with only specific job training struggle when that training becomes obsolete. University graduates demonstrate greater adaptability and resilience to economic change.

Critically, university's weakness—relatively high costs—is a policy choice. Countries with free or low-cost university (Germany, Nordic countries, South Korea) combine degree benefits with affordability. Rather than abandoning university, we should fix pricing.`,
  authorB: 'Professor Jessica Chen, Educational Economics',
  dateB: '2024',
  q1BothTexts: 'the value and purpose of university education',
  q1MarkScheme: [
    'Identifies key ideas from both sources (up to 2 marks per text)',
    'Shows understanding of different viewpoints',
    'Synthesis or comparison (up to 2 marks)',
    'Maximum 10 marks',
  ],
  q1Answer45: `Winters thinks university is too expensive and not worth the cost. He says students can learn online for free or do apprenticeships instead. Source B agrees university costs money but says graduates earn more money in their careers, so it's worth it. Chen argues that university develops critical thinking and flexibility, which are important. Both discuss the value of university, but Winters thinks it's not worth the cost while Chen thinks the benefits outweigh the costs.`,
  q1Answer67: `Winters argues university is economically irrational: graduates emerge with substantial debt while alternative pathways (apprenticeships, trades, direct employment) provide faster income and comparable wealth-building, particularly given that degrees are now mass commodities employers no longer differentiate. He contends knowledge distribution through free online resources and universities' service to institutional rather than student interests further undermine their value proposition. Chen contests the economic calculation, citing empirical data: graduates earn 30-40% more over careers, with differentials increasing over decades, providing measurable positive ROI. She argues this ignores knowledge-acquisition science demonstrating that structured expert instruction outperforms self-directed learning, and that apprenticeships, while valuable, have limited scalability and career mobility compared to degrees. Both acknowledge costs and benefits; they interpret data differently regarding return on investment and forward-compatibility of learning approaches.`,
  q2Text: 'argue that university has become economically irrational and exploitative',
  q2MarkScheme: [
    'Identifies specific language features',
    'Explains effects on reader',
    'Connects to persuasive purpose',
    'Uses terminology accurately',
    'Top band: sophisticated analysis of rhetorical technique',
  ],
  q2Answer45: `Winters uses strong language to criticize universities. He calls university education an "economically irrational choice" right at the beginning, which sets a negative tone. He describes debt as a "trap," which is an extreme word suggesting danger. He says universities "exploit" working-class students, which is a serious accusation. He contrasts universities serving "elite students well" with how they harm working-class students, showing an unfair system. His final sentence is emphatic and memorable: "For most, university is a debt-generating trap." The repetition of "university" makes the criticism stick in readers' minds.`,
  q2Answer67: `Winters constructs university as predatory institution through morally charged language. His opening assertion—"University has become an economically irrational choice"—frames opposition as fact rather than opinion, setting authoritative tone. The phrase "debt-generating trap" employs metaphor associating university with predation and inescapability. His description of knowledge as "increasingly obsolete" through institutional distribution suggests universities have become functionally redundant. Critically, he positions universities as serving "institutional interests: tuition income, research funding, faculty employment" rather than student interests, framing them as selfish organizations prioritizing profit extraction. His explicit statement that universities "exploit working-class students" makes exploitation a defining institutional feature, appealing to class consciousness and economic justice concerns. By contrasting service to "elite students" (with "family support enabling leisure") against working-class students forced to work while studying and emerge with debt, he constructs universities as class-stratified exploitation mechanisms. His final assertion—"university is a debt-generating trap"—employs anaphora with "For most" and "For a minority," structuring an us/them binary where the majority are damaged while an elite benefit. This rhetorical strategy mobilizes reader sympathy for exploited working-class students while positioning Winters as moral advocate against institutional injustice.`,
  q3BothTexts: 'the relationship between cost and value in university education',
  q3MarkScheme: [
    'Identifies different perspectives on cost-value tradeoff',
    'Makes explicit comparisons',
    'Analyzes rhetorical strategies',
    'Considers underlying assumptions',
    'Top band: sophisticated analysis of competing frameworks',
  ],
  q3Answer45: `Winters and Chen disagree about whether university costs are worth the benefits. Winters focuses on costs—debt, lost income during university years, high tuition. He emphasizes these costs make university a bad financial choice. Chen focuses on benefits—higher lifetime earnings, critical thinking, flexibility for career changes. She argues the earnings difference more than pays back the costs. Winters writes to convince people university is a bad deal; Chen writes to convince people it's a good deal. Winters seems to want to protect poor students from making expensive mistakes. Chen wants to show that university investment pays off. They read the same economic situation very differently.`,
  q3Answer67: `Winters and Chen construct fundamentally opposed cost-benefit narratives. Winters emphasizes visible, immediate costs: tuition debt (£40,000-£80,000), opportunity costs (years without income), and time investment, contrasting these against uncertain future benefits and observable alternatives offering faster income. His temporal focus is immediate: students suffer now with uncertain future payoff. Chen emphasizes lifetime earnings data: 30-40% differential with increasing advantages over decades, positioning costs as amortized through substantially higher lifetime income. Temporally, she privileges long-term accumulation over immediate expense. Stylistically, Winters uses concrete figures ($40,000-£80,000 debt) creating visceral concern; Chen uses percentage gains (30-40% more) emphasizing proportional advantage. Critically, Winters assumes education is merely human capital investment—if degree doesn't immediately increase earnings, it's worthless. Chen includes non-monetary benefits: critical thinking, intellectual community, economic adaptability. She frames university as developing resilience to economic change; Winters frames apprenticeships as sustainable. Importantly, Winters implies working-class students are betrayed by university; Chen suggests they benefit most from degree advantages. Chen strategically acknowledges Winters's valid critique of pricing—"this weakness...is a policy choice"—then reframes the solution not as abandoning university but as fixing pricing. By citing free/low-cost university elsewhere (Germany, Nordic countries), she suggests the problem is fixable policy, not inherent university dysfunction. This represents rhetorical sophistication: she doesn't deny Winters's cost reality but repositions it as solvable rather than fundamental.`,
  q4Text: `Which source presents a more compelling argument about university education's value? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgment with evidence',
    'Specific textual references',
    'Explains why evidence is compelling',
    'Considers the other perspective',
    'Top band: sophisticated evaluation',
  ],
  q4Answer45: `Chen's argument is more compelling because she provides specific earnings data showing graduates earn more money. Winters doesn't give exact numbers about alternative paths, so his claims seem less supported. Chen also makes good points about critical thinking and flexibility. However, Winters is right that university costs a lot of money and many students struggle with debt. Chen should acknowledge this problem more. Both make good points, but Chen's with concrete data seems stronger.`,
  q4Answer67: `Chen's argument is more compelling empirically and structurally, though Winters identifies systemic problems Chen's framework doesn't adequately address. Chen's strategic reference to "30-40% lifetime earnings advantage...with the differential increasing over decades" provides quantifiable evidence directly countering Winters's narrative. Her distinction between immediate costs and lifetime benefits demonstrates sophisticated economic reasoning; she doesn't deny costs but contextualizes them within longer timeframes. Her point that "knowledge acquisition...is slower without instruction, structure, and feedback" appeals to learning science, grounding her argument beyond mere economics. However, Winters's critique of universities as debt-generating institutions serving institutional interests rather than students deserves greater acknowledgment. Chen's assertion that universities "develop critical thinking" provides little evidence; contemporary accounts suggest many universities prioritize credentialism over intellectual development. Her proposal to "fix pricing" is sound but politically naive—she provides no mechanism addressing structural interests preserving high costs. Winters correctly identifies that university's economic value depends entirely on context: for elite students with family support or those pursuing research, valuable; for working-class students bearing debt burden, exploitative. Chen's counterargument about alternatives' limitations (apprenticeship scarcity, career ceilings) is sound but ignores that many working-class students could access apprenticeships not currently available due to university's credential inflation. Ultimately, Chen's empirical grounding in earnings data and learning science strengthens her position against Winters's moralistic language, though her confidence in current universities delivering promised critical thinking deserves skepticism, and her dismissal of genuine structural exploitation risks undermining her credibility.`,
  q5Prompt: `The cost of university education has risen dramatically, and many graduates face substantial debt. At the same time, university remains a popular path for young people seeking to develop skills and improve their career prospects.`,
  q5Viewpoint: `Write an article for a careers guidance website presenting your viewpoint on how young people should evaluate whether university is right for them. Consider different circumstances, career aspirations, and alternative paths.`,
  q5MarkScheme: [
    'Clear, sustained viewpoint',
    'Develops with specific evidence and examples',
    'Uses persuasive techniques effectively',
    'Logical organization and progression',
    'Sophisticated vocabulary and varied sentence structures',
    'Addresses counterarguments or complexity',
    'Top band: compelling, nuanced argument with rhetorical sophistication',
  ],
  q5Answer45: `Is University Right for You?

University is expensive, and many students worry about debt. But for some young people, university is a good choice. The question is: is it right for you?

University is worth considering if you know what you want to study. If you're interested in a career that needs a degree, like medicine or law, university is necessary. If you're interested in learning about a subject deeply, university provides that opportunity. University also helps with networking—you meet people who might help your career.

University might not be worth it if you don't know what you want to study. Some people go to university without a clear goal and don't finish, or finish with debt but no job. This is wasteful.

Apprenticeships are a good alternative. You earn money while learning a skill. After your apprenticeship, you have experience and no debt. For some jobs, apprenticeships are better than university.

You should consider:
- What career do you want?
- Does that career need a degree?
- Can you afford university or get financial support?
- Would you prefer learning on the job?

If you want to be a doctor, lawyer, or engineer, university is necessary. If you want to learn a trade, apprenticeships might be better. If you're not sure what you want, you could do an apprenticeship first, then decide about university later.

In conclusion, university is good for some people but not for everyone. You should think carefully about your goals, costs, and alternatives before deciding.`,
  q5Answer67: `Evaluating University: A Framework for Individual Circumstances

University remains valuable—but not universally. The decision requires rigorous self-assessment beyond romantic narratives of education and beyond cynical dismissals of institutional value. Neither "everyone should attend" nor "university is a trap" captures the complex reality: university's value is highly dependent on individual circumstances, explicit career pathways, and available alternatives.

First, clarify career requirements. Some professions mandate degrees: medicine, law, engineering, psychology require specific credentials. For these paths, university is essential, not optional. However, the majority of degrees don't directly enable careers requiring them. The genuine question: does the specific career require the specific degree?

Second, evaluate individual learning style and motivation. University functions well for self-directed learners motivated by intellectual depth and discipline-specific knowledge. It functions poorly for people requiring external structure but lacking intrinsic motivation. Apprenticeships, offering structure and immediate relevance, suit different learners. Assess honestly where you belong.

Third, calculate genuine cost—and honestly assess your financial situation. High-income families for whom tuition represents small expense relative to lifetime earnings benefit disproportionately. Working-class students carrying debt burden through all career stages face genuine hardship Winters correctly identifies. Some debts are worth carrying; others represent exploitation. Be specific about what you can afford.

Fourth, consider practical alternatives. Apprenticeships, while limited in availability, provide income, experience, and credential without debt. Direct entry with on-the-job training suits some fields. Gap years enabling clear career direction before university expense represent valid timing. The decision isn't binary: consider sequencing.

Finally, recognize intellectual development's genuine value beyond immediate economics. University cultivates critical thinking, exposure to disciplinary expertise, and intellectual community. These matter—but not for everyone, and not at any cost.

A realistic framework: if your career requires a degree, university is unavoidable. If it doesn't, evaluate honestly: cost-benefit analysis plus learning-style assessment plus available alternatives. Avoid both rose-tinted narratives of university as essential right-of-passage and cynical rejection of its genuine intellectual value. Instead, make the decision that serves your specific circumstances and aspirations.`,
})

export const aqaLangP2Mocks: MockExamPaper[] = [
  paper1,
  paper2,
  paper3,
  paper4,
  paper5,
  paper6,
]
