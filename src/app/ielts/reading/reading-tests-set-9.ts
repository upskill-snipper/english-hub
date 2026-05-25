// ─── IELTS Academic Reading - practice item bank (Set 9) ───────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation is
// implied. Academic track. Topic domains: marine ecology / world history /
// the economics and sociology of work.
//
// One complete, carefully-checked test: 3 passages, 40 questions. Every answer
// is verifiable from the passage text and is justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_9: ReadingTest[] = [
  {
    id: 'rd-academic-009',
    title: 'Academic Reading - Practice Test 9',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-009-p1',
        title: 'Rebuilding the Reef',
        body: `Coral reefs occupy less than one per cent of the ocean floor, yet they shelter close to a quarter of all marine species. This extraordinary abundance rests on an arrangement that is easy to overlook. The reef itself is built by tiny animals called polyps, each no larger than a grain of rice, which secrete a skeleton of limestone around their soft bodies. As one generation of polyps dies and the next builds upon the stony remains, a great structure rises over centuries, and the largest reefs visible today are the work of countless lifetimes. Living within the tissue of these polyps are microscopic algae, and it is the algae, drawing energy from sunlight, that supply the coral with most of the food it needs to grow. The partnership is so productive that a reef can flourish in clear tropical water that is, by the standards of the open sea, almost empty of nutrients. In return for shelter and the polyp's waste, the algae hand over the sugars they manufacture, an exchange so finely balanced that neither partner thrives for long without the other.

That same partnership is also the reef's great weakness. The algae can only function within a narrow band of temperature, and when the surrounding water grows too warm for too long, the coral expels them. Stripped of the algae that give it both colour and nourishment, the polyp turns a ghostly white, a condition known as bleaching. A bleached coral is not yet dead, and if cooler conditions return quickly the algae may be taken back in. But a prolonged spell of warmth leaves the animal starving, and across large stretches of reef the polyps perish, leaving behind only the bare limestone they once built.

The frequency of such events has risen sharply. Stretches of reef that historically bleached perhaps once in a generation now do so every few years, and the intervals between episodes have become too short for full recovery. Faced with losses on this scale, marine biologists have increasingly concluded that protection alone is no longer enough. In the worst-hit areas, they argue, reefs must be actively rebuilt if they are to survive at all, and a field once confined to a handful of experimental sites has grown into a serious branch of conservation.

The most widespread restoration method is also the simplest in principle. Small fragments are broken from healthy colonies and tied to underwater frames, where they are tended much as cuttings might be in a plant nursery. Because coral grows readily from such fragments, a single donor colony can yield hundreds of new ones without being destroyed. After months or years of growth the maturing corals are detached and cemented onto damaged reef, where, with luck, they spread and fuse into a continuous structure once more. The approach has restored sizeable areas, and its low cost has allowed it to be taken up by coastal communities with modest resources.

Yet growing more coral does little good if the new colonies are no better suited to the warming sea than those they replace. For this reason a second strand of research looks not at quantity but at resilience. On almost every reef a few colonies endure heatwaves that kill their neighbours, and biologists have begun to propagate these hardy survivors in the hope that their offspring will inherit the same tolerance. Others are going further, deliberately exposing young corals to mild heat stress so that only the toughest are planted out, a process that imitates natural selection but compresses it into a few seasons rather than many lifetimes.

There are limits, too, to how far either approach can be stretched. A reef rebuilt from a handful of donor colonies may lack the genetic variety of the original, and a population that is too uniform can prove fragile in unexpected ways, vulnerable to a single disease or a shift in conditions that its narrow stock cannot withstand. Practitioners have learned to gather fragments from many parents rather than few, and to mix them when replanting, in an effort to preserve the diversity on which a reef's long-term health depends. The work is painstaking, and a restored patch must often be tended for years before it can be left to fend for itself.

Critics caution that such efforts, however ingenious, address the symptom rather than the cause. Even the most heat-tolerant coral has limits, and if ocean temperatures continue to climb unchecked, no nursery will be able to keep pace with the destruction. Restoration, they insist, can buy a reef time, but it cannot substitute for action on the warming that threatens reefs in the first place. Few of those working in the water would disagree. Their aim, as one researcher has put it, is not to save the reefs single-handedly but to carry the most valuable fragments of them through a dangerous century, so that something remains to recover when the seas at last grow kinder.`,
        questions: [
          {
            id: 'rd-009-p1-q1',
            type: 'tfng',
            prompt:
              'Coral reefs cover less than one per cent of the ocean floor but are home to roughly a quarter of marine species.',
            answer: 'true',
            explanation:
              'The first sentence states that reefs "occupy less than one per cent of the ocean floor, yet they shelter close to a quarter of all marine species." This matches the statement, so it is True.',
          },
          {
            id: 'rd-009-p1-q2',
            type: 'mcq',
            prompt: 'According to the passage, where does a coral polyp get most of its food?',
            options: [
              'From nutrients dissolved in the surrounding tropical water',
              'From the algae that live inside its tissue',
              'From small particles it filters from the open sea',
              'From the limestone skeleton it secretes',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph says the algae "drawing energy from sunlight... supply the coral with most of the food it needs to grow." Option B is correct; the passage stresses the water is "almost empty of nutrients."',
          },
          {
            id: 'rd-009-p1-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: When a coral loses its algae it turns white, a condition known as _______.',
            acceptableAnswers: ['bleaching'],
            explanation:
              'The second paragraph states that the polyp "turns a ghostly white, a condition known as bleaching." The required word is "bleaching".',
          },
          {
            id: 'rd-009-p1-q4',
            type: 'tfng',
            prompt: 'A coral that has bleached is already dead and cannot recover.',
            answer: 'false',
            explanation:
              'The second paragraph says "A bleached coral is not yet dead, and if cooler conditions return quickly the algae may be taken back in." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-009-p1-q5',
            type: 'mcq',
            prompt:
              'Why have many biologists concluded that protecting reefs is no longer sufficient?',
            options: [
              'Because tourists are damaging reefs faster than laws can prevent',
              'Because bleaching now recurs too often for reefs to recover fully',
              'Because protected reefs attract too many competing species',
              'Because the algae have become resistant to cooler water',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph explains that reefs now bleach "every few years, and the intervals between episodes have become too short for full recovery," leading biologists to argue reefs must be actively rebuilt. Option B is correct.',
          },
          {
            id: 'rd-009-p1-q6',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: In the most common method, coral fragments are tied to underwater frames and cared for much like cuttings in a plant _______.',
            acceptableAnswers: ['nursery'],
            explanation:
              'The fourth paragraph says the fragments "are tended much as cuttings might be in a plant nursery." The missing word is "nursery".',
          },
          {
            id: 'rd-009-p1-q7',
            type: 'tfng',
            prompt:
              'Taking fragments for the nursery method destroys the healthy colony they are cut from.',
            answer: 'false',
            explanation:
              'The fourth paragraph states that "a single donor colony can yield hundreds of new ones without being destroyed." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-009-p1-q8',
            type: 'tfng',
            prompt:
              'The fragment-based restoration method is too costly for communities with limited resources.',
            answer: 'false',
            explanation:
              'The fourth paragraph says "its low cost has allowed it to be taken up by coastal communities with modest resources." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'rd-009-p1-q9',
            type: 'mcq',
            prompt: 'What is the aim of the second strand of research described in the passage?',
            options: [
              'To grow as many new corals as possible as quickly as possible',
              'To breed corals that are more tolerant of heat',
              'To move corals into cooler parts of the ocean',
              'To replace coral algae with a hardier species',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph says this strand "looks not at quantity but at resilience" and propagates hardy survivors "in the hope that their offspring will inherit the same tolerance." Option B is correct.',
          },
          {
            id: 'rd-009-p1-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Some researchers expose young corals to mild heat _______ so that only the toughest are planted out.',
            acceptableAnswers: ['stress'],
            explanation:
              'The fifth paragraph describes "deliberately exposing young corals to mild heat stress so that only the toughest are planted out." The required word is "stress".',
          },
          {
            id: 'rd-009-p1-q11',
            type: 'tfng',
            prompt:
              'The artificial selection of heat-tolerant corals works faster than natural selection would.',
            answer: 'true',
            explanation:
              'The fifth paragraph states the process "imitates natural selection but compresses it into a few seasons rather than many lifetimes," meaning it works faster. The statement is True.',
          },
          {
            id: 'rd-009-p1-q12',
            type: 'mcq',
            prompt: 'What is the main criticism of restoration that the passage reports?',
            options: [
              'It is far too expensive to carry out at a useful scale.',
              'It treats the symptom and cannot replace action on warming.',
              'It introduces diseases that spread to wild corals.',
              'It produces corals that grow more slowly than wild ones.',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph reports critics warning that such efforts "address the symptom rather than the cause" and that restoration "cannot substitute for action on the warming." Option B is correct.',
          },
          {
            id: 'rd-009-p1-q13',
            type: 'tfng',
            prompt:
              'The passage states that coral restoration began as a large, well-funded international programme.',
            answer: 'not-given',
            explanation:
              'The third paragraph says the field grew "from a handful of experimental sites" into a serious branch of conservation, but it never describes how it was funded or organised at the start, and says nothing about an international programme. There is no information either way, so the answer is Not Given.',
          },
        ],
      },
      {
        id: 'rd-academic-009-p2',
        title: 'Roads of Silk and Ideas',
        body: `The phrase "Silk Road" conjures the image of a single highway winding from China to the Mediterranean, travelled end to end by merchants with their camels and bales of cloth. The reality was very different. There was never one road, but a shifting web of routes across deserts, mountains and grasslands, and almost no trader covered the whole distance. Goods moved instead in short relays, passing from one set of hands to the next, so that a bolt of silk woven in the east might change owners a dozen times before it reached a buyer in the west, each merchant adding a margin and rarely knowing where the cargo had begun or where it would end.

The name itself is misleading in another way, for it was coined only in the nineteenth century by a German geographer, long after the routes had fallen quiet. Silk was certainly carried along them, and in the Roman world it became so fashionable, and so expensive, that moralists complained of the gold draining eastward to pay for it. But silk was merely the most glamorous of countless goods. Spices, glass, paper, precious stones, horses and medicines all travelled these roads, and in volume the humble trade in everyday wares far outweighed the luxuries that gave the network its romantic name.

What made the routes historically important, however, was not the merchandise but what travelled alongside it. Ideas, unlike silk, lose nothing when they are passed on, and the same caravans that carried cloth carried beliefs, techniques and stories. Religions spread along these arteries with remarkable speed. Buddhism, born in India, was carried north and east by traders and missionaries until it took root in China, while later the same roads spread other faiths in the opposite direction. Monasteries grew up beside the trading posts, serving travellers as inns as well as places of worship, and the art that decorated them blended styles from lands thousands of kilometres apart.

Technologies moved with equal consequence, though often more slowly and by routes that are now hard to trace. The methods of making paper, long a closely guarded secret in the east, gradually spread westward over several centuries, eventually reaching the cities of the Mediterranean and transforming the way knowledge was recorded. Techniques of irrigation, of metalworking and of medicine crossed in both directions, so that a remedy first described in one civilisation might, generations later, appear in the texts of another half a continent away. Crops travelled too, and seeds carried in a merchant's pack could, in time, reshape the diet of distant lands; fruits and grains unknown in one region took root in another and were soon thought native to it. Such transfers were rarely recorded at the time, and historians often reconstruct them only from scattered hints in language and in the soil itself.

The cities that grew rich on this traffic occupied the oases and mountain passes where the routes converged. They were not mere staging posts but cosmopolitan centres where languages, currencies and customs mingled, and where a single market might trade goods from a dozen distant lands. Their prosperity, however, depended entirely on the flow of caravans, and they were correspondingly fragile. When war closed a vital pass, or when the political order that kept the routes safe collapsed, the trade could wither within a generation, and cities that had flourished for centuries were swallowed by the desert and forgotten until archaeologists uncovered them in modern times.

The slow decline of the overland routes is often blamed on the opening of sea lanes between Europe and Asia. Once ships could carry bulky cargoes around the southern tip of Africa, the long and dangerous land journey lost much of its purpose, for a vessel could move in one voyage what a thousand camels carried in a year. The change was not sudden, and for a time land and sea routes ran side by side, each suited to particular goods; but the economics steadily favoured the ships, and the inland markets that had thrived on the passing trade slowly emptied as the great caravans dwindled. Yet the legacy of the routes long outlasted the camel trains. The crops, words, instruments and ideas that had seeped across the continent had taken permanent root, and the world that emerged was one whose distant parts had already, quietly, been knitted together.`,
        questions: [
          {
            id: 'rd-009-p2-q1',
            type: 'tfng',
            prompt:
              'The Silk Road was a single continuous road running from China to the Mediterranean.',
            answer: 'false',
            explanation:
              'The first paragraph states "There was never one road, but a shifting web of routes." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-009-p2-q2',
            type: 'mcq',
            prompt: 'How, according to the passage, did most goods actually move along the routes?',
            options: [
              'Carried the whole distance by a single merchant',
              'In short relays, passing between many traders',
              'Transported mainly by government officials',
              'Shipped by sea for most of the journey',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph explains that "Goods moved instead in short relays, passing from one set of hands to the next." Option B is correct; the passage stresses that "almost no trader covered the whole distance."',
          },
          {
            id: 'rd-009-p2-q3',
            type: 'tfng',
            prompt: 'The term "Silk Road" was used by traders at the height of the trade.',
            answer: 'false',
            explanation:
              'The second paragraph says the name "was coined only in the nineteenth century by a German geographer, long after the routes had fallen quiet." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-009-p2-q4',
            type: 'mcq',
            prompt: 'What does the passage say about silk compared with the other goods traded?',
            options: [
              'It was the only valuable item carried along the routes.',
              'It was banned in the Roman world because of its cost.',
              'It was the most glamorous, but everyday goods were greater in volume.',
              'It was traded only in the western half of the network.',
            ],
            correctIndex: 2,
            explanation:
              'The second paragraph calls silk "the most glamorous of countless goods" and says "the humble trade in everyday wares far outweighed the luxuries." Option C captures this.',
          },
          {
            id: 'rd-009-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Roman _______ complained that gold was draining eastward to pay for fashionable silk.',
            acceptableAnswers: ['moralists'],
            explanation:
              'The second paragraph states that "moralists complained of the gold draining eastward to pay for it." The required word is "moralists".',
          },
          {
            id: 'rd-009-p2-q6',
            type: 'mcq',
            prompt:
              'Why does the passage say ideas were more historically important than the goods?',
            options: [
              'Because ideas were more valuable than silk or spices',
              'Because ideas, unlike silk, lose nothing when passed on',
              'Because traders preferred to exchange ideas rather than wares',
              'Because ideas travelled faster than any caravan',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph states "Ideas, unlike silk, lose nothing when they are passed on," and that what made the routes important "was not the merchandise but what travelled alongside it." Option B is correct.',
          },
          {
            id: 'rd-009-p2-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: _______, which began in India, was carried north and east along the routes until it became established in China.',
            acceptableAnswers: ['Buddhism', 'buddhism'],
            explanation:
              'The third paragraph says "Buddhism, born in India, was carried north and east by traders and missionaries until it took root in China." The required word is "Buddhism".',
          },
          {
            id: 'rd-009-p2-q8',
            type: 'tfng',
            prompt:
              'Monasteries along the routes provided lodging for travellers as well as serving as places of worship.',
            answer: 'true',
            explanation:
              'The third paragraph states that monasteries grew up beside trading posts, "serving travellers as inns as well as places of worship." This matches the statement, so it is True.',
          },
          {
            id: 'rd-009-p2-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The methods of making _______, long kept secret in the east, slowly spread westward and changed how knowledge was recorded.',
            acceptableAnswers: ['paper'],
            explanation:
              'The fourth paragraph says "The methods of making paper, long a closely guarded secret in the east, gradually spread westward." The required word is "paper".',
          },
          {
            id: 'rd-009-p2-q10',
            type: 'tfng',
            prompt: 'Technological knowledge travelled only from east to west along the routes.',
            answer: 'false',
            explanation:
              'The fourth paragraph states that techniques "crossed in both directions." The statement limits the flow to one direction, so it is False.',
          },
          {
            id: 'rd-009-p2-q11',
            type: 'mcq',
            prompt: 'What does the passage say about the cities that grew rich on the trade?',
            options: [
              'They were self-sufficient and survived without the caravans.',
              'They were fragile because they depended on the flow of caravans.',
              'They were located far from the main routes for safety.',
              'They traded only in goods produced locally.',
            ],
            correctIndex: 1,
            explanation:
              'The fifth paragraph says their prosperity "depended entirely on the flow of caravans, and they were correspondingly fragile." Option B is correct.',
          },
          {
            id: 'rd-009-p2-q12',
            type: 'tfng',
            prompt:
              'The German geographer who named the routes also discovered the lost trading cities.',
            answer: 'not-given',
            explanation:
              'The passage mentions a German geographer coining the name in the nineteenth century, and separately says archaeologists later uncovered lost cities, but it never connects the two or says who made the discoveries. There is no information either way, so the answer is Not Given.',
          },
          {
            id: 'rd-009-p2-q13',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The decline of the overland routes is often attributed to the opening of _______ lanes between Europe and Asia.',
            acceptableAnswers: ['sea'],
            explanation:
              'The final paragraph says the decline "is often blamed on the opening of sea lanes between Europe and Asia." The required word is "sea".',
          },
          {
            id: 'rd-009-p2-q14',
            type: 'mcq',
            prompt: 'What does the passage conclude about the legacy of the routes?',
            options: [
              'It vanished completely once the camel trains stopped.',
              'It survived only in the form of written records.',
              'The crops, words and ideas they spread had taken permanent root.',
              'It was confined to the cities that had grown rich on trade.',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph states "The crops, words, instruments and ideas that had seeped across the continent had taken permanent root." Option C is correct.',
          },
        ],
      },
      {
        id: 'rd-academic-009-p3',
        title: 'Work Without Walls',
        body: `For most of the twentieth century the typical job had a clear shape. A worker was hired by a single employer, reported to a fixed workplace, and could expect, in return for loyalty and effort, a regular wage, paid holidays and some measure of security. This arrangement was so dominant that it came to seem the natural order of things rather than the product of a particular time. In the early twenty-first century, however, a different pattern began to spread, one in which the link between worker and employer grew looser, shorter and far harder to define.

The driving force was technology. Smartphones placed a powerful computer in almost every pocket, and software platforms could now match a person wanting a service with a person willing to provide it in a matter of seconds. A passenger could summon a driver, a diner could order a meal, a household could find someone to assemble furniture, all through an application that handled the payment and took a share of the fee. The people who answered these requests were rarely employees of the platform. They were, in the language that quickly took hold, participants in the "gig economy," paid for each task they completed and free, in principle, to work as much or as little as they chose.

The appeal of this flexibility is genuine and should not be dismissed. A parent can fit shifts around the school day, a student can earn between lectures, and someone with a steady job can take on extra work in the evenings without seeking a second employer. For people shut out of conventional employment, gig work can offer a way in, and surveys consistently find that the freedom to set one's own hours is the feature workers value most. To present the trend as nothing but exploitation is to ignore why so many have embraced it.

Yet the same flexibility has a harder edge. Because gig workers are usually classed not as employees but as independent contractors, they fall outside much of the protection that earlier generations fought to secure. They are typically owed no minimum wage between tasks, no sick pay, no pension contributions and no compensation if they are injured at work. The risk that an employer once carried has been quietly transferred to the individual, who must absorb the cost of slow days, illness and worn-out equipment alone. What looks from one angle like freedom looks from another like insecurity dressed in attractive language.

A particular source of unease is the way such work is supervised. Although gig workers are told they are their own bosses, in practice many are directed by the platform's software with a precision no human manager could match. An application can decide which jobs a worker is offered, track how quickly each is completed, and penalise those whose ratings slip, all without a conversation or an explanation. Workers describe the disorienting experience of being managed by an algorithm that cannot be questioned and to which no appeal can easily be made. The control of the traditional workplace has not disappeared; it has merely been written into code.

Governments have struggled to respond, partly because the work fits awkwardly into laws written for an older world. Courts in several countries have reached opposite conclusions about whether particular gig workers should count as employees, and platforms have warned that extending full employment rights would raise costs and reduce the very flexibility that workers prize. Some jurisdictions have begun to experiment with a middle path, granting gig workers certain protections without classifying them as full employees, but no settled answer has yet emerged, and the legal ground continues to shift from one ruling to the next.

What seems clear is that the change is not a passing fashion. The forces behind it - cheap computing, instant communication and a steady appetite for convenience - show no sign of weakening, and the share of people earning at least part of their living this way continues to rise. The question is no longer whether such work will exist, but on what terms. Whether the gig economy comes to be remembered as a liberation from the rigid job or as an erosion of hard-won rights will depend less on the technology itself than on the rules societies choose to place around it.`,
        questions: [
          {
            id: 'rd-009-p3-q1',
            type: 'tfng',
            prompt:
              'For most of the twentieth century, a typical worker was employed by one employer and worked at a fixed location.',
            answer: 'true',
            explanation:
              'The first paragraph states that a worker "was hired by a single employer, reported to a fixed workplace." This matches the statement, so it is True.',
          },
          {
            id: 'rd-009-p3-q2',
            type: 'mcq',
            prompt:
              'According to the passage, what was the main driving force behind the new pattern of work?',
            options: [
              'Changes in employment law',
              'Technology such as smartphones and software platforms',
              'A shortage of conventional jobs',
              'Pressure from trade unions',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph opens "The driving force was technology," describing smartphones and software platforms. Option B is correct.',
          },
          {
            id: 'rd-009-p3-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE or TWO words from the passage: People who completed tasks through the platforms were described as participants in the "_______".',
            acceptableAnswers: ['gig economy', 'the gig economy'],
            explanation:
              'The second paragraph says they were "in the language that quickly took hold, participants in the \'gig economy.\'" The required phrase is "gig economy".',
          },
          {
            id: 'rd-009-p3-q4',
            type: 'tfng',
            prompt:
              'Most people doing gig work were directly employed by the platforms they worked through.',
            answer: 'false',
            explanation:
              'The second paragraph states "The people who answered these requests were rarely employees of the platform." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-009-p3-q5',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Surveys repeatedly find that the _______ to set their own hours is the feature gig workers value most.',
            acceptableAnswers: ['freedom'],
            explanation:
              'The third paragraph states "the freedom to set one\'s own hours is the feature workers value most." The required word is "freedom".',
          },
          {
            id: 'rd-009-p3-q6',
            type: 'mcq',
            prompt:
              "What is the author's attitude towards the flexibility of gig work in the third paragraph?",
            options: [
              'It is an illusion that benefits no one.',
              'It is a genuine appeal that should not be dismissed.',
              'It matters only to students and parents.',
              'It is less important than the pay on offer.',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph says "The appeal of this flexibility is genuine and should not be dismissed" and warns against presenting the trend "as nothing but exploitation." Option B is correct.',
          },
          {
            id: 'rd-009-p3-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Gig workers are usually classified not as employees but as independent _______.',
            acceptableAnswers: ['contractors', 'independent contractors'],
            explanation:
              'The fourth paragraph says gig workers are "usually classed not as employees but as independent contractors." The required word is "contractors".',
          },
          {
            id: 'rd-009-p3-q8',
            type: 'tfng',
            prompt:
              'Gig workers typically receive sick pay and pension contributions between tasks.',
            answer: 'false',
            explanation:
              'The fourth paragraph says they are "typically owed no minimum wage between tasks, no sick pay, no pension contributions." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-009-p3-q9',
            type: 'mcq',
            prompt: 'What does the passage say has happened to the risk an employer once carried?',
            options: [
              'It has been shared equally between platforms and workers.',
              'It has been transferred to the individual worker.',
              'It has been removed by new government insurance.',
              'It has been passed on to the customers who book the service.',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph states "The risk that an employer once carried has been quietly transferred to the individual." Option B is correct.',
          },
          {
            id: 'rd-009-p3-q10',
            type: 'tfng',
            prompt:
              "Although they are told they are their own bosses, many gig workers are in practice directed by the platform's software.",
            answer: 'true',
            explanation:
              'The fifth paragraph says that "in practice many are directed by the platform\'s software with a precision no human manager could match." This matches the statement, so it is True.',
          },
          {
            id: 'rd-009-p3-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Workers describe being managed by an _______ that cannot be questioned and offers no easy appeal.',
            acceptableAnswers: ['algorithm'],
            explanation:
              'The fifth paragraph says workers describe "being managed by an algorithm that cannot be questioned." The required word is "algorithm".',
          },
          {
            id: 'rd-009-p3-q12',
            type: 'mcq',
            prompt:
              'Why, according to the passage, have governments struggled to respond to gig work?',
            options: [
              'Because the platforms are based in other countries',
              'Because the work fits awkwardly into laws written for an older world',
              'Because workers have refused to cooperate with regulators',
              'Because the work is too small to be worth regulating',
            ],
            correctIndex: 1,
            explanation:
              'The sixth paragraph states governments struggled "partly because the work fits awkwardly into laws written for an older world." Option B is correct.',
          },
          {
            id: 'rd-009-p3-q13',
            type: 'tfng',
            prompt:
              'Courts in different countries have all reached the same conclusion about the status of gig workers.',
            answer: 'false',
            explanation:
              'The sixth paragraph says "Courts in several countries have reached opposite conclusions about whether particular gig workers should count as employees." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-009-p3-q14',
            type: 'mcq',
            prompt: 'What does the author conclude about the future of the gig economy?',
            options: [
              'It is likely to fade as a passing fashion.',
              'It will persist, and how it is remembered depends on the rules placed around it.',
              "It will inevitably erode workers' rights everywhere.",
              'It will soon be replaced by a return to traditional jobs.',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph says "the change is not a passing fashion" and that whether it is remembered as liberation or erosion "will depend less on the technology itself than on the rules societies choose to place around it." Option B is correct.',
          },
        ],
      },
    ],
  },
]
