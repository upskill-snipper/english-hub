// ─── IELTS Academic Reading — practice item bank (Set 4) ───────────────────
// ORIGINAL content written for The English Hub. These passages and questions
// are invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation
// is implied. Academic track.
//
// Domain focus for this set: TECHNOLOGY / PSYCHOLOGY / BUSINESS & ECONOMICS —
// chosen to stay distinct from the transport, memory, maritime and biology
// topics used elsewhere in the bank so learners meet fresh subject matter.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_4: ReadingTest[] = [
  {
    id: 'rd-acad-s4-001',
    title: 'Academic Reading — Practice Test (Set 4)',
    track: 'academic',
    estimatedMinutes: 20,
    passages: [
      {
        id: 'rd-acad-s4-001-p1',
        title: 'The Psychology of the Free Trial',
        body: `Few business tactics have spread as quickly as the free trial. A streaming service, a fitness application or a piece of accounting software now routinely invites newcomers to use the full product for a month at no charge, asking only for payment details that will be billed automatically once the period ends. The arrangement looks generous, and in one sense it is. Yet economists who study consumer behaviour argue that its real power lies in something less obvious than simple kindness.

The first force at work is what researchers call the endowment effect. Once people have spent a few weeks treating a product as their own — saving playlists, building workout records, importing their files — they begin to value it far more highly than they did before they tried it. Giving the product up no longer feels like declining an offer; it feels like losing something they already possess, and losses, the evidence suggests, weigh roughly twice as heavily on the mind as equivalent gains.

A second force is simple inertia. Cancelling a subscription usually requires a deliberate act: finding the right page, confirming the decision, perhaps answering a survey designed to change one's mind. Continuing requires nothing at all. Because the effort of cancelling falls due immediately while the cost of staying is spread thinly across future months, many users postpone the decision repeatedly until it is forgotten altogether. Firms understand this well, which is why the sign-up process is typically far smoother than the exit.

None of this means the free trial is a trick. Many customers genuinely benefit, discovering a service they are happy to pay for and would not otherwise have risked. The criticism is narrower: that the design quietly exploits predictable weaknesses in human judgement, and that the balance of effort is rarely arranged in the customer's favour. Some regulators have responded by insisting that cancelling must be made as easy as joining, a principle that sounds modest but would, if enforced, reshape a great deal of modern commerce.`,
        questions: [
          {
            id: 'rd-acad-s4-001-p1-q1',
            type: 'tfng',
            prompt:
              'A free trial typically asks the customer for payment details before the no-charge period begins.',
            answer: 'true',
            explanation:
              'The first paragraph states the service invites newcomers to use the product at no charge "asking only for payment details that will be billed automatically once the period ends." This supports the statement, so it is True.',
          },
          {
            id: 'rd-acad-s4-001-p1-q2',
            type: 'mcq',
            prompt: 'According to the passage, what does the "endowment effect" describe?',
            options: [
              'A discount offered to customers who stay for several months',
              'The tendency to value something more highly once it feels like one’s own',
              'The legal duty of firms to make cancelling straightforward',
              'The gradual rise in the price of a subscription over time',
            ],
            correctIndex: 1,
            explanation:
              'The second paragraph explains that after treating a product as their own, people "value it far more highly than they did before they tried it." Option B captures the endowment effect; the other options describe unrelated ideas.',
          },
          {
            id: 'rd-acad-s4-001-p1-q3',
            type: 'tfng',
            prompt:
              'The passage claims that losses tend to affect people about twice as strongly as gains of the same size.',
            answer: 'true',
            explanation:
              'The second paragraph states that "losses, the evidence suggests, weigh roughly twice as heavily on the mind as equivalent gains." This matches the statement, so it is True.',
          },
          {
            id: 'rd-acad-s4-001-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A second reason customers keep paying is simple _______, because continuing a subscription requires no action at all.',
            acceptableAnswers: ['inertia'],
            explanation:
              'The third paragraph begins, "A second force is simple inertia," and explains that continuing "requires nothing at all." The missing word is "inertia".',
          },
          {
            id: 'rd-acad-s4-001-p1-q5',
            type: 'mcq',
            prompt:
              'Why, according to the passage, do many users keep postponing the decision to cancel?',
            options: [
              'The monthly price is too small to notice on a bank statement.',
              'The effort of cancelling is immediate while the cost of staying is spread thinly over time.',
              'They are legally prevented from cancelling during the trial period.',
              'They expect the service to improve significantly in the future.',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph says "the effort of cancelling falls due immediately while the cost of staying is spread thinly across future months," leading users to postpone repeatedly. Option B states this; the others are not given as the reason.',
          },
          {
            id: 'rd-acad-s4-001-p1-q6',
            type: 'tfng',
            prompt: 'The author concludes that the free trial is essentially a dishonest trick.',
            answer: 'false',
            explanation:
              'The final paragraph explicitly states, "None of this means the free trial is a trick," and notes that many customers genuinely benefit. The statement contradicts the passage, so it is False.',
          },
          {
            id: 'rd-acad-s4-001-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Some _______ have responded by insisting that cancelling a service must be made as easy as joining it.',
            acceptableAnswers: ['regulators'],
            explanation:
              'The final paragraph says, "Some regulators have responded by insisting that cancelling must be made as easy as joining." The required word is "regulators".',
          },
        ],
      },
      {
        id: 'rd-acad-s4-001-p2',
        title: 'Why We Reuse Our Passwords',
        body: `Security experts have repeated the same advice for decades: choose a long, unique password for every account, and never write any of them down. The advice is sound, yet surveys consistently find that most people ignore it, recycling a small handful of familiar passwords across dozens of services. Rather than dismissing this as mere laziness, researchers in the field of usable security have tried to understand why sensible people behave in a way they know to be risky.

Part of the answer is a phenomenon often called security fatigue. The modern internet user is asked to create and remember an extraordinary number of credentials, and each one competes for the same limited store of attention. Faced with yet another demand to invent a complex string of characters, many people reach a point of exhaustion at which they simply stop trying to comply. They are not unaware of the danger; they have concluded, consciously or not, that the effort is no longer worth it.

The design of the systems themselves makes matters worse. Rules that forbid certain symbols, demand frequent changes, or reject passwords for reasons they decline to explain push users toward predictable shortcuts. A person told to add a number and a capital letter will often simply capitalise the first letter and append a "1", producing a password that satisfies the rule while remaining easy for an attacker to guess. The rule has created an illusion of strength without the substance.

The most promising solutions remove the burden from human memory altogether. Password managers generate and store a different complex password for every site, requiring the user to remember only one. Newer approaches replace the password entirely with a key held on a device the user already carries, so that signing in becomes a matter of approving a request rather than recalling a secret. Adoption remains uneven, partly because the older habit is so deeply ingrained, but the direction of travel is clear: the future of security is likely to depend less on better passwords and more on doing away with them.`,
        questions: [
          {
            id: 'rd-acad-s4-001-p2-q8',
            type: 'mcq',
            prompt: 'How do researchers in usable security explain the habit of reusing passwords?',
            options: [
              'They treat it simply as a sign of laziness.',
              'They argue most users are unaware that reuse is risky.',
              'They try to understand why sensible people act in a way they know to be risky.',
              'They claim password reuse is actually safe in most cases.',
            ],
            correctIndex: 2,
            explanation:
              'The first paragraph says researchers, "Rather than dismissing this as mere laziness... have tried to understand why sensible people behave in a way they know to be risky." Option C matches; the passage explicitly rejects A and B.',
          },
          {
            id: 'rd-acad-s4-001-p2-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: The exhaustion that makes users stop creating new credentials is often called _______.',
            acceptableAnswers: ['security fatigue'],
            explanation:
              'The second paragraph introduces "a phenomenon often called security fatigue." The required phrase is "security fatigue".',
          },
          {
            id: 'rd-acad-s4-001-p2-q10',
            type: 'tfng',
            prompt:
              'According to the passage, people who reuse passwords are generally unaware of the risk involved.',
            answer: 'false',
            explanation:
              'The second paragraph states, "They are not unaware of the danger," and the first paragraph describes them as acting in a way "they know to be risky." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-acad-s4-001-p2-q11',
            type: 'mcq',
            prompt:
              'What does the example of capitalising the first letter and adding a "1" illustrate?',
            options: [
              'A reliable method for creating a strong password',
              'How strict rules can push users toward predictable, weak shortcuts',
              'A technique recommended by most security experts',
              'A way of remembering several passwords at once',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph uses this example to show that demanding rules "push users toward predictable shortcuts," producing a password that satisfies the rule "while remaining easy for an attacker to guess." Option B is correct.',
          },
          {
            id: 'rd-acad-s4-001-p2-q12',
            type: 'tfng',
            prompt:
              'Password managers require the user to memorise a separate password for each website.',
            answer: 'false',
            explanation:
              'The final paragraph states that password managers store a different password for every site "requiring the user to remember only one." The statement says the opposite, so it is False.',
          },
          {
            id: 'rd-acad-s4-001-p2-q13',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: Newer sign-in methods replace the password with a key held on a _______ that the user already carries.',
            acceptableAnswers: ['device'],
            explanation:
              'The final paragraph describes approaches that "replace the password entirely with a key held on a device the user already carries." The missing word is "device".',
          },
          {
            id: 'rd-acad-s4-001-p2-q14',
            type: 'tfng',
            prompt:
              'The passage suggests that future security will rely increasingly on creating stronger passwords.',
            answer: 'false',
            explanation:
              'The final sentence states the future of security "is likely to depend less on better passwords and more on doing away with them." This contradicts the statement, so it is False.',
          },
        ],
      },
    ],
  },
]
