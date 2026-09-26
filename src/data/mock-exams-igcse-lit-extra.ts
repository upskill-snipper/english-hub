// @ts-nocheck
/**
 * Edexcel IGCSE English Literature: six practice papers, three on drama and
 * the poetry anthology and three on unseen prose and poetry. Nothing imports
 * this file, so the site serves none of these papers. It is kept honest all
 * the same, because it sits in a public repository and could be wired in.
 *
 * WHAT WAS WRONG, AND WHAT WAS DONE (27 September 2026). The mock-exam
 * extract audit (scripts/check-mock-exam-extracts.mjs) and a reading of every
 * model answer found the following.
 *
 * - The Tempest extract was Prospero's "Our revels now are ended", which is
 *   in Act 4 Scene 1, labelled and introduced as Act 5 Scene 1, with one
 *   sentence punctuated unlike the edition. It is now his whole speech, cut
 *   from the held edition by playPassage(), and the label, question and model
 *   answers place it where it is: after the masque, which Prospero breaks off
 *   when he remembers Caliban's plot, and ending "Sir, I am vex'd". One answer
 *   listed "silk" among the speech's images; the word is not in it.
 * - The Tempest essay answer (no extract) quoted two lines that are not in
 *   the held edition, gave Caliban's "barnacles" line to Prospero, and put
 *   the charge against Caliban in Act 2 Scene 2 (it is made in Act 1 Scene 2).
 *   It was written again with quotations checked against the held edition,
 *   and the question now names the play, so the checker can read those
 *   quotations: it skips an essay question that names no work, which is how
 *   these survived.
 * - The Doctor Faustus extract had one sentence punctuated unlike either
 *   quarto. It is now cut by script from the posthumous 1604 quarto as
 *   Alexander Dyce prints it (Project Gutenberg #779), never retyped, with the
 *   stage direction the edition prints and its footnote numbers removed. Its
 *   answer cited an "Act 5, Scene 2 revelation" that Helen is a demon, but
 *   neither Gutenberg quarto has act or scene headings and neither says so of
 *   Helen; the answer now cites what Faustus tells the Emperor about the
 *   spirits he raises.
 * - The checker still calls this extract 50% verbatim, wrongly: it strips
 *   "[Kisses her.]" from the passage but not from the Gutenberg text, and
 *   leaves a stray "/" where that direction sat between two line marks. (It
 *   also kept the footnote number "[163]" until it learned, the same day, to
 *   drop bare footnote numbers.) A line-by-line comparison with #779 found all
 *   eight lines identical once its footnote numbers are removed. The answer
 *   calls "Kisses her" the direction this edition prints, not Marlowe's, since
 *   Dyce's text is the only one checked.
 * - Six passages that no question printed were deleted rather than repaired:
 *   a "Duchess of Malfi" speech of which only the first sentence is
 *   Webster's; an "Othello" passage splicing three moments of Act 5 Scene 2
 *   with a line that is not in the play; and four pieces of invented verse and
 *   drama named after real writers or their titles (Karam, Duffy, Clarke,
 *   Motion). No question needed them, and a repaired passage that nothing
 *   prints is still dead text in a public repository.
 * - The paper 2 anthology answer quoted two poems the paper never printed:
 *   the invented "Duffy" verse deleted above, and a burial poem found nowhere
 *   in the file. The question now prints Piano and La Belle Dame sans Merci,
 *   both Edexcel IGCSE anthology poems, cut from the held editions by
 *   passage(), and the answer was written again for them.
 * - The two poems once attributed to Derek Mahon and Liz Lochhead were
 *   written for this file. Their labels now say so, in place of "Anonymous
 *   (twentieth-century poetic style ...)", which read as a real poem by an
 *   unknown poet, and their answers no longer misquote them or describe
 *   questions and features the poems do not have.
 * - Other answers quoted "Afterward, guilt would be a manageable thing." as
 *   the end of Passage B (it is from another paper's passage), "to erase"
 *   where the poem says "might erase", "She held it" where the passage says
 *   "Helen held it", a letter's greeting with the narrator's words cut out of
 *   it, and "ocean/swimmers" imagery from a poem on no paper. The prose
 *   passages joined dashes to words ("observations-the man"), which made any
 *   quotation beginning or ending at a dash unfindable; those dashes are now
 *   colons, brackets or commas.
 * - The paper 2 drama question printed 88 words labelled "Arthur Miller, The
 *   Crucible". Miller died in 2005, so the play is in UK copyright until the
 *   end of 2075, and the house limit is 14 words a quotation
 *   (src/lib/study-guides/fair-dealing.ts). Whether the words were even
 *   Miller's could not be checked, because the text is not held, yet the
 *   answer quoted every line back as his. The question now prints Macbeth's
 *   "If it were done" soliloquy and the exchange with Lady Macbeth that
 *   follows (Act 1 Scene 7), cut from the held edition by playPassage(), and
 *   asks the same thing of it: a character's conflict of conscience in
 *   language and dramatic action. Macbeth is listed for the Edexcel
 *   International GCSE in src/lib/board/set-texts.ts; The Crucible is not
 *   listed there at all.
 * - Two sections titled "Poetry Anthology" printed a poem written for this
 *   file. They are now titled "Poetry".
 *
 * The checker reads only string literals as passages. The passages cut here
 * at load time (The Tempest, Macbeth, Piano, La Belle Dame sans Merci) are
 * therefore checked through the questions that print them, and cannot differ
 * from the editions, because they are the editions.
 */

import { laBelleDameSansMerciText } from '@/data/full-texts/la-belle-dame-sans-merci'
import { macbethText } from '@/data/full-texts/macbeth'
import { pianoText } from '@/data/full-texts/piano'
import { theTempestText } from '@/data/full-texts/the-tempest'
import { passage, playPassage } from '@/lib/study-guides/passage'
import type { MockExamPaper, MockExamSection, MockExamQuestion } from './mock-exams'

// ═════════════════════════════════════════════════════════════════════════════
// PAPER 1: DRAMA AND POETRY ANTHOLOGY (105 minutes, 80 marks)
// ═════════════════════════════════════════════════════════════════════════════

// ─── Section A: Drama Extracts ─────────────────────────────────────────────────
//
// Of these three plays only Macbeth is among the Edexcel International GCSE
// texts in src/lib/board/set-texts.ts, though this heading used to call all
// of them approved.

// Prospero's whole speech in Act 4 Scene 1, cut from the held edition
// (Project Gutenberg #1540) by playPassage(), which throws rather than drift
// if either phrase stops being found. It was typed in, and labelled Act 5.
const DRAMA_EXTRACT_1_TEMPEST = playPassage(
  theTempestText,
  'activ-scenei',
  'You do look, my son',
  'To still my beating mind',
)

// Macbeth's "If it were done" soliloquy and the exchange with Lady Macbeth
// that follows it, to his "We will proceed no further", cut from the held
// edition by playPassage(). It replaces an 88-word "Crucible" extract: see
// the header.
const DRAMA_EXTRACT_2_MACBETH = playPassage(
  macbethText,
  'acti-scenevii',
  'If it were done',
  'We will proceed no further',
)

/* Christopher Marlowe, Doctor Faustus, the posthumous 1604 quarto as Alexander Dyce prints it (Project Gutenberg #779), cut from that file by script, never typed. */
const DRAMA_EXTRACT_4_MARLOWE = `FAUSTUS: Was this the face that launch'd a thousand ships,
And burnt the topless towers of Ilium--
Sweet Helen, make me immortal with a kiss.--
[Kisses her.]
Her lips suck forth my soul: see, where it flies!--
Come, Helen, come, give me my soul again.
Here will I dwell, for heaven is in these lips,
And all is dross that is not Helena.`

// ─── Section B: Poetry Extracts ───────────────────────────────────────────────

// Specially written for this file, not published poems (see the header).
const POETRY_EXTRACT_3_EVERYTHING = `Everything Everything

Everything everything must go-
the prices slashed, the stock reduced to nothing.
Nothing will remain of this: no memory,
no evidence that we were ever here.`

const POETRY_EXTRACT_5_THE_KREWE = `The Krewe

Listen: they come, bright with their own parade,
masked and gilded, carrying torches high.
Behind their masks, who knows what faces wait-
what wounds, what wonders, what they hide.`

// Two Edexcel IGCSE anthology poems for paper 2's comparison question, cut
// whole from the held editions by passage(): Piano from New Poems (1918,
// Project Gutenberg #22726), and La Belle Dame sans Merci in its
// "knight-at-arms" text (Project Gutenberg #36356). Both are out of UK
// copyright. They replace two invented poems the answer quoted but no
// paper printed.
const POEM_PIANO = passage(
  pianoText,
  'poem',
  'Softly, in the dusk',
  'I weep like a child for the past',
)

const POEM_LA_BELLE_DAME = passage(
  laBelleDameSansMerciText,
  'poem',
  'O what can ail thee',
  'Though the sedge is withered',
)

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 1: Drama Focus (The Tempest)
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_1_DRAMA: MockExamPaper = {
  id: 'igcse-lit-extra-001',
  board: 'IGCSE',
  paperNumber: 1,
  title: 'Edexcel IGCSE English Literature - Paper 1 Mock Exam 1 (Drama Focus)',
  subtitle: 'The Tempest and Poetry',
  code: '4ET1/01',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-drama',
      title: 'Section A: Drama',
      description:
        'Answer one question from this section. Study the extract and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-drama-1',
          questionNumber: 1,
          questionText: `Read the following extract from Act 4, Scene 1 of The Tempest. Prospero has just broken off the masque he staged for Ferdinand and Miranda, because he has remembered Caliban's plot against his life, and he reflects on the passing of all earthly things and of human life. Analyse how Shakespeare uses language and imagery to convey Prospero's thoughts. In your response, you should consider the dramatic context, poetic devices, and what this speech reveals about Prospero's character and his development.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: DRAMA_EXTRACT_1_TEMPEST,
          extractSource: 'William Shakespeare, The Tempest, Act 4, Scene 1',
          modelAnswers: {
            'Band 5 (32-40)': `Shakespeare places this speech at a moment of disturbance, not serenity. Prospero has just broken off the masque celebrating Ferdinand and Miranda's betrothal, because he has remembered "that foul conspiracy / Of the beast Caliban", and Miranda has never before seen him "touch’d with anger so distemper’d". The speech begins by calming Ferdinand ("be cheerful, sir") and turns, in its last six lines, to Prospero's admission "Sir, I am vex’d", so its meditation on mortality is framed by agitation. That frame matters: the philosophy is how Prospero steadies himself, and the last line, "To still my beating mind", shows that it has not yet worked.

"Our revels now are ended" is metatheatrical. The "actors" of the masque "were all spirits", and they have "melted into air, into thin air"; the repetition, narrowing to "thin", enacts the fading it describes. The metaphor then widens from the masque to the world. The phrase "the baseless fabric of this vision" is a paradox, a building with no foundation. The list "The cloud-capp’d towers, the gorgeous palaces, / The solemn temples, the great globe itself" builds grandeur phrase by phrase, and "the great globe" may glance at the Globe, the King's Men's playhouse, so that the theatre itself is among the things that "shall dissolve". The spectacle will "Leave not a rack behind": not even a wisp of cloud will remain.

The turn at "We are such stuff / As dreams are made on" moves from the world to human beings. We are the material that dreams are made of, not merely dreamers, which makes identity itself insubstantial. "our little life / Is rounded with a sleep" presents life as a small space enclosed by sleep, a gentle image of death, as if the same unconsciousness lay before birth and after it.

Then the tone drops: "Bear with my weakness; my old brain is troubled". The magician who commands spirits confesses age and "infirmity". This prepares for Act 5, where Prospero decides that "the rarer action is / In virtue than in vengeance" and promises to "break my staff". The speech is therefore a step in his development rather than its end: he can see that his art and his power are as temporary as the masque, but he is still angry, and he must walk "a turn or two" to calm himself. The audience watches a powerful man beginning to accept the limits of power and of life.`,
            'Band 4 (24-31)': `Shakespeare uses the ending of the masque to explore the temporary nature of everything human. Prospero has stopped the masque because he has remembered Caliban's plot against his life, and he tells Ferdinand that "Our revels now are ended". The actors "were all spirits" and have "melted into air, into thin air", and he extends this to the whole world: "The cloud-capp’d towers, the gorgeous palaces, / The solemn temples, the great globe itself" will all "dissolve" and "Leave not a rack behind". The list builds up grandeur only to take it away.

The key metaphor "We are such stuff / As dreams are made on" connects human existence to dreams, suggesting that life is unreal and brief. "our little life / Is rounded with a sleep" uses sleep as a metaphor for death, and "little" makes human life seem small.

In the last lines of the speech Prospero admits "Sir, I am vex’d" and that "my old brain is troubled". This shows that he is not calm: he is still angry about the conspiracy. His thoughts about mortality prepare for Act 5, when he gives up his magic and forgives his enemies, so the speech shows him moving towards wisdom.`,
            'Band 3 (16-23)': `Shakespeare uses this speech to show Prospero thinking about death and the temporary nature of life. He compares the masque, which has just ended, to life itself: the actors "Are melted into air", and so will everything else be.

The language describes grand things, "towers", "palaces" and "temples", but says they will "dissolve". This contrast between grandeur and disappearance is the main idea of the speech. Phrases like "baseless fabric" and "insubstantial pageant" show that things which seem solid are actually temporary.

The statement "We are such stuff / As dreams are made on" and the image of life "rounded with a sleep" both suggest that human life is short. Sleep might represent death. At the end Prospero says his "old brain is troubled", which shows he is still upset about Caliban's plot, so he is not completely calm.`,
          },
          markScheme: [
            'Analyse Shakespeare\'s use of theatrical metaphor (the masque\'s "actors", the "pageant") and its effectiveness in conveying impermanence',
            'Discuss the imagery of grandeur and dissolution: towers, palaces, temples, "the great globe itself"',
            'Examine language devices: repetition, paradox ("baseless fabric"), metaphor (dreams, sleep)',
            'Consider the philosophical implications of equating human life with dreams and theatrical performance',
            'Evaluate the dramatic significance of the frame: the speech calms Ferdinand, then turns to Prospero\'s admission that he is "vex’d" and "troubled"',
            "Discuss context: the masque broken off by Prospero's memory of Caliban's plot, and his choice of virtue over vengeance in Act 5",
            'Consider how the speech reflects Renaissance ideas about the nature of reality and human insignificance',
          ],
        },
        {
          id: 'q2-drama-1',
          questionNumber: 2,
          questionText: `Analyse how Shakespeare presents the theme of power and control in The Tempest through a key dramatic moment or relationship. You should refer closely to the text, considering dramatic techniques, character interactions, and the broader significance of power dynamics within the play.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          modelAnswers: {
            'Band 5 (32-40)': `In The Tempest, power and control shape almost every relationship, and Prospero's dealings with Ariel and Caliban show them most clearly. Prospero controls Ariel through a bargain of service for freedom. When Ariel asks "Is there more toil?" and reminds him of "what thou hast promis’d, / Which is not yet perform’d me", Prospero answers "How now! moody?" and then threatens: "If thou more murmur’st, I will rend an oak / And peg thee in his knotty entrails". Shakespeare shows the powerful recasting a servant's fair claim as ingratitude, and control resting on fear as much as on Ariel's debt for being freed from "what a torment" Sycorax had left him in.

Prospero's treatment of Caliban reveals darker aspects of control. Caliban's "This island’s mine, by Sycorax my mother, / Which thou tak’st from me" presents Prospero as a usurper, and "You taught me language, and my profit on ’t / Is, I know how to curse" turns the gift of education into an instrument of domination, which Caliban can use only to resist. Prospero's answer, in Act 1, Scene 2, is that Caliban sought "to violate / The honour of my child", and he keeps him in check with threats of cramps and pinches. Caliban's rebellion with Stephano and Trinculo, though comic, shows him exchanging one master for another as he sings that he "Has a new master".

Prospero's magic is power as theatre. The vanishing banquet of Act 3, Scene 3 leaves his enemies "knit up / In their distractions", and he gloats that "they now are in my power". In the masque of Act 4 he calls the performers "Spirits, which by mine art / I have from their confines call’d to enact / My present fancies". Even the love of Ferdinand and Miranda is managed: "this swift business / I must uneasy make, lest too light winning / Make the prize light." His aside "It goes on, I see, / As my soul prompts it" shows how far he treats even their love as part of his design.

The resolution transforms power. Prospero decides that "the rarer action is / In virtue than in vengeance", promises to "break my staff" and "drown my book", sets Ariel free "to the elements", and forgives Antonio: "I do forgive / Thy rankest fault". His "this thing of darkness I / Acknowledge mine" accepts some responsibility for Caliban. Shakespeare thus presents power as problematic, generating resentment and resistance, and suggests that its best use lies in its voluntary relinquishment.`,
          },
        },
      ],
    },
    {
      id: 'section-b-poetry',
      // Not "Poetry Anthology": the poem it prints was written for this file.
      title: 'Section B: Poetry',
      description:
        'Answer one question from this section. Study the extract and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q3-poetry-1',
          questionNumber: 3,
          questionText: `Read the following poem. Analyse how the poet uses language and form to explore loss and memory. Consider the poet's choice of imagery, tone, and structure in your response.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: POETRY_EXTRACT_3_EVERYTHING,
          extractSource: 'Specially written for this mock exam; not a published poem',
          modelAnswers: {
            'Band 5 (32-40)': `The poem uses a deceptively simple form to convey anxiety about loss and erasure. The repetition of "Everything everything" in the opening line establishes a tone of urgency and inevitability. The poem's central move is to let the language of a closing-down sale ("the prices slashed, the stock reduced to nothing") stand for something larger, so that everyday retail language becomes a comment on loss. The phrase "must go" carries a double meaning: the goods must be sold, and everything, people included, must pass away.

The repetition of "nothing" across the line break, "the stock reduced to nothing. / Nothing will remain", makes the last word of one line the first word of the next, so that the idea of nothing carries forward and grows. Placed at the start of the line, and capitalised there, "Nothing" gains weight. The final line, "no evidence that we were ever here", extends personal mortality into complete erasure: the fear is not only of dying but of leaving no trace.

Structurally, the poem is only four lines long, and it ends in a list of negatives, "no memory, / no evidence", as if the poem itself were being cleared away with the stock. The colon in "Nothing will remain of this:" marks the turn from the sale to what it means. The title "Everything Everything" emphasises totality and repetition, suggesting cycles of consumption and disposal.

The poem's key achievement is collapsing commercial and existential registers. The slogans of a clearance sale become a meditation on human insignificance, which makes readers recognise how casual consumer language can mask deep anxiety about mortality. The final line holds personal anxiety and a wider fear together, connecting one person's mortality to the indifference of the world.`,
          },
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 2: Poetry and Drama Balance
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_2_BALANCED: MockExamPaper = {
  id: 'igcse-lit-extra-002',
  board: 'IGCSE',
  paperNumber: 1,
  title: 'Edexcel IGCSE English Literature - Paper 1 Mock Exam 2 (Poetry/Drama Balance)',
  subtitle: 'Poetry Anthology and Shakespeare',
  code: '4ET1/02',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-drama-exam2',
      title: 'Section A: Drama',
      description: 'Answer one question from this section.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-drama-2',
          questionNumber: 1,
          questionText: `Read the following extract from Act 1, Scene 7 of Macbeth. King Duncan is a guest at Macbeth's castle, and Macbeth has left the supper to think about killing him; Lady Macbeth then comes to find him. Analyse how Shakespeare presents Macbeth's moral dilemma and conflict of conscience through language and dramatic action. You should consider how his inner struggle is shown through soliloquy and imagery, and how it changes when he speaks to Lady Macbeth.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: DRAMA_EXTRACT_2_MACBETH,
          extractSource: 'William Shakespeare, Macbeth, Act 1, Scene 7',
          modelAnswers: {
            'Band 5 (32-40)': `Shakespeare lets the audience hear Macbeth's conscience in private before showing what becomes of it when he has to speak to his wife. The scene is set during a feast: Duncan is Macbeth's guest, and Macbeth has left the room, so Lady Macbeth's first question, "Why have you left the chamber?", draws attention to his absence as a sign of unease. The soliloquy is a debate that no other character hears.

It opens with euphemism. Macbeth speaks of "it", of "th’ assassination", of "this blow" and of "his surcease", and the three uses of "done" in "If it were done when ’tis done, then ’twere well / It were done quickly" circle the act without naming it. He wishes the killing could "trammel up the consequence", catching every result as if in a net, and be "the be-all and the end-all". His first objection is practical rather than moral: he would "jump the life to come", risking damnation, but "We still have judgement here". The image of an "even-handed justice" that "Commends th’ ingredience of our poison’d chalice / To our own lips" warns that violence taught to others will "return / To plague th’ inventor".

The second objection is moral. Duncan is "here in double trust": Macbeth is "his kinsman and his subject", and "as his host" he should "against his murderer shut the door, / Not bear the knife myself". The first time the soliloquy names a murderer, the murderer is Macbeth himself. The orderly "First" and "then" of this argument give way to a sudden rise in imagery when he thinks of Duncan's goodness. Duncan's "virtues / Will plead like angels, trumpet-tongued", and pity appears "like a naked new-born babe, / Striding the blast", a paradox in which the most helpless of creatures rides the storm. The deed will be blown "in every eye, / That tears shall drown the wind". This escalating imagery shows that Macbeth's conscience works through his imagination: he does not so much reason his way to the wrongness of the murder as see it.

The soliloquy ends in a confession. Macbeth has "no spur / To prick the sides of my intent, but only / Vaulting ambition, which o’erleaps itself / And falls on th’ other". The riding metaphor admits that ambition is his only motive and predicts its failure, since a rider who leaps too eagerly falls on the far side. The sentence is broken off, and at that moment the stage direction brings in Lady Macbeth, as if she were the spur he says he lacks.

The dialogue that follows is abrupt. Short speeches, and a question answered with a question ("Hath he ask’d for me?" and "Know you not he has?"), create pressure. Macbeth then announces his decision: "We will proceed no further in this business". The word "business" makes the murder sound like a transaction, and the reasons he gives his wife are not the angels and the babe of the soliloquy but his reputation: he has "bought / Golden opinions from all sorts of people", which "would be worn now in their newest gloss". The clothing metaphor presents honour as a new garment, too new to be "cast aside so soon". The gap between the conscience the audience has heard and the prudence Macbeth now speaks aloud is itself dramatic. He keeps his moral reasons to himself, perhaps expecting his wife to scorn them, and by offering weaker ones he gives her an opening.

That opening decides the scene. Beyond the extract, Lady Macbeth taunts him that "When you durst do it, then you were a man", and by the end of the scene he says "I am settled". The extract therefore presents a conscience that is powerful in private, and in its imagery, but not strong enough to be spoken aloud, which is why it can be overturned.`,
          },
        },
      ],
    },
    {
      id: 'section-b-poetry-exam2',
      title: 'Section B: Poetry Anthology',
      description: 'Answer one question from this section.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q2-poetry-2',
          questionNumber: 2,
          questionText: `Read the two anthology poems below. Compare how D. H. Lawrence in 'Piano' and John Keats in 'La Belle Dame sans Merci' present vulnerability. You should consider their use of imagery, language, and form, and explain how each poet's approach differs.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'comparison',
          extract: `POEM A: Piano, D. H. Lawrence\n\n${POEM_PIANO}\n\nPOEM B: La Belle Dame sans Merci, John Keats\n\n${POEM_LA_BELLE_DAME}`,
          extractSource:
            "Poem A: D. H. Lawrence, 'Piano' (1918) | Poem B: John Keats, 'La Belle Dame sans Merci' (1819)",
          modelAnswers: {
            'Band 5 (32-40)': `Both 'Piano' and 'La Belle Dame sans Merci' present a man made vulnerable by a feminine power he cannot resist, and both leave him exposed and diminished. Lawrence's speaker is overcome by memory, Keats's knight by an enchantress. The difference is that Lawrence's vulnerability is inward and confessed in the first person, while Keats's is dramatised in a ballad in which a questioner meets a broken knight.

In 'Piano', vulnerability begins gently. "Softly, in the dusk, a woman is singing to me" places the speaker in half-light, where resistance is weak, and the song is "Taking me back down the vista of years". The child he sees is small and low, "sitting under the piano", "pressing the small, poised feet of a mother who smiles as she sings": an image of dependence and safety. Lawrence then makes the adult's vulnerability explicit: "In spite of myself, the insidious mastery of song / Betrays me back". The words "insidious" and "Betrays" present music as an enemy working in secret, and "In spite of myself" admits that his will has failed.

Keats makes vulnerability visible in the knight's body and in his landscape. The opening question, "O what can ail thee, knight-at-arms / Alone and palely loitering?", shows a warrior, a figure of strength, isolated and drained of colour, and the questioner sees "a lily on thy brow", the pallor of sickness. Nature shares his exhaustion: "The sedge is withered from the lake, / And no birds sing!" Where Lawrence's speaker is drawn back into a warm interior, "the cosy parlour", the knight is left outside in a dead season.

The women who overpower them differ. Lawrence's singer and mother are benign; the danger is the speaker's own longing "to belong / To the old Sunday evenings at home". Keats's lady is "a faery's child" who "lulled me asleep", and in his dream the "pale kings, and princes too" warn him that she "Hath thee in thrall". Vulnerability in Keats is enslavement; in Lawrence it is surrender to feeling.

Form reinforces the contrast. Lawrence's long lines in rhyming couplets spill over like the flood they describe, and the ending inverts adulthood: "my manhood is cast / Down in the flood of remembrance, I weep like a child for the past." Keats's quatrains each end on a short fourth line that feels clipped and incomplete, and the ballad closes by returning to its opening image, the knight "Alone and palely loitering", as if he cannot escape. Both poets leave their speakers exposed, Lawrence's weeping openly and Keats's "On the cold hill side". Lawrence presents vulnerability as an honest loss of control; Keats presents it as a haunting from which there is no waking.`,
          },
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 3: Drama and Poetry Comparative Focus
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_3_COMPARATIVE: MockExamPaper = {
  id: 'igcse-lit-extra-003',
  board: 'IGCSE',
  paperNumber: 1,
  title: 'Edexcel IGCSE English Literature - Paper 1 Mock Exam 3 (Comparative)',
  subtitle: 'Integrated Drama and Poetry Study',
  code: '4ET1/03',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-drama-exam3',
      title: 'Section A: Drama',
      description: 'Answer one question from this section.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-drama-3',
          questionNumber: 1,
          questionText: `Read the extract from Doctor Faustus, in which Faustus greets the Helen of Troy that Mephistophilis has brought him. Analyse how Marlowe uses dramatic techniques (such as address to a silent figure, stage directions, imagery or dramatic irony) to reveal Faustus's internal state at this moment, and explain the effect on the audience.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: DRAMA_EXTRACT_4_MARLOWE,
          extractSource:
            'Christopher Marlowe, Doctor Faustus, the posthumous 1604 quarto as edited by Alexander Dyce',
          modelAnswers: {
            'Band 5 (32-40)': `Marlowe uses Faustus's speech to Helen, and the silence of the figure he speaks to, to reveal a mind choosing damnation while calling it heaven. The moment is carefully prepared. Just before it, Mephistophilis has threatened Faustus for thinking of repentance, and Faustus asks for Helen so that her "sweet embracings may extinguish clean" the "thoughts that do dissuade me from my vow". The audience therefore knows what the kiss is for: it is meant to drown out repentance.

The speech opens with a rhetorical question, "Was this the face that launch'd a thousand ships, / And burnt the topless towers of Ilium", which measures Helen's beauty by the destruction it caused. The hyperbole is admiring, but the verbs "launch'd" and "burnt" remind the audience that this beauty is bound up with war and ruin, and Faustus is about to add himself to its casualties.

Only then does he address her: "Sweet Helen, make me immortal with a kiss." The irony is sharp. Faustus has sold his soul, and he asks a figure summoned by Mephistophilis for an immortality that only salvation could give. He knows what such figures are: he has told the Emperor that he cannot raise "the true substantial bodies" of the dead, only "such spirits as can lively resemble" them. The stage direction this edition prints, "Kisses her", makes the moment visible, though the verse would demand the kiss without it. The next line, "Her lips suck forth my soul: see, where it flies!", turns a familiar Renaissance conceit, that lovers exchange souls in a kiss, into something literal and sinister: the audience watches Faustus's soul being drawn from him. "Come, Helen, come, give me my soul again" sounds like a lover's play, but it is also the plea of a man who has lost what he cannot recover.

Helen never speaks. Because she makes no answer, the speech works almost as a soliloquy: Faustus reveals his own state to a silent figure who may be no more than a spirit in borrowed shape. The turn to "Here will I dwell, for heaven is in these lips" inverts Christian belief, placing heaven in a body, and "dwell" suggests a permanent home rather than a moment's pleasure. "And all is dross that is not Helena" dismisses everything else, God included, as worthless.

For the audience the effect is double. The verse is among the most beautiful in the play and invites us to share Faustus's rapture, yet we know what Helen is and why he wanted her. That gap between what Faustus feels and what the audience knows is dramatic irony, and it makes the lyricism of the moment a measure of how completely he has deceived himself, not long before the final scene in which he has "but one bare hour to live".`,
          },
        },
      ],
    },
    {
      id: 'section-b-poetry-exam3',
      // Not "Poetry Anthology": the poem it prints was written for this file.
      title: 'Section B: Poetry',
      description: 'Answer one question from this section.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q2-poetry-3',
          questionNumber: 2,
          questionText: `Analyse how a poet uses form and language to explore the relationship between appearance and reality, surface and depth, or what is seen and what is hidden. Refer closely to the text.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: POETRY_EXTRACT_5_THE_KREWE,
          // Relabelled on 27 September 2026: see the header.
          extractSource: 'Specially written for this mock exam; not a published poem',
          modelAnswers: {
            'Band 5 (32-40)': `The poem presents a masked parade as a metaphor for hidden identities and concealed suffering. "Listen: they come, bright with their own parade" opens with an imperative, "Listen", demanding the reader's attention to surfaces (the parade, its brightness), while the rest of the poem turns to what lies beneath. The phrase "bright with their own parade" suggests a self-generated spectacle that may mask emptiness.

The mask serves as both literal costume and metaphorical concealment: "masked and gilded, carrying torches high" presents external magnificence, while "Behind their masks, who knows what faces wait" introduces uncertainty. The words "who knows" admit that appearance prevents knowledge. What follows, "what wounds, what wonders, what they hide", sets the negative ("wounds") beside the positive ("wonders"), suggesting that hidden depths hold both suffering and wonder.

The poem's form mirrors the uncertainty it explores. It is only four lines long; the third line ends on a dash, as if the speaker hesitates before guessing; and the last line is a list of possibilities that the poem never settles. The speaker cannot see behind the masks, and the form stops at the same barrier.

The poem's central paradox is that the paraders are "bright" yet "masked", visible yet hidden. Their brightness does not reveal the truth but obscures it. The word "gilded" suggests an expensive surface, and the torches carried "high" light up the display rather than the faces. The poem suggests that presentation can hide as much as it shows: identity becomes costume.

Its significance lies in recognising that the masks cannot be seen through. We can acknowledge hidden depths, "what wounds, what wonders", without reaching them. The poem thus explores not only concealment but perhaps its necessity: masks are not simply deceptive, since they may also protect those who wear them.`,
          },
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// PAPER 2: UNSEEN TEXTS (2 hours, 80 marks)
// ═════════════════════════════════════════════════════════════════════════════

// ─── Unseen Prose Extracts ─────────────────────────────────────────────────

const UNSEEN_PROSE_1 = `The apartment overlooked the city but the view had stopped mattering years ago. Margaret sat by the window each morning, coffee cooling in her hand, watching the traffic move like blood through veins. She had once kept a journal of observations: the man with the red umbrella who appeared every Tuesday, the child who pressed her face against shop windows, the way light changed the buildings' colours from grey to gold to purple. But she had stopped writing. The world's details, once precious, had become overwhelming.

Her daughter called on Saturdays. "You should get out more," Sarah would say, her voice careful, the tone of someone negotiating with unstable ground. Margaret would agree, would promise to walk to the park, to visit the gallery, to have lunch with Eleanor. The promises cost her nothing because neither of them believed she would keep them. By Monday, the park would reclaim its imaginary status in Margaret's mind: something that existed but not for her, not anymore.

What no one understood was that stillness had become a kind of clarity. The world outside rushed and burned and destroyed itself, but here, in this room with its cream-coloured walls and fading carpet, nothing urgent demanded attention. She had lived eighty-three years of urgent demands. Now she simply existed, observing the patterns that had always been there: the regularity of light, the constancy of indifference.`

const UNSEEN_PROSE_2 = `The factory whistle had been silent for three months when Tom returned to the town where he was born. Nothing had changed and everything had changed. The main street still held its shops in the same sequence (hardware store, bakery, diner, post office), but they had acquired the quality of a museum display, artefacts of a life that no longer functioned. The hardware store was closed. The bakery now sold mostly imported goods and specialty cakes for people from the suburbs. The diner was empty at lunch.

He had left at eighteen, driven by the same desperate hunger that consumed most people his age: hunger for elsewhere, for significance, for escape from the determinism of his family's history. His father worked the line at the factory; his grandfather had worked the line; the implicit expectation was that Tom would work the line. Instead, he had gone to university, become a systems analyst, moved to the city where he designed algorithms for companies he didn't understand to solve problems he didn't care about.

Now, standing outside the closed factory (chain-link fence, broken windows, weeds growing through the concrete), he felt something like grief, though he wasn't sure for what. For the work that had sustained the town? For the man he had not become? For the assumption, shared by his entire generation, that leaving was always the answer?`

const UNSEEN_PROSE_3 = `The letter had arrived on a Tuesday, the kind of letter that made the present moment feel unreal. Helen held it in her hands without opening it again (she had already read it four times), trying to feel something other than the strange numbness that had settled in her chest.

Dear Helen, it began, though they had not spoken in fourteen years. Dear Helen, I am writing to tell you that I have been diagnosed with terminal cancer. The doctors say six months, perhaps less. I have been thinking about the things I said to you, and the things I did not say. I have been thinking about how easy it was to let anger take the place of love, and how difficult it would be now to reverse that choice.

Her hands trembled. Not from emotion (that would come later, she suspected) but from the sheer improbability of the moment. She had constructed a life without this person in it. She had married someone else, had children, had created an entirely separate narrative where that chapter had been closed, officially, ceremonially. The letter threatened the integrity of that narrative. It suggested that some chapters refuse to close, that unfinished business persists, waiting.

She thought about not responding. It would be easy. The person writing the letter would be dead in six months. Afterward, guilt would be a manageable thing. But Helen was not someone who chose ease over complexity. She had learned that the hard way. So she sat with the letter and waited for the next feeling to arrive.`

// ─── Unseen Poetry Extracts ────────────────────────────────────────────────

const UNSEEN_POETRY_1 = `Night Walk

The streets are empty now except for us,
two figures moving through the darkness like
swimmers in a black ocean, searching
for shore we might have imagined once.

The streetlights make us ghosts of ourselves-
overhead, they render everything
a kind of permanent separation: light
absolute, then darkness absolute.

You don't speak. I don't speak. The city
breathes around us, indifferent to our
meaning or unmanning. A cat
watches from a fence, luminous-eyed.

Later, you will tell me you were afraid.
Later, I will pretend I was not.`

const UNSEEN_POETRY_2 = `Inheritance

My mother's hands were always moving-
the repetitive mathematics of domesticity:
folding, cutting, kneading, scrubbing.
I remember the cracks in her palms,

the way she would apply cream at night
as though it were a ritual that might erase
the evidence of work, of years,
of being worn smooth by necessity.

Now my own hands show the same cracks.
I perform the same gestures, the same
minute choreography of keeping things
intact, of making something permanent from impermanence.

She has been dead five years.
I still reach for her method when things fall apart.`

const UNSEEN_POETRY_3 = `The Garden After Rain

Everything is cleaner now, though nothing
has been cleaned. The rain has done this work-
washed the dust from leaves, from petals,
from the stones that mark the paths.

A bird begins again its small song,
and the garden remembers what it is:
not a place of cultivation, but of
persistent becoming, of continuous repair.

The damage from the storm is still visible-
broken branches, petals scattered-
but something in the order of things
has been restored. Not returned to what was before,

but arranged into a new configuration,
where loss and growth coexist,
where beauty emerges not from absence
of damage, but despite, and with, and through it.`

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 4: Unseen Prose and Poetry
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_4_UNSEEN_PROSE_POETRY: MockExamPaper = {
  id: 'igcse-lit-extra-004',
  board: 'IGCSE',
  paperNumber: 2,
  title: 'Edexcel IGCSE English Literature - Paper 2 Mock Exam 1 (Unseen Texts)',
  subtitle: 'Unseen Prose and Poetry Analysis',
  code: '4ET1/04',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-unseen-prose',
      title: 'Section A: Unseen Prose',
      description:
        'Read the extract below and answer the question that follows. You should spend approximately 40 minutes on this question.',
      totalMarks: 40,
      suggestedTimeMinutes: 40,
      questions: [
        {
          id: 'q1-unseen-prose-1',
          questionNumber: 1,
          questionText: `Read the extract above. Analyse how the writer presents the character of Margaret and explores the theme of withdrawal from life. You should consider the writer's use of language, imagery, and narrative perspective, and explain the effect on the reader.`,
          marks: 40,
          suggestedTimeMinutes: 40,
          questionType: 'analysis',
          extract: UNSEEN_PROSE_1,
          extractSource: 'Unseen Contemporary Prose',
          modelAnswers: {
            'Band 5 (32-40)': `The writer presents Margaret's withdrawal through physical stillness, psychological distance and verbs of stopping, which together suggest both peace and profound alienation. The opening sentence, "The apartment overlooked the city but the view had stopped mattering years ago", immediately sets outward possibility against inward abandonment. The phrase "stopped mattering" is crucial: it suggests not an inability to see but a refusal to value. The writer distinguishes between access and engagement.

The second sentence uses a simile, the traffic moving "like blood through veins", to present the city as a living body from which Margaret has disconnected. She sits "each morning, coffee cooling in her hand", a detail that shows time passing while she does nothing. The contrast between the city's motion and Margaret's stillness is the passage's main source of tension.

The writer reveals Margaret's former engagement through remembered detail: "the man with the red umbrella who appeared every Tuesday", "the child who pressed her face against shop windows", "the way light changed the buildings' colours". These observations show that Margaret once attended closely to the world. Yet "she had stopped writing", and "The world's details, once precious, had become overwhelming." The shift from "precious" to "overwhelming" suggests that the world which once gave her meaning now produces anxiety. Her withdrawal is a response not to emptiness but to excess.

Sarah's Saturday calls show how withdrawal changes a relationship. Sarah speaks with "her voice careful, the tone of someone negotiating with unstable ground", a metaphor that shows others approaching Margaret cautiously. The narrative stays close to Margaret: we hear Sarah only as Margaret hears her, and we learn that "The promises cost her nothing because neither of them believed she would keep them." Both women keep up a conversation neither believes in, so the withdrawal becomes a shared, polite fiction.

The final paragraph is ironic. Margaret believes that "stillness had become a kind of clarity", yet this clarity is entirely private, and "What no one understood" stresses her isolation. She has built a philosophy of stillness ("nothing urgent demanded attention") that justifies her withdrawal. The closing image, "the regularity of light, the constancy of indifference", reveals the paradox: her clarity comes from accepting indifference, from recognising that the world goes on with or without her.

The overall effect is ambiguous: is Margaret's withdrawal peaceful wisdom or depression? The prose does not judge, presenting stillness as both refuge and confinement.`,
          },
        },
      ],
    },
    {
      id: 'section-b-unseen-poetry',
      title: 'Section B: Unseen Poetry',
      description:
        'Read the poem below and answer the question that follows. You should spend approximately 40 minutes on this question.',
      totalMarks: 40,
      suggestedTimeMinutes: 40,
      questions: [
        {
          id: 'q2-unseen-poetry-1',
          questionNumber: 2,
          questionText: `Read the poem above. Analyse how the poet uses language, form, and imagery to explore the theme of inheritance or legacy. Consider how the poem's structure and word choice contribute to its meaning.`,
          marks: 40,
          suggestedTimeMinutes: 40,
          questionType: 'analysis',
          extract: UNSEEN_POETRY_2,
          extractSource: 'Unseen Contemporary Poem',
          modelAnswers: {
            'Band 5 (32-40)': `The poem explores inheritance not as a welcome legacy but as the passing on of labour and its marks. The opening presents the mother's hands in constant motion: "always moving", "the repetitive mathematics of domesticity". The phrase "repetitive mathematics" turns housework into calculation: precise, predictable, exhausting. The list "folding, cutting, kneading, scrubbing" uses asyndeton (the omission of conjunctions) to suggest a relentless sequence, each action following the next without a break.

The physical mark of labour, "the cracks in her palms", turns the body into a record: the cracks are readable signs of work. The mother's nightly cream is a small resistance to that record. She applies it "as though it were a ritual that might erase / the evidence of work, of years, / of being worn smooth by necessity". The word "might" admits that the ritual probably fails, and "worn smooth" presents her as shaped by work, like a tool or a step.

The turn at "Now my own hands show the same cracks" completes the inheritance. The speaker has not chosen this legacy; it has been passed on through repetition. "I perform the same gestures, the same / minute choreography of keeping things / intact" shows that inheritance works through habit held in the body, and "choreography" makes the housework a dance learned by watching.

The closing couplet introduces distance in time: "She has been dead five years." Yet this distance does not change the speaker's behaviour: "I still reach for her method when things fall apart." The inheritance survives the mother's death and becomes the speaker's instinctive response to crisis. The poem suggests that we are shaped by those who raised us in ways we cannot escape, so that their labour becomes our instinct.

The form reinforces the theme. Three four-line stanzas mirror the regularity of inherited gesture, and the closing couplet breaks that pattern at the point of loss. Enjambment carries the sense across lines ("that might erase / the evidence of work"), mirroring the continuous flow of inherited labour. The poem avoids elaborate language and keeps to the plain, precise diction of observation, a restraint that mirrors daily work itself: no decoration, only necessary action.`,
          },
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 5: Comparative Unseen Texts
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_5_COMPARATIVE_UNSEEN: MockExamPaper = {
  id: 'igcse-lit-extra-005',
  board: 'IGCSE',
  paperNumber: 2,
  title: 'Edexcel IGCSE English Literature - Paper 2 Mock Exam 2 (Comparative Unseen)',
  subtitle: 'Comparative Analysis of Unseen Texts',
  code: '4ET1/05',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-comparative-prose',
      title: 'Section A: Comparative Prose Analysis',
      description: 'Read both extracts below and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-comparative-prose',
          questionNumber: 1,
          questionText: `Read both prose extracts. Compare how the two writers present characters grappling with loss, change, or the past. You should consider their use of language, imagery, narrative technique, and structure. How do their approaches differ, and what effect does this have on the reader?`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'comparison',
          extract: `PASSAGE A:\n${UNSEEN_PROSE_1}\n\nPASSAGE B:\n${UNSEEN_PROSE_2}`,
          extractSource: 'Unseen Contemporary Prose',
          modelAnswers: {
            'Band 5 (32-40)': `Both writers explore withdrawal and disconnection, but through different situations. Margaret (Passage A) withdraws into stillness and acceptance; Tom (Passage B) left his home town and returns to find it changed. The writers use these situations to explore how people respond to loss, whether an inner loss of meaning or the outer loss of a community.

Passage A presents stillness as a response to an overwhelming world. The opening sentence places Margaret physically, in an apartment overlooking the city, but shows her psychological distance. The verbs record things ending: the view "had stopped mattering", and "she had stopped writing". These constructions present withdrawal as something that happened to Margaret gradually rather than something she decided. Yet the final paragraph complicates this reading: "stillness had become a kind of clarity" presents withdrawal as chosen wisdom. The writer keeps the ambiguity throughout.

Passage B uses retrospection and a return. Tom "had left at eighteen" and "had gone to university", so his life accumulates through past actions, yet in the present he is static, "standing outside the closed factory". Where Margaret has reached a kind of philosophical acceptance, Tom feels "something like grief, though he wasn't sure for what". His response is more troubled and less resigned.

The writers' imagery differs. Passage A uses an organic simile, the traffic moving "like blood through veins", suggesting a living city from which Margaret has withdrawn. Passage B uses images of display and dereliction: the shops "had acquired the quality of a museum display", and the factory has a "chain-link fence" and "broken windows". Passage A suggests stasis; Passage B suggests decay.

Structurally, Passage A moves from the outer world (the city view) to the inner (Margaret's philosophy), and the prose becomes more abstract as it moves inward. Passage B also moves from the town to Tom's feelings, but it ends in three unanswered questions: "For the work that had sustained the town? For the man he had not become?" This structural difference mirrors the thematic one: Margaret reaches an inner peace; Tom remains suspended in unresolved feeling.

Both passages present withdrawal as a response to change: Margaret finds peace in refusing to engage, while Tom cannot find this peace. The writers thus explore not one response to loss but several, some finding refuge and others only emptiness.`,
          },
        },
      ],
    },
    {
      id: 'section-b-comparative-poetry',
      title: 'Section B: Comparative Poetry Analysis',
      description: 'Read both poems below and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q2-comparative-poetry',
          questionNumber: 2,
          questionText: `Read both poems above. Compare how the two poets present the relationship between past and present, or between inherited experience and individual identity. You should consider their use of language, form, imagery, and tone. How does each poet's approach contribute to their exploration of this theme?`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'comparison',
          extract: `POEM A:\n${UNSEEN_POETRY_2}\n\nPOEM B:\n${UNSEEN_POETRY_3}`,
          extractSource: 'Unseen Contemporary Poems',
          modelAnswers: {
            'Band 5 (32-40)': `Both poems explore the persistence of the past, but they reach different conclusions. Poem A ("Inheritance") uses direct, literal language to present inheritance as repetition; Poem B ("The Garden After Rain") uses the garden as an extended metaphor in which damage and repair exist together. The poets thus explore different possibilities: whether the past determines the present, or whether it is taken up into something new.

Poem A follows a clear chronological progression, from the mother's hands to the speaker's own. Its language is precise and concrete: "cracks", "palms" and "cream" are objects that stand for an abstract inheritance. The repetition of hand imagery creates a cyclical structure that suggests inevitable transmission. The speaker cannot escape the mother's legacy because it has become physical: "I still reach for her method when things fall apart."

Poem B works through metaphor and paradox. "Everything is cleaner now, though nothing / has been cleaned" unsettles cause and effect, since the rain, not a person, has done the work. Where Poem A emphasises repetition ("I perform the same gestures"), Poem B emphasises reconstruction: "where beauty emerges not from absence / of damage, but despite, and with, and through it."

The tonal difference is crucial. Poem A has a subdued, elegiac tone: the speaker accepts inheritance as a continuing burden, and "I still reach" carries resignation. Poem B's tone is more hopeful, moving from observation to philosophical affirmation. "Not returned to what was before, / but arranged into a new configuration" suggests that the past does not determine the future but shapes it.

Form supports these arguments. Poem A moves through three four-line stanzas and then breaks the pattern with a closing couplet, isolating the mother's death ("She has been dead five years.") before the final line shows her method outliving her. Poem B keeps its four-line stanzas but runs a sentence across the gap between its third and fourth, so that "Not returned to what was before," is completed only after the break, enacting continuity through damage.

Both poets explore inheritance, yet they draw different conclusions: Poem A suggests that we repeat the past; Poem B suggests that we are partners with it in making something new. Their formal choices carry their arguments.`,
          },
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 6: Complex Thematic Integration
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_6_THEMATIC_INTEGRATION: MockExamPaper = {
  id: 'igcse-lit-extra-006',
  board: 'IGCSE',
  paperNumber: 2,
  title: 'Edexcel IGCSE English Literature - Paper 2 Mock Exam 3 (Thematic Integration)',
  subtitle: 'Complex Thematic and Interpretive Analysis',
  code: '4ET1/06',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-thematic-prose',
      title: 'Section A: Thematic Prose Analysis',
      description: 'Read the extract below and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-thematic-prose',
          questionNumber: 1,
          questionText: `Read the extract below. Analyse how the writer uses language and narrative technique to explore the theme of confronting difficult truths and unfinished business. Consider how the character's internal response to external stimulus reveals deeper themes about human connection, time, and reconciliation.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: UNSEEN_PROSE_3,
          extractSource: 'Unseen Contemporary Prose',
          modelAnswers: {
            'Band 5 (32-40)': `The writer presents confrontation with unfinished business as a rupture in time and feeling that destabilises the identity Helen has achieved. The opening image, "the kind of letter that made the present moment feel unreal", suggests that some communications fundamentally alter ontological certainty. Helen has "constructed a life" that appears complete, yet the letter threatens its coherence, revealing that "some chapters refuse to close, that unfinished business persists, waiting."

The writer slows the narrative to represent Helen's processing. "Helen held it in her hands without opening it again" suggests physical possession without full comprehension. She has already read it four times, and the repetition suggests obsessive rereading, seeking a meaning that reading cannot supply. The greeting "Dear Helen" is followed by the narrator's aside, "though they had not spoken in fourteen years", which establishes a distance in time that the letter immediately collapses.

The letter's language is notably careful, moving from personal address to philosophical reflection: "I have been thinking about the things I said to you, and the things I did not say." This formulation suggests that language itself is inadequate: both speech and silence have created the rupture. The phrase "how easy it was to let anger take the place of love" presents anger as substitution, a failed replacement that now seems comprehensible as mistake rather than necessity.

The writer's description of Helen's physical response is restrained: "Her hands trembled. Not from emotion (that would come later, she suspected) but from the sheer improbability of the moment." This withholding of explicit emotional language paradoxically intensifies emotion. Helen's body responds before consciousness can process feeling. The phrase "Not from emotion" is crucial: it suggests physical response precedes emotional categorisation. Helen's body knows something her conscious mind has not yet acknowledged.

The final section presents Helen's ethical choice. She "thought about not responding" yet "was not someone who chose ease over complexity." This characterisation reveals Helen's identity as fundamentally ethical. She "had learned that the hard way," suggesting previous experience with the consequences of emotional evasion. The concluding line, "So she sat with the letter and waited for the next feeling to arrive", presents not action but receptivity. Helen chooses to remain open to emotion rather than foreclose it.

The writer's overall achievement is exploring how we construct identity narratives that fragment when confronted by unfinished business. Helen's "separate narrative" proves illusory; the past cannot be definitively closed. Yet the final image suggests dignity in accepting this vulnerability, in remaining open to complexity rather than defending constructed completeness.`,
          },
        },
      ],
    },
    {
      id: 'section-b-thematic-poetry',
      title: 'Section B: Thematic Poetry Analysis',
      description: 'Read the poem below and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q2-thematic-poetry',
          questionNumber: 2,
          questionText: `Read the poem above. Analyse how the poet uses natural imagery and form to explore the theme of resilience, recovery, or the coexistence of damage and beauty. Consider how the poem's structure, language choices, and symbolic dimensions contribute to its exploration of transformation.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: UNSEEN_POETRY_3,
          extractSource: 'Unseen Contemporary Poem',
          modelAnswers: {
            'Band 5 (32-40)': `The poem employs garden imagery to argue that beauty and damage are not opposites but integrated aspects of life's continuous becoming. The opening paradox, "Everything is cleaner now, though nothing / has been cleaned", establishes the poem's central insight: reality operates through paradox rather than linear causality. Rain transforms without erasing, suggesting that cleansing and damage coexist.

The natural imagery progresses through stages of perception and understanding. Initially, the speaker observes effect (cleanliness) contradicting causation (no one has cleaned). Then the bird's song introduces life resuming its patterns: "the garden remembers what it is: / not a place of cultivation, but of / persistent becoming, of continuous repair." This redefinition is crucial: the garden's identity is not stasis but process. Its essence is "becoming" and "repair," not achievement or completion.

The poem's form mirrors this thematic argument. The enjambment across stanzas enacts continuous flow despite line breaks. The relatively open form (irregular line lengths and no rhyme scheme) suggests growth rather than containment. Where a more formal structure would suggest order imposed from outside, this form suggests organic development.

The volta "The damage from the storm is still visible- / broken branches, petals scattered-" acknowledges that damage persists. Yet the concluding formulation is remarkable: beauty emerges "not from absence / of damage, but despite, and with, and through it." The three prepositions, "despite", "with" and "through", suggest multiple simultaneous relationships: beauty exists in opposition to damage, alongside damage, and interpenetrated with damage. This tripartite formulation refuses simple resolution.

The final stanza achieves philosophical culmination: "where loss and growth coexist, / where beauty emerges not from absence / of damage, but despite, and with, and through it." The poem argues for integration rather than recovery of original state. "Not returned to what was before, / but arranged into a new configuration" explicitly rejects restoration as the ideal. Instead, the poem affirms ongoing transformation as the fundamental condition of existence.

The garden becomes a symbol for human experience: we too carry damage that cannot be erased, cannot be healed by returning to innocence. Instead, we must achieve what the garden achieves: learning to incorporate damage into new beauty, understanding that resilience means not overcoming suffering but flowering through and alongside it. The poem's quiet tone and relatively accessible language make this insight felt rather than asserted, embodied rather than explained.`,
          },
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// EXPORT ALL MOCK EXAMS
// ═════════════════════════════════════════════════════════════════════════════

export const igcseLitExtraMocks: MockExamPaper[] = [
  MOCK_EXAM_1_DRAMA,
  MOCK_EXAM_2_BALANCED,
  MOCK_EXAM_3_COMPARATIVE,
  MOCK_EXAM_4_UNSEEN_PROSE_POETRY,
  MOCK_EXAM_5_COMPARATIVE_UNSEEN,
  MOCK_EXAM_6_THEMATIC_INTEGRATION,
]
