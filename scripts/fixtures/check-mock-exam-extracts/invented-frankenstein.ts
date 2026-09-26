// @ts-nocheck
/**
 * INVENTED TEXT, NOT MARY SHELLEY'S. A fixture for the reverse test in
 * scripts/check-mock-exam-extracts.mjs (--self-test), and nothing else: no
 * page, test or bank imports it, and it must never be served.
 *
 * WHAT IT IS. The three extracts labelled "Mary Shelley, Frankenstein (1818)"
 * and the question that printed one of them, exactly as
 * src/data/mock-exams-aqa-lit-p1-set2.ts held them before 27 September 2026
 * (as last committed, in f82b978f), sliced from that file by script. Most of
 * their sentences are in no edition of the novel, and the model answers
 * quote the invented lines as Shelley's. They are what the checker was
 * written to catch.
 *
 * WHY IT IS KEPT. The reverse test used to read them from the live file. When
 * that file was given Shelley's text, four of the test's checks failed: a
 * reverse test that reads the thing it once caught stops testing anything the
 * day that thing is fixed. Kept here, the checker must still fail them.
 */

const FRANKENSTEIN_EXTRACT_01 = `I am by birth a Genevese; and my family is one of the most distinguished of that republic. My ancestors had been for many years counsellours and syndics; and my father had filled several public offices with honour and reputation. He was respected by all who knew him for his integrity and boundless charity. He passed his younger days perpetually occupied by the affairs of his country; a variety of circumstances had prevented him from marrying early, nor was it until the decline of life that he became a husband and the father of a family.

As the circumstances of his marriage illustrate his character, I cannot refrain from relating them. One of his most intimate friends was a merchant, who, from a fortune of great prosperity, fell, through numerous mischances, into poverty. This man, whose name was Beaufort, was of a gentle and amiable disposition, and could not bear to live in idleness and indigence in the same place where he had formerly been distinguished for wealth and magnificence. He therefore left his country, and, to conceal his misfortunes, changed his name, and retired, with his daughter Caroline, to Lucerne, where, by the activity of his mind, he had acquired a considerable fortune by commerce.

My father was in the fifty-fifth year of his life when he married my mother, Caroline, the daughter of Beaufort. Her softness and attractive disposition won his regard and esteem. He cherished her, as a man cherishes a lovely and fascinating companion; but there was a beam of paternal affection mingled with his attachments to her, stronger than he had anticipated, until he found that as he advanced in years with his beloved companion, and as he became more deeply rooted in domestic affection, so likewise did the loveliness and softness of her disposition increase.`

const FRANKENSTEIN_EXTRACT_01_SOURCE = 'Mary Shelley, Frankenstein (1818)'

const FRANKENSTEIN_EXTRACT_02 = `I cannot describe to you the agony that these reflections inflicted upon me; I could not believe that I was in possession of no power, and yet was compelled to submit. What was I? Of my creation I was absolutely ignorant; but I knew that I possessed no money, no friends, no kind of property. I was, besides, endued with a figure hideously deformed and loathsome; I was not even of the same nature as man. I was more agile than they, and could subsist upon coarser diet; I bore the extremes of temperature far better than they do; but I had discovered that I possessed a far greater degree of sensibility than man.

When I looked upon him, I could not consider him as my creator, but as an enemy, against whom I pledged myself to wage unrelenting war. He had denied me light and joy; is it strange that he who made me should be the object upon which I should pour out the overflowings of my anguish? Begone! Relieve me from the sight of your detested form.'

'Thus I relieve thee, my creator,' he said, and placed his hated hands before my eyes, which I flung from me with violence; 'thus I take from thee a sight which you abhor. Still thou canst listen to me, and grant me thy compassion. By the virtues that I bear, I swear to quit your lands, but only on one condition.

The hateful words were spoken; I paused, listening; the words were these-

'Swear that you will never create another being such as yourself, equal in deformity and wretchedness. You shall promise that you will have no communications with the female sex in enmity with mankind. Swear! or the horrors of my vengeance will descend upon you and your loved ones with all the magnitude of which I am capable.'`

const FRANKENSTEIN_EXTRACT_02_SOURCE = 'Mary Shelley, Frankenstein (1818)'

const FRANKENSTEIN_EXTRACT_03 = `The beauty of the dreams vanished, and nightmares began with fearful visions-or, to be more correctly, a sense of utter despair seized my mind. I felt as if some controlling power was urging me onwards, and I must resign my own will to the impulse which governed me. I was compelled to obey; and I well remember that I heard a voice calling upon me, urging me to fulfil the fatal obligation. It was not the voice of the creature I had formed; it was that of another, more potent than even my omnipotent conqueror.

I will not dwell upon the horrors of the night that followed. Let it suffice that I awoke in a state of utter despair. I felt that I had been the instrument of mischief; that I had created a fiend whose subsequent actions might stamp my very nature with the appearance of guilt. All thought of myself, of my own happiness, was swallowed up in the anxiety of that period. My father was growing old, and required my care. My brother was married and occupied with his children and the cares of a family.`

const FRANKENSTEIN_EXTRACT_03_SOURCE = 'Mary Shelley, Frankenstein (1818)'

export const inventedFrankensteinPaper = [
  {
    id: 'fixture-invented-frankenstein',
    board: 'AQA',
    paperNumber: 1,
    title: 'Fixture: the invented Frankenstein extracts',
    sections: [
      {
        id: 'section-2-19th-century',
        title: 'Section B: The 19th Century Novel',
        questions: [
          {
            id: 'frankenstein-q1',
            questionNumber: 3,
            questionText:
              'Read the extract from Frankenstein below. Explore how Shelley presents the theme of isolation and its destructive effects on the creature and Victor Frankenstein.',
            marks: 48,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: FRANKENSTEIN_EXTRACT_02,
            extractSource: FRANKENSTEIN_EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 7-9':
                'Shelley uses the extract to demonstrate how isolation breeds profound anguish and corrupts virtue into vengeance. The creature\'s assertion-"I cannot describe to you the agony that these reflections inflicted upon me"-reveals isolation\'s psychological devastation. His lack of social connection, combined with his "figure hideously deformed," renders him literally incapable of joining human society. Yet Shelley complicates the narrative by showing the creature\'s superior endowments-"I possessed a far greater degree of sensibility than man"-which paradoxically intensifies his suffering. He is not merely inferior but tragically superior in capacities that isolation prevents him from expressing. The creature\'s transformation of his creator into "an enemy, against whom I pledged myself to wage unrelenting war" illustrates how isolation corrodes morality. He enters the narrative with capacity for love and learning, but society\'s rejection forces him into vengeance. Shelley suggests that the creature\'s violence is not inherent but produced by isolation. Victor\'s isolation is equally destructive though differently expressed. His secretive creation of the creature stems from isolation-he conducts his experiments alone, burdened by knowledge he cannot share. This isolation leads to madness and death. Throughout the novel, Shelley positions isolation as the true antagonist. Neither creature nor Victor is evil by nature; rather, isolation from community transforms both into instruments of mutual destruction. The creature\'s final words to Walton emphasize this: his greatest suffering is solitude. Shelley thus critiques a society that isolates those deemed different or undesirable, suggesting that connection-not rejection-might have redeemed both her protagonists.',
              '5-6':
                'In this extract, Shelley shows how isolation causes the creature to suffer deeply. He says he cannot describe his pain and that he feels completely powerless. The creature realizes he is different from humans and this isolation makes him angry. He becomes violent and wants revenge against Victor because Victor created him and then abandoned him. Shelley suggests that isolation drives the creature toward evil. Victor is also isolated because he keeps his creation secret, and this makes him suffer and go mad. Throughout the novel, isolation appears to be very destructive. The creature and Victor are both isolated in different ways, and both suffer as a result. Shelley seems to be arguing that people need connection and society to be happy and moral.',
              '3-4':
                'Shelley shows that isolation makes the creature suffer. In the extract, he says he feels anguish and has no power. He is isolated because he is ugly and people reject him. This makes him angry and want to hurt Victor. The creature says Victor is his enemy because he made him and then left him alone. Victor is also isolated because he keeps his work secret. Isolation is bad for both of them and makes them unhappy.',
            },
            markScheme: [
              "Analyse Shelley's language and techniques to convey isolation and psychological suffering",
              'Explore the relationship between isolation and moral degeneration for both Victor and the creature',
              'Consider how Shelley presents isolation as a social or individual problem',
              'Reference specific quotations to support analysis of the theme',
              "Evaluate the extent to which isolation determines the characters' actions and fates",
            ],
          },
        ],
      },
    ],
  },
]
