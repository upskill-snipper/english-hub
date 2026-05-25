// ─── IELTS Academic Reading - practice item bank (Set 3) ───────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation is
// implied. Academic track.
//
// Domain for this set: HISTORY / ARCHAEOLOGY / SOCIETY & CULTURE - kept distinct
// from the transport, memory, lighthouse and honeybee themes used elsewhere in
// the bank so that learners meet fresh subject matter.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_3: ReadingTest[] = [
  {
    id: 'rd-acad-s3-001',
    title: 'Academic Reading - Practice Test 5',
    track: 'academic',
    estimatedMinutes: 20,
    passages: [
      {
        id: 'rd-acad-s3-001-p1',
        title: 'The Manuscripts Beneath the Sand',
        body: `For travellers who crossed the southern edge of the Sahara in the medieval period, the trading town of Chinguetti was less a destination than a gateway. Caravans laden with salt and gold paused there before turning north, and the scholars who travelled with them carried something more fragile than any cargo: books. Over several centuries, the families of the town assembled private libraries of handwritten volumes on law, astronomy, medicine and poetry. By the time the trade routes faded, thousands of manuscripts lay in the town's mud-brick houses, inherited from one generation to the next.

For a long while their survival was taken for granted. The dry desert air, which destroys so much, is in fact kind to paper, and the volumes sat undisturbed on shelves for hundreds of years. The danger, when it came, was not decay but neglect. As the population dwindled and younger people left for the coast, fewer hands remained to dust the pages, repair torn bindings or simply remember which box held what.

The rediscovery of these collections by outside scholars in the late twentieth century caused considerable excitement. Here, it seemed, was a written record of a civilisation that many in Europe had assumed left no books at all. Researchers were eager to catalogue the texts, and some argued that the manuscripts should be removed to a national institution where they could be stored in controlled conditions and studied properly.

The families who owned them were not always persuaded. To them the volumes were not museum pieces but heirlooms, bound up with the identity of the town itself, and to surrender them to a distant capital felt like a second abandonment. A compromise gradually emerged. Rather than carry the books away, a number of small local libraries were established within Chinguetti, where the manuscripts could be protected from dust and insects while remaining in the hands of the community that had preserved them for so long.

The episode is often cited as a lesson. The instinct to gather scattered treasures into one safe place is understandable, but it can overlook the people for whom those treasures are not curiosities but a living inheritance.`,
        questions: [
          {
            id: 'rd-acad-s3-001-p1-q1',
            type: 'tfng',
            prompt:
              'According to the passage, scholars travelling with the caravans regarded their books as more delicate than the goods being traded.',
            answer: 'true',
            explanation:
              'The first paragraph says the scholars "carried something more fragile than any cargo: books." Describing the books as more fragile than any cargo supports the statement, so it is True.',
          },
          {
            id: 'rd-acad-s3-001-p1-q2',
            type: 'tfng',
            prompt: 'The desert climate caused the manuscripts to deteriorate quickly.',
            answer: 'false',
            explanation:
              'The second paragraph states that "the dry desert air... is in fact kind to paper, and the volumes sat undisturbed... for hundreds of years." This contradicts the idea of quick deterioration, so the statement is False.',
          },
          {
            id: 'rd-acad-s3-001-p1-q3',
            type: 'tfng',
            prompt:
              'Chinguetti was the most important centre of manuscript production in medieval Africa.',
            answer: 'not-given',
            explanation:
              'The passage describes Chinguetti as a trading town with substantial private libraries, but it never compares it with other centres or claims it was the most important. No such information is given, so the answer is Not Given.',
          },
          {
            id: 'rd-acad-s3-001-p1-q4',
            type: 'mcq',
            prompt:
              'What does the passage identify as the real threat to the manuscripts over time?',
            options: [
              'Damage caused by the humidity of the desert air',
              'Theft by passing caravans and traders',
              'Neglect as the local population declined',
              'Damage during transport to the national capital',
            ],
            correctIndex: 2,
            explanation:
              'The second paragraph says "The danger, when it came, was not decay but neglect," explaining that as the population dwindled, fewer people remained to care for the books. Option C captures this.',
          },
          {
            id: 'rd-acad-s3-001-p1-q5',
            type: 'mcq',
            prompt:
              'Why were some outside researchers keen to move the manuscripts to a national institution?',
            options: [
              'So that the books could be sold to fund the town',
              'So that they could be stored in controlled conditions and properly studied',
              'Because the families had asked them to remove the books',
              'Because the desert houses were about to be demolished',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph states that some argued the manuscripts "should be removed to a national institution where they could be stored in controlled conditions and studied properly." Option B matches this reasoning.',
          },
          {
            id: 'rd-acad-s3-001-p1-q6',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: To the families who owned them, the volumes were not museum pieces but _______, tied to the identity of the town.',
            acceptableAnswers: ['heirlooms'],
            explanation:
              'The fourth paragraph says "the volumes were not museum pieces but heirlooms, bound up with the identity of the town itself." The missing word is "heirlooms".',
          },
          {
            id: 'rd-acad-s3-001-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: The eventual solution was a _______ under which small libraries were set up within the town rather than moving the books away.',
            acceptableAnswers: ['compromise'],
            explanation:
              'The fourth paragraph states "A compromise gradually emerged," describing the local libraries that kept the books in the community. The required word is "compromise".',
          },
        ],
      },
      {
        id: 'rd-acad-s3-001-p2',
        title: 'How the Coffee House Changed Conversation',
        body: `When the first coffee houses opened in seventeenth-century London, they were greeted with suspicion. The drink they served was bitter, dark and unfamiliar, and the rooms in which it was sold quickly acquired a reputation as places where men gathered to argue about matters that, in the view of the authorities, were none of their business. Within a few decades, however, these establishments had become one of the most important social institutions of the age.

Part of their appeal was practical. Unlike the tavern, where ale loosened tongues and emptied purses, the coffee house served a drink that sharpened the mind rather than dulling it. A man could spend an entire afternoon there for the price of a single cup, reading the newspapers that were provided free of charge and listening to the talk around him. The atmosphere was studious without being solemn, and it suited an era hungry for news and ideas.

What made the coffee house genuinely novel, though, was its openness. In a society obsessed with rank, here was a room where, in principle, a merchant might sit beside a poet and a clerk beside a gentleman, all of them paying the same penny at the door. Conversation, not status, was the currency that mattered. Particular houses became associated with particular trades and interests: some attracted writers, others men of science, and a famous few drew the merchants and ship-owners whose informal dealings would eventually grow into great financial institutions.

The authorities were not always comfortable with all this talk. At one point an attempt was made to close the coffee houses altogether, on the grounds that they bred discontent and spread rumours. The measure was abandoned within days, partly because it proved impossible to enforce and partly because the houses had already become too useful to too many people to be swept away.

Historians have sometimes called the coffee house the first true public sphere - a place where private individuals could come together to discuss the affairs of the day on something approaching equal terms. The coffee itself, in the end, was almost incidental. What people were really buying was the company, and the conversation, of strangers.`,
        questions: [
          {
            id: 'rd-acad-s3-001-p2-q8',
            type: 'mcq',
            prompt: 'How were the first London coffee houses regarded when they opened?',
            options: [
              'With enthusiasm by the authorities',
              'With suspicion, partly because of the discussions held in them',
              'With indifference, as just another kind of tavern',
              'With admiration for the quality of the drink',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph says they "were greeted with suspicion" and gained a reputation as places where men argued about matters the authorities thought were "none of their business." Option B captures both points.',
          },
          {
            id: 'rd-acad-s3-001-p2-q9',
            type: 'tfng',
            prompt:
              'The passage contrasts the coffee house with the tavern, where drink was said to dull the mind.',
            answer: 'true',
            explanation:
              'The second paragraph contrasts the tavern, where "ale loosened tongues and emptied purses," with coffee, "a drink that sharpened the mind rather than dulling it." This supports the statement, so it is True.',
          },
          {
            id: 'rd-acad-s3-001-p2-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: For the price of a single cup, a customer could read the _______ that were supplied free of charge.',
            acceptableAnswers: ['newspapers'],
            explanation:
              'The second paragraph says a man could spend an afternoon "reading the newspapers that were provided free of charge." The missing word is "newspapers".',
          },
          {
            id: 'rd-acad-s3-001-p2-q11',
            type: 'mcq',
            prompt:
              'According to the passage, what made the coffee house genuinely new for its time?',
            options: [
              'It was cheaper than any tavern in the city.',
              'It mixed people of different ranks, valuing conversation over status.',
              'It was the first place to sell coffee anywhere in Europe.',
              'It was open only to merchants and men of science.',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph says "What made the coffee house genuinely novel... was its openness," describing a room where men of different ranks sat together and "Conversation, not status, was the currency that mattered." Option B is correct.',
          },
          {
            id: 'rd-acad-s3-001-p2-q12',
            type: 'tfng',
            prompt:
              'The attempt to close the coffee houses succeeded and they remained shut for several years.',
            answer: 'false',
            explanation:
              'The fourth paragraph states that the attempt to close them "was abandoned within days" because it could not be enforced and the houses were too useful. This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-acad-s3-001-p2-q13',
            type: 'gap',
            prompt:
              'Complete the summary with TWO words from the passage: Historians have described the coffee house as the first true _______, where individuals met to discuss current affairs on roughly equal terms.',
            acceptableAnswers: ['public sphere'],
            explanation:
              'The final paragraph says historians "have sometimes called the coffee house the first true public sphere." The required phrase is "public sphere".',
          },
          {
            id: 'rd-acad-s3-001-p2-q14',
            type: 'mcq',
            prompt:
              'What does the writer suggest customers were "really buying" in a coffee house?',
            options: [
              'The highest-quality coffee available at the time',
              'A quiet place to be alone with their thoughts',
              'The company and conversation of other people',
              'Access to the newest financial institutions',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph says the coffee "was almost incidental" and that "What people were really buying was the company, and the conversation, of strangers." Option C matches this conclusion.',
          },
        ],
      },
    ],
  },
]
