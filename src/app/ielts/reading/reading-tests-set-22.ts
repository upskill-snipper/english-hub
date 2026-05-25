// ─── IELTS Academic Reading - practice item bank (Set 22) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the psychology of
// decision-making / the history of the novel / biomimicry (designs inspired by
// nature).
//
// This test SHOWCASES the Matching question type across all three passages:
// Matching Headings (Passage 1), Matching Features - statements to thinkers
// (Passage 2), and Matching Information / which-paragraph (Passage 3), alongside
// the usual mix of True/False/Not Given, multiple choice and sentence/summary
// completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_22: ReadingTest[] = [
  {
    id: 'rd-academic-022',
    title: 'Academic Reading - Practice Test 22',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-022-p1',
        title: 'The Psychology of Decision-Making',
        body: `We like to think of ourselves as reasonable creatures who weigh the evidence, consider the alternatives and then choose whatever serves us best. For most of the twentieth century, economists built their models on exactly this assumption, picturing an idealised decision-maker who calmly calculates the costs and benefits of every option. The trouble is that real people, when studied in the laboratory, behave nothing like this tidy figure. They are swayed by how a question is worded, by what they happened to see a moment earlier, and by feelings that have nothing to do with the choice in front of them. The study of how humans actually decide, rather than how a perfectly logical being would, has reshaped psychology and economics alike over the past half-century.

A central insight is that the mind relies on two rather different ways of thinking. One is fast, automatic and effortless: it lets us recognise a friend's face, finish the phrase "bread and ...", or jump back from a swerving car without any conscious deliberation. The other is slow, careful and demanding: it is what we use to fill in a tax form or compare two mortgages. The fast system is astonishingly capable and gets us through most of the day, but it leans heavily on rules of thumb, and those shortcuts, useful as they are, can lead us astray in predictable directions. The slow system could in principle correct these errors, but it is lazy and easily tired, and it usually defers to the fast one's first impression.

Consider how readily our judgements are anchored by an arbitrary number. In one classic demonstration, participants were asked to spin a wheel marked with figures from zero to a hundred and then to estimate what percentage of the countries in the United Nations were African. The wheel was secretly rigged to stop on either ten or sixty-five. Those who saw the larger number gave far higher estimates than those who saw the smaller one, even though everyone knew the wheel was a matter of pure chance. The irrelevant figure had quietly pulled their answers toward it. This anchoring effect appears again and again, from the asking price of a house to the first salary mentioned in a negotiation.

Equally striking is the way a choice can be reversed simply by changing its description. People are not neutral about gains and losses: the pain of losing something tends to loom larger than the pleasure of gaining the very same thing. Because of this, a medical treatment described as offering a ninety per cent survival rate sounds far more attractive than the identical treatment described as carrying a ten per cent risk of death, although the two statements are logically the same. This sensitivity to framing means that the way information is presented, often by someone with an interest in the outcome, can steer us without our noticing.

Why should evolution have left us with such a flawed apparatus? The answer is that the shortcuts are not really flaws at all. For most of human history, decisions had to be made quickly and with very little information, and a rule that is right most of the time, at almost no cost in effort, beats a perfect calculation that arrives too late to be useful. The mental shortcuts that misfire in a psychologist's experiment are the same ones that allowed our ancestors to judge in an instant whether a rustle in the grass was the wind or a predator. The errors are the price of a system optimised for speed rather than accuracy.

None of this means we are helplessly irrational. The very fact that our biases are systematic, that they push us in consistent and therefore predictable directions, means they can be anticipated and, to some degree, designed around. A government that wants more people to save for retirement can make enrolment in a pension the default option, so that inertia, which once kept people from saving, now quietly keeps them in the scheme. Doctors can present risks in more than one way to guard against the pull of framing. Understanding the hidden machinery of choice does not free us from it, but it does offer a measure of control, and that may be the most reasonable thing about us after all.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-022-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i-viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Why our mental shortcuts make evolutionary sense' },
              { key: 'ii', label: 'How wording alone can flip a decision' },
              { key: 'iii', label: 'The myth of the perfectly logical chooser' },
              { key: 'iv', label: 'Turning predictable biases to our advantage' },
              { key: 'v', label: 'A meaningless number that bends our estimates' },
              { key: 'vi', label: 'Two systems, one fast and one slow' },
              { key: 'vii', label: 'Why experts always decide better than novices' },
              { key: 'viii', label: 'The case for abolishing pensions' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'vi' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'v' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'ii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'i' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'iv' },
            ],
            explanation:
              'A contrasts the "idealised decision-maker" of economic models with how "real people... behave nothing like this tidy figure" (iii). B introduces the "two rather different ways of thinking", one "fast, automatic" and one "slow, careful" (vi). C describes the rigged wheel whose "irrelevant figure had quietly pulled their answers", i.e. anchoring by a meaningless number (v). D shows a treatment "described as offering a ninety per cent survival rate" versus a "ten per cent risk of death", a choice reversed by wording (ii). E explains that the shortcuts "are not really flaws" but make evolutionary sense for fast decisions (i). F argues that because biases are "systematic" they "can be anticipated and... designed around", e.g. pension defaults (iv). Heading vii ("Why experts always decide better than novices") is a distractor the passage never claims; heading viii ("The case for abolishing pensions") inverts F, which uses pensions as a positive example.',
          },
          {
            id: 'rd-022-p1-q2',
            type: 'tfng',
            prompt:
              'For most of the twentieth century, economists assumed people decide by calmly weighing costs and benefits.',
            answer: 'true',
            explanation:
              'Paragraph A states that "For most of the twentieth century, economists built their models on exactly this assumption, picturing an idealised decision-maker who calmly calculates the costs and benefits of every option." This matches the statement, so it is True.',
          },
          {
            id: 'rd-022-p1-q3',
            type: 'mcq',
            prompt: 'According to the passage, what is true of the slow system of thinking?',
            options: [
              'It operates automatically and without conscious effort.',
              'It is lazy and usually accepts the fast system’s first impression.',
              'It is the system we use to recognise a friend’s face.',
              'It is incapable of correcting the errors of the fast system.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says the slow system "could in principle correct these errors, but it is lazy and easily tired, and it usually defers to the fast one\'s first impression." Option B captures this. Recognising a face and acting effortlessly belong to the fast system, and the text says the slow system *could* correct errors, ruling out the others.',
          },
          {
            id: 'rd-022-p1-q4',
            type: 'tfng',
            prompt:
              'In the wheel experiment, participants were told that the spinning wheel would help them work out the correct answer.',
            answer: 'false',
            explanation:
              'Paragraph C states that "everyone knew the wheel was a matter of pure chance"; the number it landed on was irrelevant to the question. The claim that they were told it would help them find the correct answer contradicts the passage, so it is False.',
          },
          {
            id: 'rd-022-p1-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The pull of an arbitrary number on people’s estimates is known as the _______ effect.',
            acceptableAnswers: ['anchoring'],
            explanation:
              'Paragraph C concludes that "This anchoring effect appears again and again, from the asking price of a house to the first salary mentioned in a negotiation." The required word is "anchoring".',
          },
          {
            id: 'rd-022-p1-q6',
            type: 'mcq',
            prompt:
              'Why does a treatment described as having a "ninety per cent survival rate" sound more attractive than one with a "ten per cent risk of death"?',
            options: [
              'Because the survival rate is in fact higher in the first description',
              'Because the pain of a loss tends to feel larger than the pleasure of an equal gain',
              'Because patients rarely understand percentages',
              'Because doctors prefer to describe treatments in positive terms',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D explains that "the pain of losing something tends to loom larger than the pleasure of gaining the very same thing", which is why the survival framing seems better even though "the two statements are logically the same." Option B reflects this; the descriptions are explicitly identical, ruling out A.',
          },
          {
            id: 'rd-022-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: The mental shortcuts are the price of a system optimised for _______ rather than accuracy.',
            acceptableAnswers: ['speed'],
            explanation:
              'Paragraph E states that "The errors are the price of a system optimised for speed rather than accuracy." The missing word is "speed".',
          },
          {
            id: 'rd-022-p1-q8',
            type: 'tfng',
            prompt:
              'The passage argues that because our biases are systematic, they can be anticipated and planned for.',
            answer: 'true',
            explanation:
              'Paragraph F states that "our biases are systematic, that they push us in consistent and therefore predictable directions, means they can be anticipated and, to some degree, designed around." This supports the statement, so it is True.',
          },
          {
            id: 'rd-022-p1-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To encourage saving, a government can make joining a pension the _______ option, so that inertia keeps people in the scheme.',
            acceptableAnswers: ['default'],
            explanation:
              'Paragraph F says a government "can make enrolment in a pension the default option, so that inertia... now quietly keeps them in the scheme." The required word is "default".',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-022-p2',
        title: 'The Rise of the Novel',
        body: `The novel feels so natural a form today that it is easy to forget how recent and how strange an invention it was. Long prose narratives existed in the ancient and medieval worlds, but the novel as we now understand it - a lengthy fictional story about ordinary, believable people moving through a recognisable everyday world - took shape only in the seventeenth and eighteenth centuries, and its arrival was greeted with as much suspicion as delight. Part of the difficulty is simply one of definition, for no single feature neatly separates a novel from the epics, fables and romances that came before it. Scholars still argue about where and when it truly began, and several thinkers have offered competing accounts of how this most familiar of literary forms came to be.

The literary historian Margaret Doody insists that the novel is far older than the conventional story allows. She traces a continuous tradition of long fictional prose back to the romances of the ancient Greek and Roman world, stories of lovers separated by shipwreck and reunited after many trials, and argues that the supposedly modern novel simply revived and refined a form that had never wholly disappeared. To call the novel an invention of recent centuries, in her view, is to ignore two thousand years of storytelling that share its essential features.

A very different emphasis comes from the critic Ian Watt, who is associated with the claim that the novel was something genuinely new, born in eighteenth-century England. For Watt, what distinguishes the novel from earlier romance is its commitment to particular individuals in specific times and places, rather than to types and timeless adventures. He links this new realism to the rise of a prosperous middle class with the leisure to read and an appetite for stories about people like themselves, and to a broader philosophical confidence that truth could be discovered through individual experience rather than received from tradition.

The economic dimension that Watt touches on is developed more fully by the book historian Lucien Febvre, who directs attention away from authors and toward the machinery of publishing. The spread of the novel, on this account, owed less to literary genius than to the falling cost of printing, the growth of commercial lending libraries that let readers borrow a book for a small fee, and the emergence of publishers willing to pay writers for their work. A new literary form, Febvre reminds us, also requires a new economic system capable of producing and distributing it cheaply enough to reach a wide public.

These approaches are not as opposed as they first appear, and a fourth scholar, the comparative critic Franco Moretti, has tried to hold them together by studying the novel not as a sequence of masterpieces but as a mass of thousands of forgotten titles. By counting and mapping rather than close reading, Moretti shows how particular kinds of novel rose and fell in popularity like biological species, flourishing for a generation before being displaced. A type of story that gripped one decade of readers, he notes, could seem hopelessly old-fashioned to the next, swept aside by a newer fashion in much the way a species is outcompeted. The famous works that survive in the classroom, he argues, are a tiny and unrepresentative sample, and to understand the form we must look at the enormous bulk of ordinary books that readers actually consumed and then forgot.

Whatever its origins, the early novel had to fight for respectability. Conservative critics warned that these long, absorbing tales of invented people would corrupt the young, fill idle heads with unrealistic expectations and lure readers, especially women, away from more improving books. The very qualities that made the novel popular - its emotional immediacy and its capacity to make a reader inhabit another life - were precisely what its opponents feared. That anxiety now seems quaint, but it is a reminder that no dominant form arrives without resistance. Much the same alarm would later greet the cinema, the comic and the video game, each accused in its turn of rotting young minds and each eventually absorbed into respectable culture. The novel won its place not by permission but by sheer popularity, and in doing so it changed what readers expected a story to be.`,
        questions: [
          // ── Matching Features - statements to thinkers (5 items) = 5 marks ──
          {
            id: 'rd-022-p2-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of thinkers below. Match each statement to the person who expresses that view in the passage. Write the correct letter, A, B, C or D. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Margaret Doody' },
              { key: 'B', label: 'Ian Watt' },
              { key: 'C', label: 'Lucien Febvre' },
              { key: 'D', label: 'Franco Moretti' },
            ],
            items: [
              {
                id: 'p2-f-1',
                text: 'The novel is best understood by examining the thousands of forgotten books rather than a few classics.',
                answer: 'D',
              },
              {
                id: 'p2-f-2',
                text: 'The spread of the novel depended on cheaper printing and commercial lending libraries.',
                answer: 'C',
              },
              {
                id: 'p2-f-3',
                text: 'The novel is far older than the usual account suggests, reaching back to ancient romances.',
                answer: 'A',
              },
              {
                id: 'p2-f-4',
                text: 'What sets the novel apart is its focus on particular individuals in specific times and places.',
                answer: 'B',
              },
              {
                id: 'p2-f-5',
                text: 'Different kinds of novel rose and fell in popularity much like biological species.',
                answer: 'D',
              },
            ],
            explanation:
              'Item 1 → D (Moretti), who studies the novel "as a mass of thousands of forgotten titles" and warns the surviving classics are "a tiny and unrepresentative sample." Item 2 → C (Febvre): the spread "owed less to literary genius than to the falling cost of printing" and "commercial lending libraries." Item 3 → A (Doody), who "traces a continuous tradition of long fictional prose back to the romances of the ancient Greek and Roman world." Item 4 → B (Watt), for whom the novel shows "commitment to particular individuals in specific times and places." Item 5 → D (Moretti) again: kinds of novel "rose and fell in popularity like biological species."',
          },
          {
            id: 'rd-022-p2-q2',
            type: 'tfng',
            prompt:
              'The passage states that long prose narratives did not exist before the seventeenth century.',
            answer: 'false',
            explanation:
              'Paragraph A explicitly says "Long prose narratives existed in the ancient and medieval worlds", though the modern novel took shape later. The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-022-p2-q3',
            type: 'tfng',
            prompt: 'Scholars now agree precisely on where and when the novel first began.',
            answer: 'false',
            explanation:
              'Paragraph A states that "Scholars still argue about where and when it truly began", and the passage then presents several competing accounts. The claim of agreement contradicts the text, so it is False.',
          },
          {
            id: 'rd-022-p2-q4',
            type: 'mcq',
            prompt:
              'According to the passage, what does Ian Watt link the new realism of the novel to?',
            options: [
              'The survival of ancient Greek and Roman romances',
              'The rise of a prosperous middle class with the leisure to read',
              'The counting and mapping of thousands of forgotten titles',
              'The warnings of conservative critics about idle readers',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says Watt "links this new realism to the rise of a prosperous middle class with the leisure to read and an appetite for stories about people like themselves." Option B matches; the other options belong to Doody, Moretti and the critics respectively.',
          },
          {
            id: 'rd-022-p2-q5',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Febvre points out that the growth of commercial lending _______ let readers borrow a book for a small fee.',
            acceptableAnswers: ['libraries'],
            explanation:
              'Paragraph D refers to "the growth of commercial lending libraries that let readers borrow a book for a small fee." The required word is "libraries".',
          },
          {
            id: 'rd-022-p2-q6',
            type: 'mcq',
            prompt:
              'What is Moretti’s main argument about the famous novels studied in classrooms?',
            options: [
              'They are the only novels worth reading closely.',
              'They are a tiny and unrepresentative sample of what readers consumed.',
              'They prove the novel began in eighteenth-century England.',
              'They were the cheapest books that publishers could produce.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E states that, for Moretti, "The famous works that survive in the classroom... are a tiny and unrepresentative sample", and that we must study "the enormous bulk of ordinary books." Option B captures this.',
          },
          {
            id: 'rd-022-p2-q7',
            type: 'tfng',
            prompt:
              'The passage says that the early novel was immediately accepted as a respectable literary form.',
            answer: 'false',
            explanation:
              'Paragraph F says "the early novel had to fight for respectability" and that conservative critics "warned that these long, absorbing tales... would corrupt the young." This contradicts the idea of immediate acceptance, so it is False.',
          },
          {
            id: 'rd-022-p2-q8',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Critics feared the novel would lure readers, especially _______, away from more improving books.',
            acceptableAnswers: ['women'],
            explanation:
              'Paragraph F states the novel might "lure readers, especially women, away from more improving books." The required word is "women".',
          },
          {
            id: 'rd-022-p2-q9',
            type: 'tfng',
            prompt:
              'Margaret Doody was the most influential of the four thinkers discussed in the passage.',
            answer: 'not-given',
            explanation:
              "The passage presents Doody's view that the novel is ancient, but it never compares the influence of the four thinkers or ranks any of them. There is no information about who was most influential, so the answer is Not Given.",
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-022-p3',
        title: 'Learning from Nature: The Promise of Biomimicry',
        body: `Nature has been running experiments for almost four billion years, discarding designs that fail and refining those that work. Faced with the same problems that confront human engineers - how to stay cool, move efficiently, stick to a surface or build a strong structure from weak materials - living things have arrived at solutions of remarkable elegance. Biomimicry, the practice of studying these natural designs and adapting their underlying principles to human technology, treats the living world not as a storehouse of raw materials to be consumed but as a library of tested ideas to be learned from. It is an old impulse given a new name and a new rigour. Inventors have always glanced sideways at the living world, but recent decades have brought the tools to read its solutions in fine molecular detail, and with them a more systematic effort to translate biology into engineering.

The textbook example involves a fast Japanese train. When its engineers found that their high-speed train produced a thunderous boom each time it burst from a tunnel, they turned, perhaps surprisingly, to a bird. The kingfisher dives from air into water, a far denser medium, with scarcely a splash, and the secret lies in the long, tapered shape of its beak, which parts the water smoothly rather than pushing a wall of it ahead. Engineers reshaped the nose of the train to imitate that profile. The redesigned train was not only quieter but also faster and used less electricity, a reminder that a good natural solution often solves several problems at once.

Some of the most valuable lessons concern not shape but materials. The abalone, a humble sea snail, builds a shell whose inner layer is twice as tough as any ceramic engineers can manufacture, yet it does so in cold seawater without furnaces or harsh chemicals. The toughness comes not from any exotic substance - the shell is mostly ordinary chalk - but from its architecture: microscopic tiles of mineral are stacked like bricks and glued with a thin layer of protein, so that a crack trying to spread is repeatedly deflected and loses its energy. Materials scientists who once chased ever more exotic ingredients are increasingly studying this principle, in which clever structure, rather than rare matter, delivers strength.

Other researchers have been captivated by the question of how a gecko walks up a pane of glass. For a long time it was assumed that the lizard must secrete some kind of glue, but the truth proved stranger and more useful. The toe of a gecko is covered in millions of microscopic hairs, each splitting into still finer tips, and these make such intimate contact with a surface that faint molecular forces, individually negligible, add up to a powerful grip. Because the mechanism is purely physical, the foot leaves no residue and can be peeled away effortlessly and reused. The dream of a dry adhesive that grips like tape but never wears out has inspired a generation of laboratories.

Plants, too, have proved instructive. The leaves of the lotus stay clean in the muddiest of ponds, and the reason was once a mystery. Their surface, it turns out, is not smooth but covered in tiny bumps coated in a waxy film, so that water cannot wet it but instead forms beads that roll off, carrying dirt away as they go. This self-cleaning trick has been copied in paints and fabrics that shrug off water and stay clean with little washing. The same passage of water that frustrates a gardener cleans the lotus automatically.

For all its appeal, biomimicry is harder than the success stories suggest, and its enthusiasts can promise too much. Nature's designs are tuned to nature's conditions, and a structure that serves a snail in cool seawater may be impossible to manufacture at the scale, speed and temperature a factory requires. Evolution, moreover, does not aim at perfection; it settles for whatever is good enough to survive and reproduce, so a natural design is not always the best imaginable answer to an engineering problem. Translating a principle also takes patient years of work in the laboratory, and many promising imitations never leave it, defeated by the gap between what is elegant in a creature and what is affordable in a factory. The wiser advocates therefore present biomimicry not as a magic shortcut but as a vast source of hints. The value of the natural world, on this view, lies less in any single design to be copied than in the deeper principles that four billion years of trial and error have quietly worked out.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-022-p3-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has six paragraphs, A-F. Which paragraph contains the following information? Write the correct letter, A-F. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
            options: [
              { key: 'A', label: 'Paragraph A' },
              { key: 'B', label: 'Paragraph B' },
              { key: 'C', label: 'Paragraph C' },
              { key: 'D', label: 'Paragraph D' },
              { key: 'E', label: 'Paragraph E' },
              { key: 'F', label: 'Paragraph F' },
            ],
            items: [
              {
                id: 'p3-i-1',
                text: 'a warning that evolution settles for what is good enough rather than what is perfect',
                answer: 'F',
              },
              {
                id: 'p3-i-2',
                text: 'a description of a creature whose grip relies on faint molecular forces rather than glue',
                answer: 'D',
              },
              {
                id: 'p3-i-3',
                text: 'a definition of biomimicry as learning from nature’s tested designs',
                answer: 'A',
              },
              {
                id: 'p3-i-4',
                text: 'an example of a redesign inspired by a bird that solved more than one problem at once',
                answer: 'B',
              },
              {
                id: 'p3-i-5',
                text: 'an explanation of how a shell gains its toughness from structure rather than rare materials',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1 → F: "Evolution... does not aim at perfection; it settles for whatever is good enough to survive and reproduce." Item 2 → D, the gecko, whose grip comes from "faint molecular forces" rather than the glue once assumed. Item 3 → A, which defines biomimicry as treating the living world "as a library of tested ideas to be learned from." Item 4 → B, the kingfisher-inspired train that was "quieter but also faster and used less electricity" - solving "several problems at once." Item 5 → C, the abalone shell whose toughness "comes not from any exotic substance... but from its architecture."',
          },
          {
            id: 'rd-022-p3-q2',
            type: 'tfng',
            prompt:
              'Biomimicry treats the living world mainly as a source of raw materials to be consumed.',
            answer: 'false',
            explanation:
              'Paragraph A states that biomimicry treats the living world "not as a storehouse of raw materials to be consumed but as a library of tested ideas to be learned from." The statement reverses this, so it is False.',
          },
          {
            id: 'rd-022-p3-q3',
            type: 'mcq',
            prompt: 'Why did engineers study the kingfisher when redesigning the high-speed train?',
            options: [
              'The bird’s feathers reduce noise as it flies through the air.',
              'The bird’s beak parts the water smoothly when it dives, with scarcely a splash.',
              'The bird can travel at extremely high speeds over long distances.',
              'The bird’s wings allowed engineers to make the train lighter.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B explains that the kingfisher "dives from air into water... with scarcely a splash, and the secret lies in the long, tapered shape of its beak, which parts the water smoothly", which engineers imitated in the train\'s nose. Option B is correct.',
          },
          {
            id: 'rd-022-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The tough inner layer of the abalone shell is made mostly of ordinary _______, yet it is twice as tough as manufactured ceramic.',
            acceptableAnswers: ['chalk'],
            explanation:
              'Paragraph C states that "the shell is mostly ordinary chalk" and that its toughness comes from its architecture. The required word is "chalk".',
          },
          {
            id: 'rd-022-p3-q5',
            type: 'mcq',
            prompt:
              'According to the passage, how does a gecko grip a smooth surface such as glass?',
            options: [
              'It secretes a sticky glue from its toes.',
              'Millions of microscopic hairs create faint molecular forces that add up to a strong grip.',
              'Its toes form a vacuum that holds it to the surface.',
              'It uses tiny claws that hook into the surface.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph D says the gecko\'s toe "is covered in millions of microscopic hairs" so that "faint molecular forces, individually negligible, add up to a powerful grip", and explicitly rejects the earlier assumption of glue. Option B is correct.',
          },
          {
            id: 'rd-022-p3-q6',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Because a gecko’s grip is purely physical, its foot leaves no _______ and can be peeled away and reused.',
            acceptableAnswers: ['residue'],
            explanation:
              'Paragraph D states that "the foot leaves no residue and can be peeled away effortlessly and reused." The required word is "residue".',
          },
          {
            id: 'rd-022-p3-q7',
            type: 'tfng',
            prompt:
              'The self-cleaning effect of the lotus leaf has been imitated in paints and fabrics.',
            answer: 'true',
            explanation:
              'Paragraph E states that the lotus\'s "self-cleaning trick has been copied in paints and fabrics that shrug off water and stay clean with little washing." This matches the statement, so it is True.',
          },
          {
            id: 'rd-022-p3-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The lotus leaf stays clean because its surface is covered in tiny bumps coated in a _______ film that water cannot wet.',
            acceptableAnswers: ['waxy'],
            explanation:
              'Paragraph E explains that the surface is "covered in tiny bumps coated in a waxy film, so that water cannot wet it." The required word is "waxy".',
          },
          {
            id: 'rd-022-p3-q9',
            type: 'mcq',
            prompt: 'What does the writer conclude about biomimicry in the final paragraph?',
            options: [
              'It is a magic shortcut that solves engineering problems instantly.',
              'It is most valuable as a source of deeper principles rather than designs simply to be copied.',
              'It has failed to produce any useful technology so far.',
              'Natural designs are always the best possible answer to an engineering problem.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F says "wiser advocates... present biomimicry not as a magic shortcut but as a vast source of hints", and that its value "lies less in any single design to be copied than in the deeper principles." Option B matches. The text explicitly denies the "magic shortcut" and "best imaginable answer" claims, ruling out A and D.',
          },
        ],
      },
    ],
  },
]
