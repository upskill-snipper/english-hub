import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Piano, D H Lawrence (1918). A supplement: the page at
 * /igcse/edexcel/poetry/piano keeps its overview, key quotations, language
 * devices and form and structure, which are rendered in the tabs of its poem
 * viewer, and this file adds the seven sections it lacked or got wrong.
 *
 * THE SELF-AUDIT (25 September 2026). The page's summary tab (stanza by stanza,
 * then the overall meaning), its seven key quotations with analysis, its six
 * language devices with examples and effects, and its form-and-structure tab
 * are substantive and are kept. It has no themes, no speaker or figures, no
 * passages set as exam questions, no vocabulary, no exam practice and no model
 * answer. Its context tab is written here again, because it holds claims no
 * source confirms (that Lawrence called his mother's death the end of his youth,
 * that he rewrote the poem in prose-like drafts, that an earlier draft defended
 * his artistic self) and gives a drafting date on which the sources disagree.
 *
 * THE WORDING. Every quotation was checked against the poem as printed on page
 * 57 of the Pearson Edexcel International GCSE English Anthology, Issue 8
 * (February 2026), read and rendered from Pearson's PDF, and against the edition
 * held in src/data/full-texts/piano.ts (New Poems, Gutenberg #22726). The two
 * agree word for word and point for point: three quatrains, twelve lines, with
 * the anthology numbering lines 5 and 10. poets.org and The Reader print the
 * same text.
 *
 * WHAT THE PAGE ABOVE GETS WRONG, and this file does not repeat: its banner and
 * its comparison section say the poem is not in the current 4ET1 anthology, but
 * it is one of the sixteen compulsory Part 3 poems; An Unknown Girl, one of its
 * pairings, is a Part 2 poem that 4ET1 does not examine; its If- pairing
 * misquotes Kipling as "keep his head" (the poem says your); its line 10 note
 * describes a capital-P Piano, but the poem's piano is lower case; and it calls
 * the present-day singer professional, which the poem does not say.
 *
 * FACT-CHECK (26 September 2026). Every quotation, extract and quoted phrase was
 * re-read against the held edition and page 57 of the Issue 8 PDF, and all were
 * exact. What was corrected: Szirtes was said to "count five stanzas" in the
 * notebook version; he states no count, and prints a twenty-line draft, so the
 * line count is given instead. The specification says Section B assesses
 * language, form and structure and comparison, not context, and the guide had
 * advised using context "lightly" without saying so; the context entry, the
 * exam question and the tip now say it. Smaller repairs: Remember was said to
 * address "the reader" (it addresses a beloved); "Kipling's father" read as
 * Kipling's own father; the speaker was called "the object of almost every
 * verb", which the grammar does not bear out; and a few readings were being
 * stated as facts.
 */
export const guide: StudyGuide = {
  slug: 'piano',
  title: 'Piano',
  author: 'D H Lawrence',
  form: 'poem',
  scope:
    'The whole poem, as printed on page 57 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3: three quatrains, twelve lines. Set for Pearson Edexcel International GCSE English Literature (4ET1), Paper 1 Section B, where it is compared with another Part 3 poem in an essay. Line numbers in this guide follow the anthology, which prints a number beside lines 5 and 10.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'D H Lawrence (1885-1930); out of copyright. The text as printed on page 57 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), which agrees word for word with New Poems (London: Martin Secker, 1918), checked against the 1919 reset edition, Project Gutenberg eBook #22726.',
  },
  workLength: {
    words: 133,
    lines: 12,
    basis:
      "Counted on 25 September 2026 from page 57 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson's own PDF: 12 lines in three quatrains, 133 words by the validator's word count, title and author line excluded. The same count comes from the held Gutenberg text, which is identical.",
  },

  native: {
    overview: '/igcse/edexcel/poetry/piano',
    keyQuotes: '/igcse/edexcel/poetry/piano',
    languageAnalysis: '/igcse/edexcel/poetry/piano',
    structureForm: '/igcse/edexcel/poetry/piano',
  },

  context: [
    {
      heading: 'Where Piano sits in the exam',
      body: 'Piano is one of the sixteen poems in Part 3 of the Pearson Edexcel International GCSE English Anthology, printed on page 57 of Issue 8 (February 2026). Part 3 is set for English Literature (4ET1), Paper 1 Section B, and all sixteen poems are compulsory, so treat any note saying the poem has left the anthology as out of date. The section offers a choice of two essay questions, and each compares two Part 3 poems: in the papers checked for this guide, one question names both poems and the other names one poem and lets you choose the second. The section rewards two skills, analysing language, form and structure and comparing the poems; context is not one of them, so use it only where it sharpens a reading. The paper is otherwise closed book, but a booklet of all the Part 3 poems is provided with the question paper. Piano has been set at least twice. The June 2018 R paper, the version sat in countries far from UK time, asked about feelings about parents in Piano and Poem at Thirty-Nine, and the June 2024 R paper paired it with Remember, where the mark scheme centred on remembering.',
    },
    {
      heading: 'A miner’s son in Eastwood',
      body: 'David Herbert Lawrence was born on 11 September 1885 in Eastwood, a mining town in Nottinghamshire. He was the fourth child of Arthur John Lawrence, a miner at Brinsley Colliery with very little schooling, and Lydia Lawrence (born Beardsall), who had been a pupil-teacher, one of the young apprentices who learned to teach by teaching. His father wanted his sons to follow him down the pit; his mother was determined that her children would not earn their living by manual labour, and in Lawrence’s case she had her way. He trained as a teacher at University College, Nottingham, and from the autumn of 1908 taught at a school in Croydon, south of London. It is tempting to read the poem’s parlour, piano and Sunday hymns as a portrait of that home, with the mother at its centre. The poem names no place and no family, though, so present the link as a reading rather than a fact.',
    },
    {
      heading: 'His mother’s death, and Sons and Lovers',
      body: 'Lydia Lawrence died of cancer in 1910, shortly after the final proofs of Lawrence’s first novel, The White Peacock, appeared, and he described the months that followed as his “sick year”. His novel Sons and Lovers (1913) draws closely on his family, and its mother, Gertrude Morel, carries his sense of his own mother’s wasted life. Many readers therefore hear grief for Lydia in the last line of Piano. That reading is strong, but the poem itself never says that the mother has died: the speaker weeps only “for the past”. In an exam it is safer, and more interesting, to say that the poem leaves its loss unnamed, and that the context suggests what the loss might be.',
    },
    {
      heading: 'Two versions of the poem',
      body: 'Piano was collected in New Poems, published in London by Martin Secker in October 1918 and dedicated to the American poet Amy Lowell. An earlier and longer version survives in one of Lawrence’s notebooks. The poet George Szirtes prints it on his blog beside the published poem: it runs to twenty lines against the published twelve, and it includes a description of the mother’s own small brown piano and a sister singing at home, both of which are gone from the final version. Sources give different dates for the draft and the revision, and neither could be confirmed, so no date is given here. What matters for an essay is the direction of the revision. One way to describe it, close to Szirtes’s own, is that Lawrence cut explanation and kept sensation, so the finished poem is built almost entirely from the child under the piano, the Sunday hymns and the adult’s tears.',
    },
    {
      heading: 'Music in the family parlour',
      body: 'Before records and radio, much of the music people heard at home was music they made. Parlour music, songs written to be performed in the home by amateur singers and pianists and sold as sheet music, had its heyday in the nineteenth century, as more households could afford an instrument, and it faded in the twentieth as the gramophone record and the radio took over. A piano in the parlour, with a family singing hymns around it on a Sunday evening, is the scene the speaker remembers. The poem’s present has a different kind of music: a singer performing with the “great black piano appassionato”, which sounds more like a concert than a family gathering. One reading is that the poem is partly about that change, from music a family shares to music an audience listens to, and that the speaker’s tears take the side of the older kind.',
    },
  ],

  themes: [
    {
      title: 'Memory and the power of music',
      body: 'Piano is a poem about memory that arrives uninvited. The speaker does not decide to remember: a song, heard at dusk, is “Taking me back down the vista of years”, and the memory comes as a picture he sees rather than a thought he has. Lawrence gives the song all the power. It is “insidious”, a word that comes from the Latin for an ambush, and its “mastery” makes the listener its servant. Music works here the way a smell or a taste can: one sensation opens a door to a whole lost world, complete with the winter outside and the hymns inside. The memory is made of sound and touch as much as sight. The child is “in the boom of the tingling strings”, so close to the instrument that he feels the music as vibration. One reading is that this is why the song defeats him: the adult is hearing music, but the child in the memory was inside it, and no performance in the present can match that. The form supports the idea, since the long rhymed lines and steady couplets move with the swing of a song.',
    },
    {
      title: 'Home, childhood and the mother',
      body: 'The remembered home is warm, enclosed and safe. Winter is kept outside, the parlour is “cosy”, and the family sings hymns together with “the tinkling piano our guide”. That word, our, is the only plural pronoun in the poem, and it matters: what he weeps for is not only a place but a belonging, a time when he was part of a family rather than a man alone listening to someone else’s song. At the centre is the mother, seen from below by a child sitting at her feet. The details are small and physical: her “small, poised feet”, and the smile she wears as she sings. Lawrence never writes my mother. She is “a mother”, just as the singer is “a woman”, and one reading is that the article keeps the pain at a distance, as if the speaker cannot quite say whose mother she was. The mark scheme for the June 2024 R paper suggested the home might be an idealised memory, and that reading deserves weight. The poem admits nothing difficult about this childhood, so it may show home as a grieving adult needs to remember it rather than as it was.',
    },
    {
      title: 'Manhood, resistance and surrender',
      body: 'The poem is a contest, and the speaker loses it. “In spite of myself” shows him resisting, and the language around him is the language of conflict and conquest: an ambush in “insidious”, a master in “mastery”, a traitor in “Betrays”, and finally a defeated man whose “manhood is cast / Down”. The line break acts out the fall, leaving “cast” at the end of line 11 so that “Down” drops to the start of line 12. What he is fighting to keep is his adult self-control, and in particular a man’s: manhood here seems to mean not just being grown up but behaving as a man was expected to, calmly and without tears. So the final simile is a real admission: “I weep like a child for the past.” Is that a defeat or a release? One reading sees shame in it, since the speaker would plainly rather not weep. A more convincing reading notices that the poem ends not with the song but with honesty. The man who began by resisting finally tells the truth about what he feels, and the flood that sweeps away his manhood also carries him back to the one place he wanted to be.',
    },
    {
      title: 'Past against present',
      body: 'Everything in the present is set against something in the past, and the past wins every time. There are two women, the singer now and the mother then; two pianos, the “great black piano” of the present and the “tinkling piano” of childhood; two kinds of sound, the singer’s “clamour” and the mother who “smiles as she sings”. Lawrence even rhymes the contest, pairing “clamour” with “glamour” at the ends of lines 9 and 10. The two words differ by a single sound, yet one is noise and the other enchantment, since glamour originally meant a magic spell. Notice that the poem never says the present performance is bad. The singer may be very good: appassionato is a direction to play with passion. The point is that her singing is “vain”, useless, because no skill can compete with a memory. One reading is that the poem is unfair to the present, and that the speaker’s tears stop him hearing the song in front of him. Another is that this is exactly the poem’s subject: the past, once it floods back, leaves no room for anything else.',
    },
    {
      title: 'Nostalgia or grief',
      body: 'Most summaries call Piano a nostalgic poem, and the word fits better than it first seems. Nostalgia comes from two Greek words meaning a homecoming and pain, and the speaker’s heart “weeps to belong / To the old Sunday evenings at home”: pain for home is exactly his condition. But nostalgia usually means a sweet, gentle longing, and the ending is not gentle. The speaker is “Down in the flood of remembrance”, overwhelmed, and remembrance is a solemn word, one used in church services and on memorials to the dead. That is why many readers hear grief for Lawrence’s mother, who died in 1910. The poem never states that she is dead, and a strong answer can make something of that silence: the speaker weeps “for the past”, a loss so complete that it needs no single name. Both readings can be argued. If it is nostalgia, the poem is about the pull of childhood on every adult. If it is grief, the missing mother becomes the poem’s real subject, and the song is only the key that unlocks it.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The adult voice of the poem: a man listening to a woman sing at dusk, overwhelmed by memories of his childhood.',
      body: 'Most readers identify the speaker with Lawrence, and the context invites that, but in an essay call him the speaker. The most important thing about him is how little he does. Almost every verb that involves him is done to him: the woman is singing “to me”, the song is “Taking me back”, it “Betrays me back”, and the glamour of the past “is upon me”. The word I appears only twice, in “till I see” in line 2 and “I weep” in line 12, so his only two actions in the whole poem are seeing and weeping. He is not passive by nature, though. “In spite of myself” shows a proud, controlled adult who does not want to be moved, and the poem is the story of that control giving way. By the end he admits it openly, which makes him, for all his tears, an honest speaker.',
    },
    {
      name: 'The child',
      role: 'The speaker’s younger self, remembered sitting under the piano while his mother sings.',
      body: 'The child is seen from the outside, as “A child sitting under the piano”, not as I. It is as if the adult were looking at a photograph of someone he used to be. The child’s world is small, physical and full of sound: he is under the instrument, in the “boom” of its strings, pressing his mother’s feet. Nothing is asked of him and nothing troubles him. The structure brings him back at the very end, when the adult weeps “like a child”. The same noun returns, but now in a simile about the speaker himself, and the distance between the man and the boy has closed: the speaker has not just remembered the child but become him again.',
    },
    {
      name: 'The mother',
      role: 'The woman at the piano in the speaker’s memory, singing on Sunday evenings at home.',
      body: 'We see her only through a child’s eyes, and from below: her “small, poised feet”, her smile as she sings. Poised suggests grace and balance, a woman calm and in control, which is exactly what the adult speaker loses by the end. The piano she sits at is presumably the one that leads the family’s hymns, “the tinkling piano our guide”, so she is at the centre of the home as well as of the memory. The poem never names her and never calls her my mother: she is “a mother”. Readers who know Lawrence’s life often connect her with Lydia Lawrence, who died in 1910, but the poem gives her no name, no history and no death. She exists only as she was on those Sunday evenings, which may be exactly the point.',
    },
    {
      name: 'The singer',
      role: 'The woman singing in the present, whose song sets off the memory and then cannot hold the speaker.',
      body: 'She is “a woman” in line 1 and “the singer” in line 9, and the poem tells us nothing else about her: not her name, not whether she is a friend or a performer, not whether she plays the piano herself. What we know is her music. At first it is soft and personal, sung at dusk “to me”; by stanza 3 it has become a passionate performance, a “clamour” with the “great black piano appassionato”. Her part in the poem is ironic. She causes everything that happens, since her song opens the memory, yet by the end she is shut out of it, singing to a man lost in the past. One reading makes her a rival to the mother. A fairer one is that she has done nothing wrong, and simply cannot compete with a memory.',
    },
  ],

  extracts: [
    {
      title: 'The song and the memory',
      where: 'Stanza 1, lines 1-4',
      pointer:
        'From “Softly, in the dusk” (line 1) to “smiles as she sings” (line 4): the whole first stanza, anthology page 57.',
      text: 'Softly, in the dusk, a woman is singing to me; / Taking me back down the vista of years, till I see / A child sitting under the piano, in the boom of the tingling strings / And pressing the small, poised feet of a mother who smiles as she sings.',
      annotations: [
        {
          phrase: 'a woman is singing to me',
          note: 'The present continuous tense puts us inside the moment as it happens, and the speaker enters the poem as me, on the receiving end of the sentence rather than its subject. From the first line, things are done to him rather than by him.',
        },
        {
          phrase: 'Taking me back',
          note: 'The participle has no clear subject: it could be the woman, the song or the singing. Memory becomes a journey he is carried on rather than one he chooses, and the verb takes the reader back with him.',
        },
        {
          phrase: 'till I see',
          note: 'This is the first I in the poem, and the speaker’s first action is seeing. Lawrence writes see, not remember, and keeps it in the present tense, so the past is not recalled but appears in front of him like a scene.',
        },
        {
          phrase: 'A child sitting under the piano',
          note: 'The speaker looks at his younger self in the third person, as though at a stranger in a picture. That distance matters, because the last line of the poem closes it.',
        },
        {
          phrase: 'the boom of the tingling strings',
          note: 'Boom is a deep, heavy sound, while tingling is a feeling on the skin as well as a thin ringing. Beneath the instrument, the child feels the music in his body, a closeness no listener in the present can share.',
        },
        {
          phrase: 'a mother who smiles as she sings',
          note: 'The soft sounds of smiles and sings close the stanza gently, and the rhyme of sings with strings ties the mother to the music. The indefinite article, a mother rather than my mother, keeps her at a slight distance.',
        },
      ],
      question:
        'Explore how Lawrence presents the speaker’s memory of childhood in lines 1 to 4. You should write about the move from the present to the past, the images of the child and the mother, and the use of sound.',
    },
    {
      title: 'Betrayed back to Sunday evenings',
      where: 'Stanza 2, lines 5-8',
      pointer:
        'From “In spite of myself” (line 5, numbered in the anthology) to “the tinkling piano our guide” (line 8): the whole second stanza.',
      text: 'In spite of myself, the insidious mastery of song / Betrays me back, till the heart of me weeps to belong / To the old Sunday evenings at home, with winter outside / And hymns in the cosy parlour, the tinkling piano our guide.',
      annotations: [
        {
          phrase: 'In spite of myself',
          note: 'The speaker is divided against himself. Part of him wants to resist the song, and the opening phrase admits that the rest of him is already giving way, so the stanza begins with a defeat.',
        },
        {
          phrase: 'the insidious mastery of song',
          note: 'Insidious comes from the Latin for an ambush, and suggests something that lies in wait and works unseen. Mastery can mean skill or domination: the song is expertly sung and it is in control of him.',
        },
        {
          phrase: 'Betrays me back',
          note: 'To betray is to hand someone over to an enemy. Here the traitor hands the speaker over to his own past, and adding back to the verb turns the betrayal into a movement through time.',
        },
        {
          phrase: 'the heart of me weeps to belong',
          note: 'Weeping arrives here, before the tears of the last line, but it is inward: his heart weeps while his face perhaps stays composed. Belong names what he wants, which is membership as much as memory.',
        },
        {
          phrase: 'with winter outside',
          note: 'Three words build the walls of the memory. The cold is kept out, which makes the parlour feel warmer and safer by contrast, and suggests that childhood was a shelter from a harder world.',
        },
        {
          phrase: 'the tinkling piano our guide',
          note: 'Our is the only plural pronoun in the poem, the one moment the speaker belongs to a group. The piano leads the singing like a guide on a journey, the same journey back that the song is taking him on now.',
        },
      ],
      question:
        'How does Lawrence use language in lines 5 to 8 to present the speaker’s feelings about the past? Refer closely to the words and phrases he uses.',
    },
    {
      title: 'The flood of remembrance',
      where: 'Stanza 3, lines 9-12',
      pointer:
        'From “So now it is vain” (line 9) to “I weep like a child for the past” (line 12): the whole last stanza. The anthology numbers line 10, which ends with the word glamour.',
      text: 'So now it is vain for the singer to burst into clamour / With the great black piano appassionato. The glamour / Of childish days is upon me, my manhood is cast / Down in the flood of remembrance, I weep like a child for the past.',
      annotations: [
        {
          phrase: 'So now it is vain',
          note: 'So sounds like the conclusion of an argument, and now brings us back to the present. Vain means useless: whatever the singer does next cannot win him back.',
        },
        {
          phrase: 'burst into clamour',
          note: 'Burst is sudden and violent, and clamour is loud, confused noise. After the soft opening, the present has turned up its volume, as if trying to shout down the memory, and it still fails.',
        },
        {
          phrase: 'the great black piano appassionato',
          note: 'The Italian musical direction appassionato, meaning passionately, suggests a trained performance rather than a family singing together, and great and black make the instrument large and imposing. Beside the tinkling piano of stanza 2, it is grand, but it is not home.',
        },
        {
          phrase: 'The glamour / Of childish days',
          note: 'Glamour first meant magic, a spell cast over someone, so the past is not just pleasant but enchanting, and the enchantment is upon him. The phrase runs across the line break, pulling the reader on as the memory pulls him.',
        },
        {
          phrase: 'my manhood is cast / Down',
          note: 'The enjambment performs the collapse: cast is left at the end of line 11, and Down falls to the start of line 12. Set just after glamour, cast may also echo the old phrase for putting someone under a spell.',
        },
        {
          phrase: 'I weep like a child for the past',
          note: 'This last clause follows two others joined only by commas, so the feelings pile up without control. The I who saw a child in lines 2 and 3 now weeps like one, and the rhyme of cast with past ties his fall to the time he has lost.',
        },
      ],
      question:
        'Explore how Lawrence presents the speaker’s loss of control in lines 9 to 12. You should write about the contrast between present and past, the choice of words, and the way the lines are structured.',
    },
  ],

  vocabulary: [
    {
      term: 'dusk',
      definition:
        'The darker stage of twilight, just before night. The poem begins on the boundary between day and night, a fitting moment for a man caught between present and past.',
    },
    {
      term: 'vista',
      definition:
        'A long view, especially one framed by rows of trees or buildings, from the Italian for sight or view. It also means a long view in the mind over past or future events, which is how Lawrence uses it for the years in line 2.',
    },
    {
      term: 'insidious',
      definition:
        'Harmful in a gradual, hidden way. From the Latin insidiae, an ambush: something that lies in wait to trap you.',
    },
    {
      term: 'mastery',
      definition:
        'Great skill at something, or control and power over someone. Both meanings work in line 5: the song is skilful, and it masters him.',
    },
    {
      term: 'betray',
      definition:
        'To hand someone over to an enemy, or to be disloyal; also to reveal something without meaning to. Line 6 uses the first sense and hints at the second, since the song exposes what he really feels.',
    },
    {
      term: 'parlour',
      definition:
        'A sitting room in a private house, where a family would gather or receive visitors. In the poem it is the room of Sunday music.',
    },
    {
      term: 'hymn',
      definition:
        'A religious song of praise, sung in church or chapel services and, as in line 8, at home.',
    },
    {
      term: 'vain',
      definition:
        'Useless, having no effect, as in the phrase in vain. It can also mean too proud of oneself, a sense that may colour the performance in lines 9 and 10, though usefulness is the main meaning.',
    },
    {
      term: 'clamour',
      definition:
        'A loud and confused noise, often of voices. It is the opposite of the soft singing that opens the poem.',
    },
    {
      term: 'appassionato',
      definition: 'An Italian musical direction telling a performer to play or sing passionately.',
    },
    {
      term: 'glamour',
      definition:
        'Now attractive charm, but originally a Scottish word for magic or enchantment, especially in the phrase “to cast the glamour”, and popularised by Walter Scott. In line 10 the older sense of a spell is the stronger one.',
    },
    {
      term: 'manhood',
      definition:
        'The state of being an adult man, and the qualities traditionally expected of one, such as courage and self-control.',
    },
    {
      term: 'remembrance',
      definition:
        'The act of remembering, usually with a solemn sense; the word is used in church services and on memorials to the dead.',
    },
    {
      term: 'poised',
      definition: 'Balanced and steady; also calm, graceful and in control of oneself.',
    },
    {
      term: 'nostalgia',
      definition:
        'A sentimental longing for a happy time in the past. From the Greek nostos, a homecoming, and algos, pain; the word was coined in 1688 for severe homesickness, which at the time was considered a disease.',
    },
    {
      term: 'quatrain',
      definition: 'A stanza of four lines. Piano is three quatrains, twelve lines in all.',
    },
    {
      term: 'rhyming couplet',
      definition:
        'Two lines in a row that rhyme. Piano rhymes in couplets throughout (AABB), from me and see in lines 1 and 2 to cast and past in lines 11 and 12.',
    },
    {
      term: 'enjambment',
      definition:
        'A sentence running on from one line into the next without a pause, as when cast at the end of line 11 runs on to Down.',
    },
    {
      term: 'caesura',
      definition:
        'A pause in the middle of a line, usually marked by punctuation, such as the full stop after appassionato in line 10, where the present gives way to the past.',
    },
  ],

  examPractice: {
    questions: [
      {
        question: 'Compare how the writers present memories of the past in Piano and Remember.',
        skill:
          'Comparing two named poems: language, form and structure, and the links between them',
        guidance: [
          'Open with a sentence that answers the question for both poems and names a difference: Lawrence is pulled helplessly back into his own past, while Rossetti imagines how she will be remembered after her death.',
          'Compare who is remembering. In Piano the speaker remembers his own childhood; in Remember the speaker asks her beloved to remember her. One poem looks back, the other forward.',
          'Compare how much control each speaker has. Lawrence’s speaker resists and loses (“In spite of myself”, “Betrays me back”); Rossetti’s speaker reasons her way to a decision in the sestet, preferring that her beloved “forget and smile”.',
          'Compare the feeling each poem ends on: both involve sadness, but Piano ends in tears, while Remember asks the person it addresses not to grieve, and ends by preferring forgetting and a smile to remembering and sadness.',
          'Compare form. Piano’s long lines and rhyming couplets have the flow of a song, which suits a flood of memory; Remember is a Petrarchan sonnet whose turn at line 9 moves from remembering to forgetting.',
          'Keep both poems in every paragraph, with short quotations and close comment on single words, and finish with a judgement: which poem presents memory as the stronger force, and why?',
        ],
      },
      {
        question:
          'Compare how the writers present feelings about parents in Piano and one other poem from the anthology.',
        skill:
          'Comparing with a poem of your choice: language, form and structure, and the links between them',
        guidance: [
          'Choose a partner poem with a clear parent in it. Poem at Thirty-Nine, in which Alice Walker remembers her father, was paired with Piano on the June 2018 R paper; Do not go gentle into that good night, addressed to a dying father, is another strong choice.',
          'Pin down the feelings in Piano precisely: love for the mother, longing to belong to her world again, and a grief the poem never names, all carried by small physical details such as her “small, poised feet”.',
          'Compare how each parent is seen. Lawrence’s mother is seen from below, through a child’s eyes, and is never named; Walker’s father is remembered through what he taught her and through the adult she has become.',
          'Compare the speaker’s present. Lawrence’s speaker is overwhelmed and weeps; Walker’s speaker carries her father on in her own life, in the way she cooks and lives.',
          'Compare structure: Piano moves from present to past and back, and ends in collapse. Say how your chosen poem moves, and what its ending does to the feeling.',
          'Keep context to a clause at most. This section rewards analysis of language, form and structure and comparison, not context, so Lydia Lawrence’s death in 1910 earns a mention only if it supports a reading of the last line, and the poem itself never mentions death.',
        ],
      },
      {
        question: 'Compare how the writers present childhood in Piano and Half-past Two.',
        skill:
          'Comparing two named poems: language, form and structure, and the links between them',
        guidance: [
          'Start from the shared situation: both poems look back from adulthood at a moment in childhood, and both are interested in how a child experiences time and the senses.',
          'Compare the moment itself. Lawrence’s child is safe and loved, under the piano at his mother’s feet; Fanthorpe’s is alone and frightened, kept behind at school for doing something wrong.',
          'Compare how time works. In Piano the adult is pulled back into the past; in Half-past Two the child, who cannot yet tell the time, slips out of time altogether for a while.',
          'Compare voice and form: Lawrence’s first person and rhyming couplets against Fanthorpe’s mostly third-person free verse, with its invented compound words for a child’s idea of time.',
          'Compare the endings. Lawrence ends in tears for what is lost; Fanthorpe ends by saying the child never forgot his escape. Decide which poem presents childhood as more precious, and why.',
        ],
      },
      {
        question:
          'Compare how the writers present strong emotions in Piano and one other poem from the anthology.',
        skill:
          'Comparing with a poem of your choice: language, form and structure, and the links between them',
        guidance: [
          'Pick a partner in which strong feeling is openly urged or openly held back: Do not go gentle into that good night (rage against a father’s death) or If- (a father teaching his son self-control) both work.',
          'In Piano, trace the emotion as a process rather than a state: resistance in stanza 2, collapse in stanza 3.',
          'Analyse the language of force, “insidious”, “mastery”, “Betrays”, “burst” and “flood”: emotion is presented as an enemy that overpowers the speaker.',
          'Compare your chosen poem: does its speaker urge feeling, as Thomas does with his father, or urge control, as Kipling does with his son? Piano shows what happens when control fails.',
          'Compare form: Piano’s long lines and couplets run on, with no punctuation at the end of eight of its twelve lines; the refrains of a villanelle, or Kipling’s single long sentence, create a different kind of pressure.',
          'Conclude with a judgement about which poem makes emotion more convincing, and why.',
        ],
      },
    ],
    tips: [
      'Track the pronouns. The speaker is me five times and I only twice, in “till I see” and “I weep”. Pointing that out shows you are reading the grammar of the poem, not just its images.',
      'Always discuss both pianos and both women. The poem’s argument lives in the contrast between the “tinkling piano” and the “great black piano”, and between the mother’s smile and the singer’s “clamour”.',
      'Do not call Piano simply a happy or nostalgic poem. The strongest answers show the conflict: a man who resists feeling, loses, and is perhaps relieved to lose.',
      'Use context as a possibility, not a fact about the poem, and keep it brief: this section rewards language, form and structure and comparison, not context. The poem never says the mother has died, so write that the ending can be read as grief for Lawrence’s mother, not that it is.',
      'Quote short phrases and comment on single words: “insidious”, “Betrays”, “glamour” and “cast” each repay a sentence of their own. The mark scheme for the June 2024 R paper warns that summary, paraphrase or a list of devices is not enough.',
      'Keep the comparison running. The same mark scheme says that an answer considering only one poem cannot go beyond the top of Level 2, so bring the second poem into every paragraph, not just the last.',
      'The anthology poems are printed for you in the exam, so spend revision time choosing and practising partner poems rather than memorising lines.',
    ],
  },

  modelAnswer: {
    question: 'Compare how the writers present memories of the past in Piano and Remember.',
    paragraph:
      'Both poets present memory as something that cannot be controlled, but they stand at opposite ends of it. Lawrence’s speaker is dragged backwards: the song is “Taking me back down the vista of years”, and the verb makes him a passenger rather than someone choosing to remember. The grammar keeps him there, since for most of the poem he is acted on rather than acting: the woman sings “to me”, the song “Betrays me back”, and the glamour of the past “is upon me”. When he finally becomes the subject of a main clause, it is to surrender: “I weep like a child for the past.” The simile brings back the “child” of line 3, so the adult has not simply remembered his younger self but become him again. Rossetti’s speaker, by contrast, looks forward to becoming a memory. Her repeated imperative, “Remember me”, sounds like a command, yet after the turn she withdraws it, deciding that it is “Better by far you should forget and smile”. Where Lawrence cannot stop remembering although it hurts, Rossetti would rather be forgotten than remembered with pain. One reading is that hers is the more controlled poem, since the sonnet reasons its way to a conclusion, while Lawrence’s couplets run on like the “flood of remembrance” that sweeps his manhood away.',
    commentary: [
      'It opens with a comparative argument that covers both poems and names a difference, so the paragraph is organised around comparison rather than two separate descriptions.',
      'Quotations are short and built into the sentences, and each is followed by comment on a single choice: the verb Taking, the object pronoun me, the returning noun child.',
      'It reads grammar and structure as well as imagery: the pattern of object pronouns across the poem, and the child of line 3 returning in line 12, show knowledge of the whole poem rather than one line.',
      'It compares methods, not just content: Rossetti’s imperative and turn against Lawrence’s passive grammar and running couplets.',
      'It ends with a judgement framed as a reading, which shows a personal response without presenting a disputed interpretation as fact.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-2',
      title: 'A song at dusk',
      summary:
        'In the present, at dusk, a woman sings softly to the speaker, and her song carries him back through the years until a scene from his childhood appears before him.',
      setting: 'A room at dusk, in the present',
      who: ['The speaker', 'The singer'],
      quote: 'Softly, in the dusk, a woman is singing to me',
      themes: ['Memory and the power of music'],
      tension: 2,
      significance:
        'Sets up the trigger for the whole poem: music opens the past without the speaker choosing to remember.',
    },
    {
      where: 'Stanza 1, lines 3-4',
      title: 'Under the piano',
      summary:
        'He sees a child, his younger self, sitting beneath the piano among its booming, tingling strings and pressing the feet of his mother, who smiles as she sings.',
      setting: 'Beneath the family piano, in the speaker’s memory',
      who: ['The child', 'The mother'],
      quote: 'the small, poised feet of a mother who smiles as she sings',
      themes: ['Home, childhood and the mother', 'Memory and the power of music'],
      tension: 1,
      significance:
        'The calmest and warmest image in the poem, and the picture of closeness the adult longs to return to.',
    },
    {
      where: 'Stanza 2, lines 5-6',
      title: 'The song’s ambush',
      summary:
        'Against his will, the skill and power of the song draw him further back, and his heart weeps with the longing to belong to that world again.',
      setting: 'The present room, and the speaker’s mind',
      who: ['The speaker', 'The singer'],
      quote: 'In spite of myself, the insidious mastery of song',
      themes: ['Manhood, resistance and surrender', 'Memory and the power of music'],
      tension: 3,
      significance:
        'Introduces the conflict: the adult resists, and the language of ambush and betrayal shows that he is losing.',
    },
    {
      where: 'Stanza 2, lines 7-8',
      title: 'Sunday evenings at home',
      summary:
        'The memory widens to the family’s Sunday evenings: winter outside, hymns in the warm parlour, and the piano leading them as they sing together.',
      setting: 'The family parlour on a winter Sunday evening',
      who: ['The child', 'The mother'],
      quote: 'the tinkling piano our guide',
      themes: ['Home, childhood and the mother', 'Nostalgia or grief'],
      tension: 2,
      significance:
        'Shows that what he has lost is a whole world of belonging, caught in the poem’s only use of the word our.',
    },
    {
      where: 'Stanza 3, lines 9-10',
      title: 'The present cannot compete',
      summary:
        'Back in the present, the singer’s passionate performance with the great black piano is useless: however loudly she sings, she cannot pull him out of the past.',
      setting: 'The present room, with the great black piano',
      who: ['The speaker', 'The singer'],
      quote: 'the great black piano appassionato',
      themes: ['Past against present'],
      tension: 4,
      significance:
        'Sets the imposing present against the homely past, and rhymes clamour with glamour to show which one wins.',
    },
    {
      where: 'Stanza 3, lines 10-12',
      title: 'The flood',
      summary:
        'The enchantment of childhood takes hold of him, his adult self-control is swept away in a flood of memory, and he weeps like a child for the past.',
      setting: 'The present room, overwhelmed by memory',
      who: ['The speaker'],
      quote: 'I weep like a child for the past',
      themes: ['Manhood, resistance and surrender', 'Nostalgia or grief'],
      tension: 5,
      significance:
        'The climax: the child the speaker saw in line 3 returns in the speaker himself, and the resistance of stanza 2 collapses.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The child',
      kind: 'the adult and his younger self',
      note: 'In line 3 the speaker looks at a child as if at someone else; by line 12 he weeps like one, and the distance between them has gone.',
    },
    {
      from: 'The child',
      to: 'The mother',
      kind: 'son and mother',
      note: 'A closeness of touch and sound: he sits at her feet beneath the piano while she smiles and sings, the image the whole poem longs for.',
    },
    {
      from: 'The speaker',
      to: 'The singer',
      kind: 'listener and performer',
      note: 'Her song sets off the memory, but once it has done so she loses him: by stanza 3 her singing is vain, however passionate.',
    },
    {
      from: 'The singer',
      to: 'The mother',
      kind: 'two women, two pianos',
      note: 'The poem sets them against each other, the great black piano and the tinkling one, clamour against a smile, and the remembered woman wins.',
    },
  ],

  compareWith: [
    {
      title: 'Remember by Christina Rossetti',
      href: '/igcse/edexcel/poetry/remember',
      reason:
        'Paired with Piano on the June 2024 R paper: Lawrence cannot stop remembering the past, while Rossetti’s speaker would rather be forgotten than remembered with sadness.',
    },
    {
      title: 'Half-past Two by U A Fanthorpe',
      href: '/resources/revision-notes/half-past-two',
      reason:
        'Both poems look back at a moment of childhood, but Fanthorpe’s child briefly escapes time altogether, while Lawrence’s adult is pulled helplessly back into it.',
    },
    {
      title: 'Do not go gentle into that good night by Dylan Thomas',
      href: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
      reason:
        'Two rhymed, strongly patterned poems about a parent and overwhelming feeling: Thomas urges his dying father to fight, while Lawrence’s speaker gives up the fight against his own feelings.',
    },
    {
      title: 'If- by Rudyard Kipling',
      href: '/igcse/edexcel/poetry/if',
      reason:
        'Kipling’s speaker, a father, teaches his son to keep his feelings under control; Piano shows a grown man whose self-control collapses, so the pair opens a debate about what manhood means.',
    },
  ],

  contentGuidance: ['mortality'],

  quotesFromElsewhere: [
    // Lawrence's own phrase for the months after his mother's death, as
    // reported by the Wikipedia biography cited below.
    'sick year',
    // The old Scottish idiom recorded under glamour in the Online Etymology
    // Dictionary, cited below.
    'to cast the glamour',
    // Christina Rossetti, Remember, as printed on page 70 of the same anthology
    // (lines 1 and 13, and a phrase from line 13). Public domain; checked
    // against the Pearson PDF, not against the Piano edition held here.
    'Remember me',
    'Better by far you should forget and smile',
    'forget and smile',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), page 57 (Piano) and page 70 (Remember), read and rendered from Pearson’s PDF on 25 September 2026. Every quotation checked here; line numbers follow it.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'D. H. Lawrence, New Poems (London: Martin Secker, first published October 1918; new edition reset August 1919), Project Gutenberg eBook #22726: the edition held in src/data/full-texts/piano.ts. Also the dedication to Amy Lowell.',
      url: 'https://www.gutenberg.org/ebooks/22726',
    },
    {
      label: 'Academy of American Poets, Piano: a second, independent copy of the text, identical.',
      url: 'https://poets.org/poem/piano',
    },
    {
      label:
        'The Reader, Featured Poem: Piano by D. H. Lawrence: a third copy of the text, identical.',
      url: 'https://www.thereader.org.uk/featured-poem-piano-d-h-lawrence/',
    },
    {
      label:
        'Pearson Edexcel International GCSE in English Literature (4ET1) specification, Issue 3 (August 2025): Paper 1 Section B is a choice of two essay questions comparing two Part 3 poems; closed book, with the anthology poems provided in the examination; the section assesses language, form and structure and comparison, not context. Read from Pearson’s PDF, 26 September 2026. The anthology’s introduction adds that a Poetry Booklet of all the Part 3 poems is provided as an insert with the question paper.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson, Question style for 4ET1 SAMs to January 2019 (Issue 1, February 2021): the June 2018 R paper asked about feelings about parents in Piano and Poem at Thirty-Nine; the R papers are sat in countries with major time differences to GMT.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/summary-of-questions-set-for-4et1-sams-to-january-2019.pdf',
    },
    {
      label:
        'Pearson, Mark Scheme (Results) June 2024, International GCSE English Literature (4ET1) Paper 1R, Section B Question 2 (Piano and Remember): the theme of remembering, the reading of the home as possibly idealised, the warning against summary or listing devices, and the Level 2 cap for an answer on one poem. Re-read from Pearson’s PDF on 26 September 2026.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01r-rms-20240822.pdf',
    },
    {
      label:
        'Wikipedia, D. H. Lawrence: birth date and place, parents and their occupations, his mother’s ambitions for her children, her death from cancer after the proofs of The White Peacock appeared in 1910, his phrase sick year, University College Nottingham and Davidson Road School, Croydon, from 1908.',
      url: 'https://en.wikipedia.org/wiki/D._H._Lawrence',
    },
    {
      label:
        'Wikipedia, Sons and Lovers: 1913, Duckworth; Gertrude Morel and the sense of his mother’s wasted life.',
      url: 'https://en.wikipedia.org/wiki/Sons_and_Lovers',
    },
    {
      label:
        'George Szirtes, Discovering subject: Lawrence’s Piano (5 July 2011): prints the twenty-line notebook version beside the published poem. The mother’s small brown piano and a sister singing are in the notebook version and not in the published one; Szirtes notes that the sister and a Hungarian air disappear, and calls the revision a refocusing on the child’s sensations. Its wording of the draft is not quoted here.',
      url: 'http://georgeszirtes.blogspot.com/2011/07/discovering-subject.html',
    },
    {
      label:
        'Encyclopedia.com (Gale, Poetry for Students), Piano: confirms the earlier version and the mother’s piano. NOT relied on for dates: it says the poem first appeared in Love Poems and Others (1913), which is wrong (see the next source), and its drafting dates (1906 and 1911) are not confirmed elsewhere, so no drafting date is given.',
      url: 'https://www.encyclopedia.com/literature-and-arts/performing-arts/music-theory-forms-and-instruments/piano',
    },
    {
      label:
        'D. H. Lawrence, Love Poems and Others (Duckworth, 1913), Project Gutenberg eBook #54058: its contents were checked and do not include Piano.',
      url: 'https://www.gutenberg.org/ebooks/54058',
    },
    {
      label:
        'Wikipedia, Parlour music: amateur performance at home, sheet music, the nineteenth-century heyday, the decline with records and radio.',
      url: 'https://en.wikipedia.org/wiki/Parlour_music',
    },
    {
      label:
        'Online Etymology Dictionary: glamour (Scottish, magic, the phrase to cast the glamour, Walter Scott).',
      url: 'https://www.etymonline.com/word/glamour',
    },
    {
      label: 'Online Etymology Dictionary: insidious (Latin insidiae, ambush).',
      url: 'https://www.etymonline.com/word/insidious',
    },
    {
      label:
        'Online Etymology Dictionary: vista (Italian, sight or view; the figurative mental view).',
      url: 'https://www.etymonline.com/word/vista',
    },
    {
      label:
        'Online Etymology Dictionary: nostalgia (Greek nostos and algos; coined 1688 for homesickness).',
      url: 'https://www.etymonline.com/word/nostalgia',
    },
    {
      label: 'Wiktionary: appassionato (musical direction, passionately).',
      url: 'https://en.wiktionary.org/wiki/appassionato',
    },
  ],
}
