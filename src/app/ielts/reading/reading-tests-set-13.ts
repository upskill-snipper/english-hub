// ─── IELTS Academic Reading - practice item bank (Set 13) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (Matching
// Headings / Features / Sentence Endings, MCQ, True/False/Not Given, and
// sentence/summary completion). They are NOT reproductions of any official IELTS
// past paper, and no official affiliation is implied. Academic track. Topic
// domains: the science of sound and acoustics / the history of paper money /
// how habits form and change.
//
// One complete, carefully-checked test: 3 passages, 40 marks. Every answer is
// verifiable from the passage text and is justified in the explanation. Each
// matching item is worth one mark, and every item.answer equals one option.key.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_13: ReadingTest[] = [
  {
    id: 'rd-academic-013',
    title: 'Academic Reading - Practice Test 13',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-013-p1',
        title: 'The Architecture of Sound',
        body: `A sound begins as a disturbance. When a guitar string is plucked or a hand claps, the moving object pushes against the air beside it, squeezing the molecules together into a thin band of high pressure. That band cannot stay still: it shoves the molecules in front of it and then springs back, leaving a region of low pressure behind. The pattern of squeeze and release ripples outward in every direction, and although the air itself scarcely travels, the disturbance racing through it does. This travelling pattern of changing pressure is what we call a sound wave, and it is the only thing that ever reaches the ear.

The character of a sound depends on the shape of this wave. How often the pressure rises and falls each second is its frequency, which the brain interprets as pitch: a rapid succession of pulses is heard as a high note, a slow one as a low rumble. The size of each pressure change is its amplitude, which we perceive as loudness. A young human ear can register frequencies from roughly twenty pulses a second up to twenty thousand, but the upper limit falls steadily with age, which is why some adults cannot hear the shrill whine that troubles children.

Speed is the next surprise. Sound is far slower than light, crawling through air at about three hundred and forty metres a second, a fact made vivid every time a distant flash of lightning is followed, seconds later, by its thunder. The medium matters greatly. Because the molecules of a liquid or a solid are packed more closely than those of a gas, a disturbance passes between them more readily, and sound consequently travels several times faster through water, and faster still through steel, than it does through the air. In the vacuum of space, where there are no molecules to jostle, sound cannot travel at all; the explosions of films are a convenient fiction.

When a wave meets a boundary it does not simply stop. Part of its energy bounces back as a reflection, which we hear as an echo if the surface is distant enough for the returning sound to arrive after a noticeable delay. The rest of the energy may be absorbed, its orderly motion scattered into faint heat within the material. Hard, smooth surfaces such as stone and glass reflect sound efficiently and absorb little; soft, porous materials such as curtains, carpet and foam do the reverse, swallowing much of the energy that strikes them. This single contrast lies at the heart of how rooms are made to sound the way they do.

Reflection has a cumulative effect that engineers call reverberation: the lingering wash of sound that persists in a space after its source has fallen silent, as a single utterance bounces repeatedly between the walls before it finally fades. A modest amount of reverberation enriches music and makes a voice sound warm and full. Too much, however, smears one syllable into the next until speech becomes an unintelligible blur, the familiar difficulty of a tiled swimming pool or an empty hall. The time a sound takes to die away is therefore one of the most important measurements in the design of any room intended for listening.

This is the province of acoustics, the science of shaping sound through architecture, and it demands a careful balance rather than the elimination of reflection altogether. A concert hall built for a symphony orchestra is deliberately allowed a long, generous reverberation so that the music swells and blends; the same quality in a lecture theatre would render the speaker incomprehensible. Designers achieve the effect they want by choosing materials and shapes with deliberate care, scattering hard reflecting panels and soft absorbing ones across walls and ceilings, and angling surfaces so that the returning sound is spread evenly rather than focused into a single harsh point.

The most extreme creation of the acoustician is a room designed to have no echo at all. Known as an anechoic chamber, its walls, floor and ceiling are lined with thousands of foam wedges that trap virtually every wave that strikes them, so that almost no sound is reflected back. The silence inside is so complete that visitors report hearing the beating of their own hearts and the rush of blood in their ears, and many find the experience deeply unsettling. Such chambers are used to test machinery and audio equipment under conditions impossible to find in the ordinary world, where some surface is always quietly throwing sound back at us.`,
        questions: [
          {
            id: 'rd-013-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage is organised in paragraphs. Choose the most suitable heading from the list below for each of the FIVE paragraphs described. There are more headings than paragraphs, so you will not use them all. Write the correct number for each paragraph.',
            options: [
              { key: 'i', label: 'A room built to give nothing back' },
              { key: 'ii', label: 'How a movement in the air becomes a travelling wave' },
              { key: 'iii', label: 'Why the speed of a sound depends on what it passes through' },
              { key: 'iv', label: 'The instruments of a modern orchestra' },
              { key: 'v', label: 'Balancing reflection to suit the purpose of a space' },
              { key: 'vi', label: 'What bouncing and soaking up sound depend on' },
              { key: 'vii', label: 'How loud a sound must be before it damages hearing' },
            ],
            items: [
              {
                id: 'rd-013-p1-q1-a',
                text: 'Paragraph 1 (opening: "A sound begins as a disturbance…")',
                answer: 'ii',
              },
              {
                id: 'rd-013-p1-q1-b',
                text: 'Paragraph 3 ("Speed is the next surprise…")',
                answer: 'iii',
              },
              {
                id: 'rd-013-p1-q1-c',
                text: 'Paragraph 4 ("When a wave meets a boundary…")',
                answer: 'vi',
              },
              {
                id: 'rd-013-p1-q1-d',
                text: 'Paragraph 6 ("This is the province of acoustics…")',
                answer: 'v',
              },
              {
                id: 'rd-013-p1-q1-e',
                text: 'Paragraph 7 ("The most extreme creation of the acoustician…")',
                answer: 'i',
              },
            ],
            explanation:
              'Paragraph 1 describes how a vibrating object squeezes the air into a pattern that ripples outward as a wave (ii). Paragraph 3 explains that the speed of sound depends on the medium it travels through (iii). Paragraph 4 contrasts reflection and absorption - what bouncing and soaking up sound depend on (vi). Paragraph 6 says acoustics "demands a careful balance" of reflection to suit a hall or a lecture theatre (v). Paragraph 7 describes the anechoic chamber, a room that gives almost nothing back (i). Headings iv and vii are distractors not matching any paragraph.',
          },
          {
            id: 'rd-013-p1-q2',
            type: 'tfng',
            prompt: 'When a sound wave travels, the air itself moves a long distance with it.',
            answer: 'false',
            explanation:
              'The first paragraph states that "although the air itself scarcely travels, the disturbance racing through it does." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-013-p1-q3',
            type: 'tfng',
            prompt:
              'The ability to hear very high frequencies tends to decline as people grow older.',
            answer: 'true',
            explanation:
              'The second paragraph says the upper limit of hearing "falls steadily with age, which is why some adults cannot hear the shrill whine that troubles children." This matches the statement, so it is True.',
          },
          {
            id: 'rd-013-p1-q4',
            type: 'tfng',
            prompt: 'Sound travels faster through steel than it does through water.',
            answer: 'true',
            explanation:
              'The third paragraph states that sound travels "several times faster through water, and faster still through steel, than it does through the air." "Faster still through steel" means faster than through water, so the statement is True.',
          },
          {
            id: 'rd-013-p1-q5',
            type: 'tfng',
            prompt:
              'Anechoic chambers are the most expensive type of room that acoustic engineers build.',
            answer: 'not-given',
            explanation:
              'The final paragraph describes the anechoic chamber as the most "extreme" creation and explains its purpose, but it says nothing about cost or which rooms are most expensive. There is no information about this, so the answer is Not Given.',
          },
          {
            id: 'rd-013-p1-q6',
            type: 'mcq',
            prompt: 'According to the passage, what does the frequency of a sound wave determine?',
            options: [
              'How loud the sound is perceived to be',
              'The pitch of the sound - how high or low it seems',
              'How far the sound is able to travel',
              'Whether the sound can pass through a solid',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph states that frequency is "what the brain interprets as pitch," with rapid pulses heard as a high note and slow ones as a low rumble. Loudness is governed by amplitude, not frequency, so Option B is correct.',
          },
          {
            id: 'rd-013-p1-q7',
            type: 'mcq',
            prompt: 'Why does a small amount of reverberation matter in a room used for music?',
            options: [
              'It prevents the air inside the room from heating up.',
              'It blocks unwanted noise from entering the room.',
              'It enriches the music and makes a voice sound warm and full.',
              'It allows the sound to escape the room more quickly.',
            ],
            correctIndex: 2,
            explanation:
              'The fifth paragraph states that "a modest amount of reverberation enriches music and makes a voice sound warm and full," while too much smears speech into a blur. Option C is correct.',
          },
          {
            id: 'rd-013-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The size of each pressure change is its amplitude, which we perceive as _______.',
            acceptableAnswers: ['loudness'],
            explanation:
              'The second paragraph states that amplitude is "the size of each pressure change... which we perceive as loudness." The required word is "loudness".',
          },
          {
            id: 'rd-013-p1-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Hard, smooth surfaces reflect sound efficiently, while soft, _______ materials such as carpet and foam swallow much of the energy that strikes them.',
            acceptableAnswers: ['porous'],
            explanation:
              'The fourth paragraph contrasts hard, smooth surfaces with "soft, porous materials such as curtains, carpet and foam" that absorb sound. The required word is "porous".',
          },
        ],
      },
      {
        id: 'rd-academic-013-p2',
        title: 'Promises on Paper',
        body: `For most of recorded history, money meant metal. Coins of gold, silver and bronze had an obvious appeal: the metal was scarce, durable and valued in its own right, so a coin was worth roughly the substance it contained. Yet metal money carried serious drawbacks. Large sums were heavy and dangerous to transport, mines could not always supply enough precious metal to match a growing economy, and a merchant settling a distant debt faced the risk of robbery on every mile of the road. The history of paper money is, in large part, the story of attempts to escape these inconveniences.

The decisive innovations occurred in China. By the early centuries of the second millennium, merchants in the south-western province of Sichuan, burdened by the weight of the iron coinage then in local use, had begun depositing their cash with trusted establishments and accepting handwritten receipts in return. These receipts could be passed from hand to hand and redeemed for the coins they represented, and so a piece of paper came to stand in for the metal it named. The convenience was immense, and the practice spread. In time the imperial government took control of the system and began issuing the notes itself, producing what is generally regarded as the world's first true government paper currency.

The crucial conceptual leap was the idea that the paper need not be valuable in itself. A banknote was, at bottom, a promise - an undertaking that the holder could exchange the note for a fixed quantity of metal on demand. So long as people believed the promise would be honoured, the note circulated as readily as the coins behind it, and far more conveniently. This trust was the foundation on which the whole edifice rested. Where it held firm, paper money lubricated trade as metal never could; where it failed, the notes became worthless scraps overnight.

That fragility revealed itself with depressing regularity. Because notes were so much cheaper to produce than coins were to mine, the temptation to print more of them, particularly to meet the costs of war, proved difficult for governments to resist. When the quantity of paper raced ahead of the goods and metal that supposedly backed it, prices climbed and the value of each note shrank, a process we now call inflation. Several early Chinese experiments collapsed in exactly this way, and the resulting disorder was severe enough that the authorities eventually abandoned paper currency for a time and returned to metal.

Europe came to the idea far later and by a different route. Travellers had brought back astonished descriptions of the Chinese notes, but it was the goldsmiths of seventeenth-century London who supplied the practical model. Possessing strong vaults, they had taken to storing other people's gold for safe keeping and issuing written receipts for the deposits. They soon noticed that depositors rarely reclaimed all their gold at once, and that the receipts themselves were circulating as money. From this observation grew a momentous and risky practice: the goldsmiths began lending out receipts for more gold than they actually held, confident that not everyone would demand repayment simultaneously. This was the seed of modern banking, and it multiplied the money available for trade - but it also meant that a sudden rush of depositors all wanting their gold at once could ruin a lender, an event known as a run.

For two centuries the value of a banknote remained, in principle, anchored to metal, and the most famous expression of this link was the gold standard, under which a currency could be exchanged for a fixed weight of gold. The arrangement imposed a useful discipline, for a government could not print more notes than its reserves of gold would support. Yet the same discipline became a cage in times of crisis, when a state needed to spend freely and its supply of gold would not stretch. Under the immense financial strain of the twentieth century's wars and economic shocks, one country after another cut the link, until eventually no major currency could be exchanged for gold at all.

What remains is money of a wholly different nature. Modern notes are described as fiat currency, from the Latin for "let it be done": they are legal tender by government decree, backed not by any commodity but solely by confidence in the issuing state and its central bank. Such a system grants governments great flexibility, but it places the entire weight of a currency's value on the careful management of its supply, for nothing now stands behind the paper except trust. In this sense the modern economy has returned to the very principle the Sichuan merchants stumbled upon a thousand years ago - that money, in the end, is a promise people agree to believe.`,
        questions: [
          {
            id: 'rd-013-p2-q10',
            type: 'tfng',
            prompt:
              'A gold or silver coin was worth approximately the value of the metal it contained.',
            answer: 'true',
            explanation:
              'The first paragraph states that the metal "was valued in its own right, so a coin was worth roughly the substance it contained." This matches the statement, so it is True.',
          },
          {
            id: 'rd-013-p2-q11',
            type: 'tfng',
            prompt: 'The first government-issued paper money in the world appeared in Europe.',
            answer: 'false',
            explanation:
              'The second paragraph states that the imperial government in China began issuing notes, "producing what is generally regarded as the world\'s first true government paper currency," and the fifth paragraph says Europe "came to the idea far later." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-013-p2-q12',
            type: 'tfng',
            prompt:
              'The merchants of Sichuan first used paper receipts because the iron coins they used were heavy.',
            answer: 'true',
            explanation:
              'The second paragraph says merchants in Sichuan were "burdened by the weight of the iron coinage then in local use" and so began using receipts instead. This supports the statement, so it is True.',
          },
          {
            id: 'rd-013-p2-q13',
            type: 'tfng',
            prompt: 'The Chinese government printed too much paper money mainly to fund education.',
            answer: 'not-given',
            explanation:
              'The fourth paragraph says the temptation to print more notes was strong "particularly to meet the costs of war," but it makes no mention of education as a reason. There is no information supporting the statement, so the answer is Not Given.',
          },
          {
            id: 'rd-013-p2-q14',
            type: 'tfng',
            prompt:
              'Under the gold standard, governments were free to print as many notes as they wished.',
            answer: 'false',
            explanation:
              'The sixth paragraph states the gold standard "imposed a useful discipline, for a government could not print more notes than its reserves of gold would support." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-013-p2-q15',
            type: 'mcq',
            prompt:
              'According to the passage, what was the "crucial conceptual leap" behind paper money?',
            options: [
              'The discovery that paper was cheaper to make than coins',
              'The idea that the paper itself need not be valuable, but stood for a promise',
              'The invention of stronger vaults in which to store gold',
              'The decision to make notes legal tender by decree',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph states that "the crucial conceptual leap was the idea that the paper need not be valuable in itself" - a banknote was "a promise" to exchange it for metal. Option B is correct.',
          },
          {
            id: 'rd-013-p2-q16',
            type: 'mcq',
            prompt: 'What does the passage identify as the cause of a bank "run"?',
            options: [
              'A government printing more notes than its gold reserves allow',
              'A sudden rise in the price of gold on world markets',
              'Many depositors demanding their gold back at the same time',
              'Goldsmiths refusing to issue any further receipts',
            ],
            correctIndex: 2,
            explanation:
              'The fifth paragraph explains that because goldsmiths lent out receipts for more gold than they held, "a sudden rush of depositors all wanting their gold at once could ruin a lender, an event known as a run." Option C is correct.',
          },
          {
            id: 'rd-013-p2-q17',
            type: 'mcq',
            prompt: 'What does the passage suggest is the source of value of modern fiat currency?',
            options: [
              'A fixed quantity of gold held by the central bank',
              'The precious metal contained in the notes themselves',
              'Confidence in the issuing state and the management of the money supply',
              'International agreements that fix exchange rates between countries',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph states that fiat currency is "backed not by any commodity but solely by confidence in the issuing state and its central bank," and that its value rests on "the careful management of its supply." Option C is correct.',
          },
          {
            id: 'rd-013-p2-q18',
            type: 'matching',
            variant: 'features',
            prompt:
              'Match each event or development (1-5) with the place it is associated with in the passage (A-C). NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'China' },
              { key: 'B', label: 'London / England' },
              { key: 'C', label: 'Sichuan specifically' },
            ],
            items: [
              {
                id: 'rd-013-p2-q18-1',
                text: 'Goldsmiths began lending out receipts for more gold than they actually held.',
                answer: 'B',
              },
              {
                id: 'rd-013-p2-q18-2',
                text: 'Merchants first deposited heavy iron coins and accepted handwritten receipts in return.',
                answer: 'C',
              },
              {
                id: 'rd-013-p2-q18-3',
                text: 'An imperial government took over the system and issued the notes itself.',
                answer: 'A',
              },
              {
                id: 'rd-013-p2-q18-4',
                text: 'The authorities abandoned paper currency for a time and returned to metal.',
                answer: 'A',
              },
              {
                id: 'rd-013-p2-q18-5',
                text: 'The practical model for European banking emerged from those who stored gold in strong vaults.',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1: the fifth paragraph places the goldsmiths who over-lent receipts in seventeenth-century London (B). Item 2: the second paragraph locates the first deposit-and-receipt practice among merchants in Sichuan (C). Item 3: the second paragraph says "the imperial government" of China issued the notes itself (A). Item 4: the fourth paragraph says "the authorities" in China abandoned paper currency and returned to metal (A). Item 5: the fifth paragraph credits the goldsmiths of London with the practical model (B).',
          },
        ],
      },
      {
        id: 'rd-academic-013-p3',
        title: 'The Grooves of the Mind',
        body: `Consider how much of an ordinary day passes without conscious thought. A person rises, reaches for the toothbrush, follows the same route to work, and switches on a familiar machine, performing each act so automatically that the mind is free to wander elsewhere. These are habits: behaviours that have been repeated so often that they no longer require deliberate decision. Far from being a sign of laziness, this automation is one of the brain's most valuable economies. The conscious mind is a slow and effortful instrument, easily exhausted, and by handing routine actions over to automatic control it conserves its limited energy for the genuinely new.

Psychologists who study this process describe most habits as following a simple three-part structure. First comes a cue, a trigger that the brain learns to associate with a particular response - a time of day, a place, an emotional state, or the action that immediately precedes it. The cue prompts a routine, the behaviour itself, which in turn delivers a reward, some outcome the brain finds satisfying. Crucially, the brain remembers the connection, so that the next time the cue appears it anticipates the reward and the routine follows with less and less thought. Repeated often enough, this loop wears a kind of groove into behaviour, and the action becomes a habit.

The reward is the engine of the whole arrangement, but its role is more subtle than it first appears. Researchers have found that as a habit takes hold, the spike of pleasure in the brain shifts backwards in time. At first the satisfaction arrives with the reward itself; later it arrives at the moment the cue is noticed, in eager anticipation of the reward to come. This anticipation is experienced as craving, and it is craving, rather than the reward itself, that drives the behaviour forward. It explains why the mere sight of a cue - a notification, a vending machine, a particular doorway - can produce a pull that is felt long before any reward is obtained.

This machinery is strikingly indifferent to whether its results are good for us. The same loop that fixes a healthy routine, such as a morning walk, will just as faithfully entrench a harmful one, such as reaching for a cigarette whenever stress appears. The brain does not weigh the long-term wisdom of a behaviour; it simply notices that a cue was followed by a reward and strengthens the link. This is why bad habits are so stubborn. A person may sincerely wish to stop and yet find that, in the presence of the old cue, the routine unfolds almost before they are aware of having chosen it.

If habits cannot easily be erased, the more promising strategy is to redirect them. Because the loop is so durable, attempting to abolish a habit by willpower alone tends to fail; the craving remains and eventually overwhelms resistance. A more effective approach, many researchers argue, is to keep the old cue and the old reward but to insert a new routine between them. Someone who smokes when anxious, for instance, might learn to respond to the same anxiety, and seek the same relief, through a brief walk or a few deep breaths instead. The trigger and the payoff are left in place; only the behaviour in the middle is exchanged.

The surrounding environment turns out to matter at least as much as personal resolve. Because cues are so powerful, the simplest way to weaken an unwanted habit is often to remove its triggers from sight, and the simplest way to build a desirable one is to make its cue obvious and its routine easy. Keeping sweets out of the house, or laying out running clothes the night before, sounds trivial, yet such adjustments work precisely because they act on the cue rather than relying on the willpower that habits are so good at evading. This is also why people frequently manage to change long-standing habits when they move house or start a new job: the old web of cues is swept away at a stroke, and for a brief window behaviour becomes unusually open to redirection.

None of this means that change is easy. Studies that have tried to measure how long a new behaviour takes to become automatic report figures ranging from a few weeks to the better part of a year, depending on the person and the complexity of the act. There is no fixed point at which a habit is suddenly formed. What the research does suggest is that change is less a matter of heroic self-discipline than of patient design - of arranging one's cues, routines and rewards so that the brain's relentless machinery, which will build habits regardless, is gently steered towards building the right ones.`,
        questions: [
          {
            id: 'rd-013-p3-q19',
            type: 'matching',
            variant: 'endings',
            prompt:
              'Complete each sentence (1-5) with the correct ending (A-G) from the box below, based on the information in the passage. There are more endings than sentences, so you will not use them all. Write the correct letter for each sentence.',
            options: [
              {
                key: 'A',
                label: 'it conserves the limited energy of the slow, effortful conscious mind.',
              },
              {
                key: 'B',
                label:
                  'it shifts backwards in time until it is felt as craving when the cue appears.',
              },
              {
                key: 'C',
                label: 'the old web of cues is swept away and behaviour becomes open to change.',
              },
              {
                key: 'D',
                label: 'the craving remains and eventually overwhelms resistance.',
              },
              {
                key: 'E',
                label:
                  'it strengthens the link regardless of whether the behaviour is good for us.',
              },
              {
                key: 'F',
                label: 'people are able to recall exactly when each habit first began.',
              },
              {
                key: 'G',
                label: 'the reward must always be larger than the effort the routine requires.',
              },
            ],
            items: [
              {
                id: 'rd-013-p3-q19-1',
                text: 'According to the passage, automating routine actions is valuable because',
                answer: 'A',
              },
              {
                id: 'rd-013-p3-q19-2',
                text: 'As a habit takes hold, the spike of pleasure in the brain changes so that',
                answer: 'B',
              },
              {
                id: 'rd-013-p3-q19-3',
                text: 'Because the brain notices only that a cue was followed by a reward,',
                answer: 'E',
              },
              {
                id: 'rd-013-p3-q19-4',
                text: 'Trying to abolish a habit by willpower alone tends to fail because',
                answer: 'D',
              },
              {
                id: 'rd-013-p3-q19-5',
                text: 'People often manage to change long-standing habits when they move house because',
                answer: 'C',
              },
            ],
            explanation:
              'Item 1: the first paragraph says automation "conserves its limited energy" because the conscious mind is "slow and effortful" (A). Item 2: the third paragraph says the spike of pleasure "shifts backwards in time," arriving as craving "at the moment the cue is noticed" (B). Item 3: the fourth paragraph says the brain "simply notices that a cue was followed by a reward and strengthens the link," indifferent to whether the result is good for us (E). Item 4: the fifth paragraph says abolishing a habit by willpower fails because "the craving remains and eventually overwhelms resistance" (D). Item 5: the sixth paragraph says moving house sweeps away "the old web of cues" so behaviour becomes open to redirection (C). Endings F and G are distractors not supported by the text.',
          },
          {
            id: 'rd-013-p3-q20',
            type: 'tfng',
            prompt:
              'The passage describes the automation of routine actions as a useful economy for the brain.',
            answer: 'true',
            explanation:
              'The first paragraph states that automation "is one of the brain\'s most valuable economies," conserving energy for the genuinely new. This matches the statement, so it is True.',
          },
          {
            id: 'rd-013-p3-q21',
            type: 'tfng',
            prompt:
              'According to researchers, it is craving rather than the reward itself that drives a habit forward.',
            answer: 'true',
            explanation:
              'The third paragraph states that anticipation "is experienced as craving, and it is craving, rather than the reward itself, that drives the behaviour forward." This supports the statement, so it is True.',
          },
          {
            id: 'rd-013-p3-q22',
            type: 'tfng',
            prompt:
              'The brain weighs the long-term wisdom of a behaviour before deciding to turn it into a habit.',
            answer: 'false',
            explanation:
              'The fourth paragraph states that "the brain does not weigh the long-term wisdom of a behaviour; it simply notices that a cue was followed by a reward." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-013-p3-q23',
            type: 'tfng',
            prompt: 'Most people can form a new habit in exactly twenty-one days.',
            answer: 'not-given',
            explanation:
              'The final paragraph reports that studies give figures "ranging from a few weeks to the better part of a year" and that "there is no fixed point at which a habit is suddenly formed." The specific claim of twenty-one days is not made anywhere in the passage, so the answer is Not Given.',
          },
          {
            id: 'rd-013-p3-q24',
            type: 'mcq',
            prompt:
              'What are the three parts of a habit loop, in order, as described in the passage?',
            options: [
              'Reward, routine, cue',
              'Cue, routine, reward',
              'Craving, cue, reward',
              'Routine, reward, craving',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph describes the structure as "a cue, a trigger... prompts a routine, the behaviour itself, which in turn delivers a reward." The correct order is cue, routine, reward - Option B.',
          },
          {
            id: 'rd-013-p3-q25',
            type: 'mcq',
            prompt:
              'What approach to changing a bad habit does the passage present as most effective?',
            options: [
              'Using willpower to resist the craving until it disappears',
              'Removing both the cue and the reward at the same time',
              'Keeping the old cue and reward but inserting a new routine between them',
              'Punishing oneself each time the old routine is performed',
            ],
            correctIndex: 2,
            explanation:
              'The fifth paragraph argues that the effective approach is "to keep the old cue and the old reward but to insert a new routine between them." Option C matches; the passage says willpower alone tends to fail.',
          },
          {
            id: 'rd-013-p3-q26',
            type: 'mcq',
            prompt:
              'Why does the passage say that adjusting the environment, such as keeping sweets out of the house, works?',
            options: [
              'Because it makes the reward feel less satisfying',
              'Because it acts on the cue rather than relying on willpower',
              'Because it permanently erases the habit loop from the brain',
              'Because it replaces the craving with a stronger one',
            ],
            correctIndex: 1,
            explanation:
              'The sixth paragraph explains that such adjustments "work precisely because they act on the cue rather than relying on the willpower that habits are so good at evading." Option B is correct.',
          },
          {
            id: 'rd-013-p3-q27',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A cue is a trigger that the brain learns to associate with a particular _______.',
            acceptableAnswers: ['response'],
            explanation:
              'The second paragraph defines a cue as "a trigger that the brain learns to associate with a particular response." The required word is "response".',
          },
          {
            id: 'rd-013-p3-q28',
            type: 'gap',
            prompt:
              "Complete the summary with ONE word from the passage: The research suggests that lasting change is less a matter of heroic self-discipline than of patient _______ of one's cues, routines and rewards.",
            acceptableAnswers: ['design'],
            explanation:
              'The final paragraph states that change is "less a matter of heroic self-discipline than of patient design - of arranging one\'s cues, routines and rewards." The required word is "design".',
          },
        ],
      },
    ],
  },
]
