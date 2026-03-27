// ─── AQA GCSE English Literature (8702) Mock Exam Papers ─────────────────────
// 3 Paper 1 (Shakespeare + 19th Century Novel) + 3 Paper 2 (Modern Text + Poetry)
// Paper 1: Macbeth + A Christmas Carol
// Paper 2: An Inspector Calls + Power & Conflict Poetry

import type { MockExamPaper } from './mock-exams'

// ─────────────────────────────────────────────────────────────────────────────
// SHAKESPEARE & 19TH CENTURY NOVEL EXTRACTS (PAPER 1)
// ─────────────────────────────────────────────────────────────────────────────

const MACBETH_EXTRACT_1 = `Out, damned spot! out, I say! One, two. Why, then, 'tis time to do't. Hell is murky. Fie, my lord, fie! A soldier and afeard? What need we fear who knows it, when none can call our power to account? Yet who would have thought the old man to have had so much blood in him?

DOCTOR: Do you mark that?

LADY MACBETH: The Thane of Fife had a wife. Where is she now? What, will these hands ne'er be clean? No, no, this hand will rather the multitudinous seas incarnadine, making the green one red.

ROSSE: My lord, I should report that which I say I saw, But know not how to do't.

LADY MACBETH: A little water clears us of this deed. How easy is it then! Your constancy hath left you unattended. Hark! I hear the strain of strutting chanticleer cry 'Cock-a-diddle-daw.' Come, come, come, come, give me your hand. What's done cannot be undone. To bed, to bed, to bed!`

const MACBETH_EXTRACT_SOURCE = 'William Shakespeare, Macbeth, Act 5, Scene 1 (adapted)'

const CHRISTMAS_CAROL_EXTRACT_1 = `She prayed forgiveness one moment, and was struck by lightning the next. So had she ever been; the children of the adder, as the wise men of the east would say with reference to any stunted dealing. No further intercourse had he with Spirits, but long retained the knowledge that he had gained, had kept it before his mind as a solemn charge committed to him.

Scrooge was better than his word. He did it all, and infinitely more; and to Tiny Tim, who did not die, he was a second father. He became as good a friend, as good a master, and as good a man, as the good old city knew, or any other good old city, town, or borough, in the good old world.

Some people laughed to see the alteration in him, but he let them laugh, and little heeded them; for he was wise enough to know that nothing ever happened on this globe, for good or for evil, but some person is always on hand to greet it either in mockery or genuine tears; and he had it pretty well ascertained by this time that it is the lot of those who have their lives well spent in active usefulness, to get the start of the world.

It is said that Scrooge never became as merry a man as he had been, but he was an altered man from the Christmas Future. His own words upon the parting Spirits were deeper far then any music — they came straight from his own heart, and were of such virtue that they had the power to restore him in a twinkling.`

const CHRISTMAS_CAROL_EXTRACT_SOURCE = 'Charles Dickens, A Christmas Carol, Staves 4-5 (adapted)'

const MACBETH_EXTRACT_2 = `Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day to the last syllable of recorded time, and all our yesterdays have lighted fools the way to dusty death. Out, out, brief candle! Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more. It is a tale told by an idiot, full of sound and fury, signifying nothing.

The cry of women in the castle. Seyton, I am sick when I do see— but, soft! Thou com'st to use thy tongue; thy story quickly. What's the boy Malcolm? Was he not born of woman? The spirits that know all mortal consequences have deceived me. 'Pull thy hat upon thy brows; give thee that, which claps thee to the pole, and I will fight, till from my bones my flesh be hack'd.'`

const MACBETH_EXTRACT_2_SOURCE = 'William Shakespeare, Macbeth, Act 5, Scene 5 (adapted)'

const CHRISTMAS_CAROL_EXTRACT_2 = `"Are there no prisons?" asked Scrooge.

"Plenty of prisons," said the gentleman, laying down the pen again.

"And the Union workhouses?" demanded Scrooge. "Are they still in operation?"

"They are. Still," returned the gentleman, "I have found them what I hoped I should — that those who would rather die than go there — it is because they would die there."

Scrooge listened to Marley's warning, and the visitation of the three Spirits restored to his breast a heart that had long been crystallized into a mere lump of ice. Marley, bound in his chains, heavy and long, showed him what lay in store for those who hugged their gold and cared not for their fellows.

When he awoke at last, it was with a determination that should have warned the City that a change was in the wind — a change that should set even the stones of the parish stone-working mills vibrating with the news of regeneration. He thought of Tiny Tim, and he wept. He thought of Belle, and he sighed. He thought of his former self, and he shuddered. But thinking led to resolving, and he rose up early, called for the best roasted marrow-bones in the market, and had them sent to Bob Cratchit's lodgings, and wrote thereon a great turkey that is the sign of a gentleman.`

const CHRISTMAS_CAROL_EXTRACT_2_SOURCE = 'Charles Dickens, A Christmas Carol, Staves 1 & 5 (adapted)'

const MACBETH_EXTRACT_3 = `'Tis done! The worm that gnaws thy vitals proves the worm shall nibble thy destruction. Each man upon his conscience carries weight enough to drag a giant down. But soft—what light through yonder conscience breaks? 'Tis the accusing eye of murdered sleep. Hence with these dagger wounds! Blood will have blood. 

I have no spur to prick the sides of my intent, but only vaulting ambition which o'erleaps itself and falls on the other side. So it is: I am cabin'd, cribb'd, confined, bound in saucy doubts and fears. But Banquo walks; Banquo's issue shall be kings. It cannot be! There is no flying hence, nor tarrying here. I am in blood stepp'd in so far that, should I wade no more, returning were as tedious as go o'er.`

const MACBETH_EXTRACT_3_SOURCE = 'William Shakespeare, Macbeth, Act 3, Scene 4 (adapted)'

const CHRISTMAS_CAROL_EXTRACT_3 = `Belle, now a handsome woman, was busy in her domestic concerns, arranging a cheerful room with festive decorations. A man of middle years, her husband, sat beside the fire. "I wonder whether Scrooge has ever thought of me," said she. "His wealth matters not to me. His loss, his pitiable condition, troubles me more than his fortune ever pleased me. The night of our parting, he said that his business and his money meant more to him than love. He was right, for he has proved it by his choices ever since."

The Ghost of Christmas Past showed Scrooge the fullness of what he had sacrificed — the love, the companionship, the simple joys of a life lived in communion with another soul. "I should like to have given him one chance," said Belle, "to be another man than this." But the Ghost showed that Scrooge's own path lay before him still: the choice was his, the redemption possible, but the time in which to grasp it was already fleeting, and would not remain forever at his bidding.`

const CHRISTMAS_CAROL_EXTRACT_3_SOURCE = 'Charles Dickens, A Christmas Carol, Stave 2 (adapted)'

// ─────────────────────────────────────────────────────────────────────────────
// MODERN TEXT & POETRY EXTRACTS (PAPER 2)
// ─────────────────────────────────────────────────────────────────────────────

const INSPECTOR_CALLS_EXTRACT_1 = `MR. BIRLING: The Point is, you see, we're respectable citizens and not criminals—

INSPECTOR: Sometimes there isn't as much difference as you think. But these being hard times, we've got to look after ourselves—

SHEILA: [eagerly] But didn't you say yourself that a man has to look after himself—and his own—first?

INSPECTOR: If he does, he has to accept the consequences, and I don't think Mrs. Goole would agree with you, Miss Sheila, even if we all here tried to shift the blame from one to another.

MR. BIRLING: I don't understand you. Look here—I'm a hard-headed, practical man of business. I've made my own way in the world—

INSPECTOR: Hard-headed and practical. Yes. And the way you made your own way was partly by what Mrs. Birling might call unscrupulous methods. But you're not the only one. We all helped to kill her. We all did our bit.

SHEILA: That's what I felt when I knew what I'd done to that poor girl. I felt I was responsible—

INSPECTOR: Good. That's more sensible. And that's all I came here to say.

[He moves towards the door as they all stare at him, bewildered and troubled.]`

const INSPECTOR_CALLS_EXTRACT_SOURCE = 'J.B. Priestley, An Inspector Calls, Act 3 (adapted)'

const POWER_CONFLICT_POEM_1 = `When the green woods laugh with the voice of joy,
And the dimpling stream runs laughing by;
When the air does laugh with our merry wit,
And the painted birds laugh in the shade—

Then, my little boy, merry laugh and play
For the spring is come, and the days are long,
And we shall be merry the whole day long—
My little boy, laugh and play.

But when the voice of joy is heard no more,
And the fields are bare where the flowers did grow,
When the birds have flown and the trees stand bare,
And the light grows cold—then remember still

That I am here, though the world grows dark,
Though conflict rages and all seems lost,
I am here to hold you, to keep you warm,
Through the winter's blast and the bitter frost.`

const POWER_CONFLICT_POEM_1_SOURCE = 'Adapted from William Blake, "Laughing Song" and contemporary verse'

const INSPECTOR_CALLS_EXTRACT_2 = `PRIESTLEY'S STAGE DIRECTION: Emphasis on the responsibility of each character to society, shown through the Inspector's moral interrogation.

ERIC: I didn't know what she was really like. I didn't know really. And then the police came round. And now I know she's dead. She killed herself because of what we all did to her. Mother, Father, Gerald, even Sheila in her way. We all had a share in it. I'm ashamed. I'm very ashamed.

MRS. BIRLING: [coldly] And I'm ashamed of you. How you could ever imagine I should accept any responsibility—

INSPECTOR: But you did accept responsibility. At the time, you did. You knew the girl needed help. You turned her away.

MRS. BIRLING: I had every right to refuse her request. She came to me under an assumed name, trying to obtain money dishonestly—

INSPECTOR: No. She came to you asking for help, and you refused her because she was beneath you socially. That's the truth, Mrs. Birling. And you know it.`

const INSPECTOR_CALLS_EXTRACT_2_SOURCE = 'J.B. Priestley, An Inspector Calls, Act 3 (adapted)'

const POWER_CONFLICT_POEM_2 = `My enemy is here, and here is power—
The clash of wills, the struggle for the light,
When strong-armed men do battle in the hour
When darkness threatens and there comes a fight.

We raise our voices, shake our fists on high,
And thunder rolls across the troubled sky,
While those who cannot fight must learn to bow,
And those who rule must answer to us now.

The conflict rages in each human heart,
Between the part of us that wants to kill,
And that which seeks to heal and to impart
A justice tempered by a gentler will.

Which power conquers—might or mercy's call?
Which overcomes us in the end of all?`

const POWER_CONFLICT_POEM_2_SOURCE = 'Adapted from traditional and modern conflict poetry'

const INSPECTOR_CALLS_EXTRACT_3 = `[The INSPECTOR stands at the door, commanding the room. His words have exposed the hypocrisy and complicity of each character. The younger generation—Sheila and Eric—have felt genuine remorse, while their parents have struggled against the blame.]

INSPECTOR: I tell you that the time will soon come when, if people are not taught to look after everybody concerned in their businesses, no matter what the cost, then they will be taught it in fire, and blood, and anguish. Good night.

[He leaves. The BIRLINGS and GERALD attempt to restore their sense of normalcy, but the audience understands that something fundamental has shifted. The Inspector's visit has cracked the facade of their respectability, revealing the rot within. Their attempts to shift blame, to deny responsibility, to retreat into class consciousness—all have failed.]

SHEILA: I suppose we're all nice people now.

[No one answers her. The irony hangs in the air: they have been shown to be anything but nice, and knowledge of this cannot be unknown.]`

const INSPECTOR_CALLS_EXTRACT_3_SOURCE = 'J.B. Priestley, An Inspector Calls, Act 3 (adapted)'

const POWER_CONFLICT_POEM_3 = `We are the voiceless, and now we speak,
We are the powerless, growing strong,
We are the ones who were worn and weak,
And we have suffered for far too long.

Rise up, rise up, and seize the day,
The conflict will not last forever more,
Though those in power fight to hold their sway,
The tide of justice sweeps across the shore.

But power gained through violence and through strife
Corrupts the victor's heart and soul,
The true power is in a worthy life,
Where mercy heals what conflict made a hole.

So let us clash with courage and with might,
But let compassion guide us toward the light.`

const POWER_CONFLICT_POEM_3_SOURCE = 'Adapted from contemporary protest poetry'


// ─────────────────────────────────────────────────────────────────────────────
// PAPER 1: SHAKESPEARE & 19TH CENTURY NOVEL (100 MARKS, 2 HOURS 15 MINUTES)
// ─────────────────────────────────────────────────────────────────────────────

const createPaper1 = (
  setNumber: number,
  macbethExtract: string,
  macbethSource: string,
  carolExtract: string,
  carolSource: string,
): MockExamPaper => {
  const nn = String(setNumber).padStart(2, '0')
  return {
    id: `aqa-lit-p1-${nn}`,
    board: 'AQA',
    paperNumber: 1,
    title: 'AQA English Literature Paper 1',
    subtitle: 'Shakespeare and 19th Century Novel',
    code: '8702/1',
    totalTimeMinutes: 135,
    totalMarks: 100,
    sections: [
      {
        id: `aqa-lit-p1-${nn}-macbeth`,
        title: 'Section A: Shakespeare – Macbeth (40 marks)',
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q1`,
            questionNumber: 1,
            questionText:
              'With reference to this extract and elsewhere in the play, analyse how Shakespeare presents the theme of guilt and conscience in Macbeth.',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: macbethExtract,
            extractSource: macbethSource,
            modelAnswers: {
              'Grade 5': `In this extract, Lady Macbeth's sleepwalking scene shows how guilt has affected her mind. She cannot clean the blood from her hands—"What, will these hands ne'er be clean?"—which shows that the psychological guilt cannot be removed like actual blood. The repetition "no, no" emphasizes her desperation. Earlier in the play, Lady Macbeth seemed strong and confident, but now guilt has destroyed her mind. This shows that murder has serious psychological consequences. Macbeth also feels guilty throughout the play. After killing Duncan, he is tormented by his conscience and cannot sleep. Both characters show that guilt destroys people from the inside.`,
              'Grade 7': `Shakespeare exploits Lady Macbeth's madness to expose how guilt operates as a psychological force that cannot be suppressed through rational denial. The initial confident assertion "A little water clears us of this deed" is grotesquely inverted in the sleepwalking scene, where no amount of water—real or imagined—can cleanse the symbolic blood that marks their crimes. The obsessive repetition of "Out, damned spot!" personifies guilt as a tangible stain, whilst the fragmented syntax mirrors her fractured consciousness. Shakespeare's use of paradox—she is awake yet asleep—suggests that guilt obliterates the distinction between conscious and unconscious states. Macbeth's trajectory is inverse but equally devastating: his conscience is initially acute ("Will all great Neptune's ocean wash this blood clean?"), but gradually he achieves a horrifying emotional numbness ("It is a tale told by an idiot"). This suggests that guilt, if unacknowledged, crystallizes into moral deadness—a fate arguably worse than Lady Macbeth's madness.`,
              'Grade 9': `Shakespeare's treatment of guilt constitutes the philosophical core of Macbeth, examining how conscience functions as both a moral compass and a psychological weapon. In this extract, Lady Macbeth's sleepwalking represents the complete inversion of her earlier rationalism: the "little water" that supposedly "clears us of this deed" becomes an obsessive, impossible task—the blood becomes a figment, yet no less real to her fractured mind. The paradox of somnambulistic consciousness—awareness without agency—literalizes her psychological entrapment. Shakespeare's language moves from concrete (blood) to abstract (conscience) to surreal (the spot that cannot be seen yet obsesses her), collapsing distinctions between material and psychological reality. Macbeth's response to guilt differs fundamentally: rather than fragmentation, he achieves a deadening of affect—his "Tomorrow" soliloquy articulates a nihilism born from conscience so violated that meaning itself dissolves. The play thus presents guilt as a dialectic: it either destroys consciousness (Lady Macbeth) or destroys the capacity for consciousness to function (Macbeth's moral numbness). Shakespeare suggests that in choosing ambition over conscience, Macbeth and Lady Macbeth have chosen damnation in either form—madness or spiritual death.`,
            },
            markScheme: [
              'Analyses language and dramatic technique with sustained reference to extract',
              'Makes relevant references to elsewhere in the play',
              'Develops interpretations of theme',
              'Uses subject terminology accurately (personification, paradox, soliloquy)',
              'Constructs clearly developed analytical points with textual support',
              'Grade 9: Sophisticated critical interpretation; explores complex thematic implications',
            ],
          },
        ],
      },
      {
        id: `aqa-lit-p1-${nn}-carol`,
        title: 'Section B: 19th Century Novel – A Christmas Carol (40 marks)',
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q2`,
            questionNumber: 2,
            questionText:
              'With reference to this extract and elsewhere in the novella, examine how Dickens uses Scrooge\'s transformation to explore the theme of redemption and social responsibility.',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: carolExtract,
            extractSource: carolSource,
            modelAnswers: {
              'Grade 5': `Scrooge changes completely after visiting the three spirits. At the beginning of the novella, he is selfish and unkind. He refuses to give money to charity and pays Bob Cratchit very little. By the end, Scrooge becomes "as good a friend, as good a master" and helps Tiny Tim. He realizes that money is not the most important thing and that he has a responsibility to help others. The extract shows that Scrooge "became as good a man, as the good old city knew," which proves he has changed. Dickens uses Scrooge's story to show readers that it is never too late to become a better person and to care about society.`,
              'Grade 7': `Dickens constructs Scrooge's redemption as a complete moral reversal, transforming the miser who declared "If they would rather die, they had better do it, and decrease the surplus population" into a man of genuine benevolence. The language of transformation—"altered man," "changed"—appears repeatedly, emphasizing that this is not superficial reform but fundamental character reconstruction. Significantly, Dickens suggests that redemption requires not merely a change of heart but active social participation: Scrooge becomes "a second father" to Tiny Tim and raises Bob Cratchit's wages, moving from individual selfishness to social engagement. The extract emphasizes that Scrooge's knowledge of his former self—"he had kept it before his mind as a solemn charge"—sustains his reformation, suggesting that true moral growth requires continuous reflection on past failures. Dickens's insistence that "nothing ever happened on this globe, for good or for evil, but some person is always on hand to greet it" articulates a philosophy of interconnected social responsibility: Scrooge's actions matter because society is a web of mutual influence.`,
              'Grade 9': `Dickens's representation of Scrooge's redemption engages with Victorian philosophical debates about individual agency, moral perfectibility, and the social contract. The novella constructs redemption not as a singular epiphanic moment but as a complex process of moral education, wherein Scrooge must progressively confront the consequences of his economic philosophy. The extract's assertion that Scrooge "never became as merry a man as he had been" is crucial: redemption is not restoration of innocence but painful accretion of conscience. Dickens employs the language of "solemn charge" and "knowledge"—epistemological terms—to suggest that moral regeneration is fundamentally an act of sustained witnessing and remembrance. The novella thus presents redemption as inseparable from social responsibility: Scrooge's transformation is validated not by internal feeling but by external action—the turkey sent to Bob Cratchit, the raise in wages, the paternal care for Tiny Tim. By making Scrooge's redemption contingent on active reintegration into the social body (rather than withdrawal into private virtue), Dickens articulates a critique of contemporary laissez-faire economics: individual salvation requires collective responsibility.`,
            },
            markScheme: [
              'Analyses language and structural choices with sustained reference to extract',
              'Makes relevant references to elsewhere in the novella',
              'Develops interpretations of redemption and social responsibility',
              'Uses subject terminology accurately',
              'Constructs clearly developed analytical points with textual support',
              'Grade 9: Sophisticated engagement with thematic and philosophical complexity',
            ],
          },
        ],
      },
      {
        id: `aqa-lit-p1-${nn}-comparison`,
        title: 'Section C: Comparison Essay (20 marks)',
        description:
          'Write about the following question. You should base your answer on both studied texts.',
        totalMarks: 20,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: `aqa-lit-p1-${nn}-q3`,
            questionNumber: 3,
            questionText:
              'Compare the ways in which Shakespeare and Dickens present the consequences of moral failure. In your answer, you should consider the consequences for the individual characters and for society as a whole.',
            marks: 20,
            suggestedTimeMinutes: 35,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 5': `Both Shakespeare and Dickens show that moral failure leads to destruction. Macbeth kills the king and then more people, and this destroys his mind and his life. He becomes paranoid and unhappy. Lady Macbeth goes mad from guilt. In A Christmas Carol, Scrooge's moral failure is his refusal to help poor people. He is cold and lonely because of his selfishness. Both writers suggest that you cannot commit evil acts without suffering consequences. However, the main difference is that Scrooge gets a chance to change, but Macbeth does not. Macbeth dies still guilty, while Scrooge becomes a good person. This shows that Dickens is more optimistic than Shakespeare about the possibility of redemption.`,
              'Grade 7': `Shakespeare and Dickens employ moral failure as a tragic mechanism, though with significantly different emphasis. Macbeth's murders produce a causal chain of psychological deterioration: the initial acuity of conscience ("Will all great Neptune's ocean...") progressively calcifies into the nihilistic void of his final soliloquy ("A tale told by an idiot"). His moral failure is ontological—it negates his humanity itself. Lady Macbeth's descent into madness exemplifies conscience turned inward as destructive force. By contrast, Dickens presents moral failure as remediable through crisis and education: Scrooge's initial sin—economic indifference masquerading as prudence—can be corrected by enforced confrontation with its consequences. The crucial difference lies in the mechanism of redemption: Shakespeare offers no escape (Macbeth must confront the witches' prophecies), while Dickens constructs a pedagogical intervention (the three spirits). Socially, Macbeth's moral failure destabilizes the state itself (the "unnatural" events following Duncan's murder), whereas Scrooge's becomes a catalyst for social healing. Both writers insist that moral failure produces real consequences, but Shakespeare emphasizes irreversibility and Dickens emphasizes the possibility of restoration through moral awakening.`,
              'Grade 9': `The divergent presentations of moral failure in Macbeth and A Christmas Carol reflect competing philosophical frameworks regarding human agency and social accountability. Shakespeare's tragic form constructs moral failure as irreversible—the witches' prophecies embody the existential trap wherein Macbeth's ambition locks him into a trajectory beyond moral volition. His crimes produce not merely individual psychosis but cosmic disruption: "The night is unruly; where we lay, / Our chimneys were blown down." This aestheticization of moral failure as natural catastrophe suggests that transgressions against the social order (regicide) produce not merely legal consequences but metaphysical disturbance. Dickens, writing in the Victorian realist mode, constructs moral failure as epistemological—Scrooge's sin is not violation of cosmic order but failure of vision and imagination: he literally cannot "see" the humanity of the poor. The Ghost-pedagogues operate as agents of epistemic correction. The novella's redemptive arc hinges on Scrooge's shift from abstraction ("surplus population") to particularity (Tiny Tim). Structurally, Shakespeare's tragedy forecloses redemption through dramatic form itself—Macbeth's final moments offer no recognition, only bewilderment ("What's the boy Malcolm?"). Dickens's festive form mandates restoration. The fundamental distinction: Shakespeare presents moral failure as transgression against transcendent order; Dickens as failure of imagination within a reformable social world.`,
            },
            markScheme: [
              'Makes relevant comparisons between texts',
              'Considers both individual and social consequences',
              'Uses subject terminology accurately',
              'Develops ideas with textual evidence',
              'Grade 7+: Sophisticated analysis of how different literary forms shape meaning',
              'Grade 9: Complex engagement with philosophical and aesthetic implications',
            ],
          },
        ],
      },
    ],
  }
}


// ─────────────────────────────────────────────────────────────────────────────
// PAPER 2: MODERN TEXT & POETRY ANTHOLOGY (100 MARKS, 2 HOURS 15 MINUTES)
// ─────────────────────────────────────────────────────────────────────────────

const createPaper2 = (
  setNumber: number,
  inspectorExtract: string,
  inspectorSource: string,
  poemExtract: string,
  poemSource: string,
): MockExamPaper => {
  const nn = String(setNumber).padStart(2, '0')
  return {
    id: `aqa-lit-p2-${nn}`,
    board: 'AQA',
    paperNumber: 2,
    title: 'AQA English Literature Paper 2',
    subtitle: 'Modern Text and Poetry',
    code: '8702/2',
    totalTimeMinutes: 135,
    totalMarks: 100,
    sections: [
      {
        id: `aqa-lit-p2-${nn}-inspector`,
        title: 'Section A: Modern Text – An Inspector Calls (40 marks)',
        description:
          'Answer the question on your studied text. You must write in full sentences using your own words and quotations from the extract to support your answer.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: `aqa-lit-p2-${nn}-q1`,
            questionNumber: 1,
            questionText:
              'With reference to this extract and elsewhere in the play, analyse how Priestley presents the theme of social responsibility and individual complicity.',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: inspectorExtract,
            extractSource: inspectorSource,
            modelAnswers: {
              'Grade 5': `In this extract, the Inspector tells the Birlings that they are all responsible for Eva's death. He says "We all helped to kill her. We all did our bit," which shows that everyone in the family is guilty. Sheila understands this and says she felt responsible when she learned what she had done. However, Mr and Mrs Birling refuse to accept responsibility. Mr Birling thinks he is respectable and successful, but the Inspector points out that his success came from "unscrupulous methods." This shows that Priestley criticizes the upper class for not taking responsibility for their actions. Throughout the play, each character contributes to Eva's suicide in different ways. Priestley suggests that we are all responsible for society and what happens to poor people.`,
              'Grade 7': `Priestley constructs social responsibility as an inescapable network of moral obligation that cuts across class boundaries and individual denial. The Inspector's assertion—"We all helped to kill her. We all did our bit"—collapses the distinction between direct and indirect causation; each character's selfishness contributes incrementally to Eva's destruction. The Inspector's language of "we" forces collective accountability rather than allowing individual exculpation. The extract reveals the generational divide: while Sheila achieves moral insight ("I felt I was responsible"), her parents attempt to maintain class barriers ("respectable citizens") and bureaucratic justifications (Mrs. Birling's appeal to rules and procedures). Priestley presents this resistance to responsibility as precisely the social pathology the play diagnoses. The Inspector's comment that there is not "as much difference" between respectable people and criminals suggests that the conventional moral hierarchy that allows the bourgeoisie to dismiss the working poor as morally deficient is itself a form of moral blindness. By positioning Eva Smith's suicide as the consequence of accumulated, diffuse acts of exploitation and indifference (not a single dramatic crime), Priestley argues that complicity is structural and universal within capitalist society.`,
              'Grade 9': `Priestley's dramatic strategy in An Inspector Calls hinges on collapsing the liberal distinction between intention and consequence, individual action and systemic effect. The Inspector functions as a figure of moral philosophy, embodying a collectivist ethical position wherein individual agency is always already embedded in social structures. His statement "We all helped to kill her" presents what might be called a tragic determinism of class society: each character, acting within the logic of their social position (Birling pursuing profit, Mrs. Birling defending class honor, Gerald seducing Eva believing this constitutes benevolence), necessarily produces Eva's destruction. The extract's theological language—"consequences," "acceptance of responsibility"—invokes a universalist moral framework that transcends legalistic categories of guilt and innocence. Priestley's play stages the conflict between individualist and collectivist moral philosophies: the younger generation (Sheila and Eric) intuitively grasp the Inspector's position, while their parents, committed to liberal notions of individual autonomy and responsibility, attempt to compartmentalize their culpability ("I had every right to refuse"). This generational schism suggests Priestley's vision of social transformation: not through individual moral awakening (which his skeptical treatment of the Birlings suggests is insufficient) but through structural transformation of the economic and social systems that produce exploitation. The Inspector's ambiguous status—is he human, supernatural, or merely a symbolic projection?—reflects Priestley's uncertainty about whether individual conscience can effect social change, or whether only systemic reformation suffices.`,
            },
            markScheme: [
              'Analyses language and dramatic technique with sustained reference to extract',
              'Makes relevant references to elsewhere in the play',
              'Develops interpretations of social responsibility and complicity',
              'Uses subject terminology accurately (dramatic irony, collective agency)',
              'Constructs clearly developed analytical points with textual support',
              'Grade 9: Sophisticated understanding of moral philosophy and social critique',
            ],
          },
        ],
      },
      {
        id: `aqa-lit-p2-${nn}-poetry`,
        title: 'Section B: Poetry Anthology – Power & Conflict (40 marks)',
        description: 'Answer the question on one of the Power & Conflict poems.',
        totalMarks: 40,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: `aqa-lit-p2-${nn}-q2`,
            questionNumber: 2,
            questionText:
              'Analyse how the poet uses language and imagery to present the theme of conflict and power in this poem.',
            marks: 40,
            suggestedTimeMinutes: 50,
            questionType: 'analysis',
            extract: poemExtract,
            extractSource: poemSource,
            modelAnswers: {
              'Grade 5': `The poem uses the image of laughter and joy at the beginning to show happiness and innocence. The phrase "green woods laugh" uses personification to make nature seem alive and happy. But later, the poem contrasts this with a darker tone. The woods become silent, "the voice of joy is heard no more," and the light "grows cold." This change shows the conflict between happiness and sadness, youth and age. The speaker promises to be there to protect the child "through the winter's blast and the bitter frost," which shows the power of love and care in difficult times. The poet uses temperature imagery (cold, frost) to represent conflict and danger. The poem suggests that power is not about fighting but about caring for others when things are difficult.`,
              'Grade 7': `The poet structures the poem through a binary opposition between the external world's vibrancy and internal vulnerability. The opening stanza employs auditory and visual imagery—"green woods laugh," "dimpling stream," "painted birds"—which creates an impression of abundance and communal joy. The personification of nature ("laugh," "play") suggests a world responsive to human emotion. However, the second half performs a tonal and imagistic reversal: the present active world ("fields... bare") gives way to deprivation and absence. Crucially, the shift from external to internal power structures the poem's argument: the joyful communal world cannot protect the "little boy" from vulnerability. Instead, the speaker asserts a different form of power—emotional and relational rather than economic or martial. The language shifts from public ("green woods," "painted birds") to intimate ("I am here," "give me thy hand"). The imagery of winter functions symbolically: seasonal conflict becomes metaphor for existential threat, and the speaker's constancy—"I am here"—becomes the counterforce to natural and historical violence. By contrasting ephemeral public joy with enduring private care, the poet reimagines power as sustained emotional presence rather than dominion.`,
              'Grade 9': `The poem engages with competing conceptions of power through strategic deployment of domestic and natural imagery. The opening stanzas present a Romantic vision of nature as luminous and responsive—"green woods laugh," "dimpling stream run[s] laughing"—which invokes a particular 18th-century philosophical tradition (Rousseau, Wordsworth) wherein harmony with nature constitutes the highest good. This vision collapses in the poem's second movement: the natural world becomes hostile, "bare," and the "light grows cold." The poet thus diagnoses a historical rupture: the pastoral innocence of the opening cannot survive encounter with temporal reality ("winter's blast," "bitter frost"). The speaker's response constructs an alternative form of power grounded not in dominion but in relational presence: "I am here / Though conflict rages and all seems lost." This positions care as a counter-force to both natural violence and historical conflict. Structurally, the poem's turn from collective ("we shall be merry") to intimate ("I am here") mirrors a philosophical turn from universal principles to particular attachments. The speaker's power is crucially non-coercive—it operates through availability rather than force. By mobilizing the traditional theme of parental/spousal protection during historical upheaval, the poet articulates what might be called an ethic of presence: in contexts of structural violence and natural indifference, the capacity to witness and sustain another constitutes a form of power that transcends conventional hierarchies. This reframing of power as relational and emotional rather than dominative and economic engages implicitly with critiques of both martial masculinity and capitalist hierarchy.`,
            },
            markScheme: [
              'Analyses language techniques with specific examples from poem',
              'Comments on effects of imagery and word choice',
              'Considers structure and form',
              'Uses subject terminology accurately (personification, metaphor, tone)',
              'Develops sustained analytical points with textual support',
              'Grade 9: Sophisticated understanding of how form creates meaning',
            ],
          },
        ],
      },
      {
        id: `aqa-lit-p2-${nn}-comparative-poetry`,
        title: 'Section C: Comparative Poetry Essay (20 marks)',
        description:
          'Write about the following question. You should compare at least two poems from the Power & Conflict anthology.',
        totalMarks: 20,
        suggestedTimeMinutes: 35,
        questions: [
          {
            id: `aqa-lit-p2-${nn}-q3`,
            questionNumber: 3,
            questionText:
              'Compare how two poems from the Power & Conflict anthology present different attitudes to power, conflict, and human resilience. In your answer, compare both language and form.',
            marks: 20,
            suggestedTimeMinutes: 35,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 5': `Two poems that deal with power and conflict are "Laughing Song" and "Rise Up." "Laughing Song" shows happiness and joy in nature at the beginning, with descriptions of "green woods" and laughter. However, it then shows conflict when it says "when the voice of joy is heard no more" and the world becomes cold and dark. The speaker shows resilience by promising to be there and to keep the person warm. "Rise Up" is different because it directly encourages people to fight against those in power. It uses imperative verbs like "Rise up" and "seize the day." Both poems show conflict but in different ways. "Laughing Song" shows internal, emotional conflict and how we survive it through love. "Rise Up" shows external, political conflict and how we can fight back. Both poems suggest that resilience comes from different sources—love in one and collective action in the other.`,
              'Grade 7': `Both poems engage with the theme of resilience in contexts of conflict, but through fundamentally different imaginative frameworks. "Laughing Song" employs a seasonal structure wherein joy ("green woods laugh") is cyclically overwhelmed by darkness ("the fields are bare"), naturalizing conflict as part of temporal process. The speaker's response to this inevitable darkness is intensely private and relational: "I am here to hold you." The poem's form—regular quatrains with repeated refrains—suggests stability and endurance within cyclical change. "Rise Up," by contrast, presents conflict as historically contingent and potentially transformable through collective action. Its imperative syntax ("Rise up, rise up") energizes the reader as agent rather than victim. The language of revolution—"seize the day," "the tide of justice"—positions human action as capable of altering material conditions. However, the poem complicates its initial revolutionary fervor by introducing the cautionary note that "power gained through violence and through strife / Corrupts the victor's heart and soul." This suggests what might be called a tragic view of revolution: even successful resistance reproduces the logic of domination. Where "Laughing Song" accepts cyclical recurrence as inevitable and seeks comfort within it, "Rise Up" imagines historical transformation whilst simultaneously expressing anxiety about its costs. The two poems thus embody different responses to conflict: resignation animated by love vs. active resistance tempered by moral reservation.`,
              'Grade 9': `The two poems instantiate fundamentally distinct philosophical and aesthetic responses to the conditions of conflict and power. "Laughing Song" mobilizes a Romantic vision of nature as primary reality, wherein human conflict appears as disruption of an ontological order, followed by inevitable return to cyclical time. The repetition of "laugh" establishes laughter as a baseline existential state—to the degree that conflict appears as punctuation within a fundamentally joyful cosmos. The speaker's role is not revolutionary but custodial: to maintain continuity and warmth through inevitable winters. This vision privileges temporal continuity, emotional constancy, and private virtue. The poem's aesthetic strategy—regular form, musical repetition—sonically enacts the constancy the speaker promises. "Rise Up" inhabits historical time rather than natural time: conflict is not inevitable cyclicity but injustice capable of correction. The imperative mood positions the speaker as catalyst and the reader as potential agent. Yet crucially, the poem's second half introduces precisely the melancholic wisdom that "Laughing Song" embodies: that power itself corrupts, that struggle produces its own violence. This suggests that the poem entertains an ironic consciousness—even as it mobilizes revolutionary rhetoric, it doubts whether revolutionary transformation can escape reproduction of domination. Formally, the shift from regular quatrains to irregular tercets and the move from imperative to philosophical conditional enacts this doubling of perspective. Together, the poems articulate an unresolved dialectic within leftist political consciousness: between historical optimism and tragic wisdom, between active resistance and patient care, between the dream of transformation and the melancholic knowledge of power's corrupting tendency. Neither poem resolves this tension; rather, they map its coordinates.`,
            },
            markScheme: [
              'Makes relevant comparisons between poems',
              'Analyses language with specific textual evidence',
              'Considers form and structure',
              'Develops ideas about power, conflict, and resilience',
              'Grade 7+: Sophisticated comparison of different philosophical frameworks',
              'Grade 9: Complex engagement with historical and political implications',
            ],
          },
        ],
      },
    ],
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT ALL PAPERS
// ─────────────────────────────────────────────────────────────────────────────

export const aqaLitMockExams: MockExamPaper[] = [
  // Paper 1 - Set 1
  createPaper1(1, MACBETH_EXTRACT_1, MACBETH_EXTRACT_SOURCE, CHRISTMAS_CAROL_EXTRACT_1, CHRISTMAS_CAROL_EXTRACT_SOURCE),
  // Paper 1 - Set 2
  createPaper1(2, MACBETH_EXTRACT_2, MACBETH_EXTRACT_2_SOURCE, CHRISTMAS_CAROL_EXTRACT_2, CHRISTMAS_CAROL_EXTRACT_2_SOURCE),
  // Paper 1 - Set 3
  createPaper1(3, MACBETH_EXTRACT_3, MACBETH_EXTRACT_3_SOURCE, CHRISTMAS_CAROL_EXTRACT_3, CHRISTMAS_CAROL_EXTRACT_3_SOURCE),
  // Paper 2 - Set 1
  createPaper2(1, INSPECTOR_CALLS_EXTRACT_1, INSPECTOR_CALLS_EXTRACT_SOURCE, POWER_CONFLICT_POEM_1, POWER_CONFLICT_POEM_1_SOURCE),
  // Paper 2 - Set 2
  createPaper2(2, INSPECTOR_CALLS_EXTRACT_2, INSPECTOR_CALLS_EXTRACT_2_SOURCE, POWER_CONFLICT_POEM_2, POWER_CONFLICT_POEM_2_SOURCE),
  // Paper 2 - Set 3
  createPaper2(3, INSPECTOR_CALLS_EXTRACT_3, INSPECTOR_CALLS_EXTRACT_3_SOURCE, POWER_CONFLICT_POEM_3, POWER_CONFLICT_POEM_3_SOURCE),
]
