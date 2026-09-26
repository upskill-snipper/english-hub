import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Pride and Prejudice, Jane Austen (1813). A supplement: the existing page at
 * /revision/texts/pride-and-prejudice keeps its overview, context, characters and
 * key quotations, and this file adds the sections it lacked (developed themes,
 * annotated passages, language analysis, structure and form, vocabulary, exam
 * practice and a model answer) plus the timeline and character map the
 * animations draw from.
 *
 * No edition of the novel is held in src/data/full-texts, so the test cannot
 * check these quotations. They follow the Wikisource transcription of the first
 * edition (three volumes, Egerton, 1813). On 25 September 2026 every quoted
 * phrase in this file, the three printed passages included, was extracted by
 * script and searched for, chapter by chapter, in two complete copies: the
 * Wikisource 1813 text and the Republic of Pemberley electronic text. Every one
 * was found in both, in the chapter this guide gives, and the speaker of each was
 * then read in context. The two copies differ only in the odd comma, which is
 * ignored; where they differ, the 1813 punctuation is kept.
 *
 * A third copy, the 1894 George Allen edition that Project Gutenberg reproduces
 * (eBook 1342), differs from 1813 in three words quoted here: it prints "insure"
 * for "ensure" (Chapter 18), "blameless" for "blameable" (Chapter 36) and "what
 * was your mother" for "who was your mother" (Chapter 56). The 1813 readings are
 * kept, and the exam tips warn students that editions differ in this way.
 *
 * Plot facts were read in context in the same copies. Two small errors in the
 * first draft were corrected on that pass: the Netherfield ball summary had the
 * embarrassments out of order (Mrs Bennet's supper talk comes before Mary's
 * song), and the Collins proposal was placed in a "breakfast room" the novel
 * does not name.
 *
 * A second, adversarial pass on 26 September 2026 fetched all 61 Wikisource
 * chapters afresh and found every quotation and all three passages again,
 * continuous and in the chapter given, with the variants confirmed in the
 * Gutenberg and Pemberley copies. It corrected plot detail rather than
 * wording: the first proposal's room is not named either, so "drawing room"
 * went; Darcy hands over the letter at a gate into the park, not in it; the
 * "good joke" in Lydia's letter is signing herself Lydia Wickham, not the
 * elopement as such; Darcy's confession to Bingley (Chapter 58) came after
 * Bingley was back at Netherfield, so it cleared the way for his proposal
 * rather than bringing him back; Elizabeth's refusal was settled before
 * Darcy's confident look, which "could only exasperate farther"; and "if
 * your nephew does not object" is conditional, since Darcy had objected.
 *
 * Chapters are given both ways, because editions differ: by volume, as first
 * printed (Volume I has 23 chapters, Volumes II and III 19 each), and
 * continuously from 1 to 61.
 */
export const guide: StudyGuide = {
  slug: 'pride-and-prejudice',
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  form: 'novel',
  scope:
    'The whole novel (1813), first published in three volumes of 23, 19 and 19 chapters, 61 in all.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'First published anonymously in three volumes by Thomas Egerton, London, on 28 January 1813. Quotations follow the text of the first edition as transcribed by Wikisource; punctuation varies slightly between modern editions.',
  },

  native: {
    overview: '/revision/texts/pride-and-prejudice',
    context: '/revision/texts/pride-and-prejudice',
    characters: '/revision/texts/pride-and-prejudice',
    keyQuotes: '/revision/texts/pride-and-prejudice',
  },

  themes: [
    {
      title: 'Pride and self-knowledge',
      body: "The title names two faults, and the novel's cleverest move is refusing to give one to each lover. Darcy's pride is public from Chapter 3, where the neighbourhood decides he is “above his company, and above being pleased”. Elizabeth's pride is harder to see, because it is pride in her own judgement, and she recognises it only after reading his letter: “vanity, not love, has been my folly” (Chapter 36). Mary Bennet, the family bore, supplies the sharpest definition in Chapter 5: “Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.” By that measure Darcy is proud and Elizabeth, stung by his remark at the ball, is vain. The most convincing reading is that the novel is less about getting rid of pride than about correcting it with knowledge. Darcy's confession in Chapter 58 that he was “given good principles, but left to follow them in pride and conceit” blames an upbringing rather than a fixed nature, and his conduct at Pemberley shows the correction at work. A strong answer can push back: Darcy's letter defends most of what he did, and it is Elizabeth who has to re-read her whole history. “Till this moment, I never knew myself” is hers, not his, which suggests the novel's deepest change happens in its heroine.",
    },
    {
      title: 'First impressions and judgement',
      body: "Austen's working title was First Impressions, and the plot is built as a test of them. Elizabeth judges Darcy on one overheard remark and Wickham on one pleasant evening, and she is wrong both times. The novel is careful to show that her mistake is not stupidity but a clever mind working for a wounded feeling: she admits in Chapter 5 that she could “easily forgive his pride, if he had not mortified mine”. Wickham's story in Chapter 16 works because it confirms what she already wants to believe, and she never asks why a near-stranger is telling her something so private. Darcy's letter supplies what first impressions lack, which is evidence, and Elizabeth's response in Chapter 36 models good judgement. She first puts it away, protesting she “would never look in it again”, but then she “read, and re-read with the closest attention”, tries to “recollect some instance of goodness” in Wickham, finds none, and changes her mind. Jane is the useful contrast. She thinks ill of no one, and so she is “entirely deceived in Miss Bingley's regard” (Chapter 26) as surely as Elizabeth is deceived in Wickham. One reading is that the novel prefers Jane's charity to Elizabeth's cleverness; the stronger one is that it trusts neither without patience. Darcy's warning at the Netherfield ball, that Wickham's manners “ensure his making friends”, turns out to be exactly right, and it is the one thing Elizabeth will not hear.",
    },
    {
      title: 'Marriage and money',
      body: "The first sentence makes a joke of marriage as a financial transaction, and the novel never lets the joke go. Mr Bennet's estate of “two thousand a year” is entailed away from his daughters, so marriage is the only secure future open to them, and every marriage in the book is measured against that fact. Charlotte Lucas sees it most clearly. To her, marriage is “the only honourable provision for well-educated young women of small fortune” (Chapter 22), and she accepts Mr Collins knowing exactly what he is. Elizabeth's verdict that Charlotte has “sacrificed every better feeling to worldly advantage” is harsh, and the novel lets us see that it is harsh: Charlotte is “twenty-seven, without having ever been handsome”, and has no money. The Bennets' own marriage shows the cost of choosing the other way, on looks alone, and Lydia's shows what happens when a couple are joined only because “their passions were stronger than their virtue” (Chapter 50). Against these the novel sets an ideal, described in the same chapter as “an union that must have been to the advantage of both”, in which each partner improves the other. Money is not removed from the ideal. Elizabeth's joke that her love dates from “his beautiful grounds at Pemberley” (Chapter 59) is funny because it is not entirely false. The best reading is that Austen wants love and prudence to agree, not to ask her heroine to choose between them.",
    },
    {
      title: 'Class and rank',
      body: "The society of the novel is finely graded, and much of its comedy comes from people guarding their place in it. Darcy's first proposal asks whether Elizabeth could expect him “to rejoice in the inferiority of your connections” (Chapter 34). Lady Catherine asks whether “the shades of Pemberley” are “to be thus polluted” (Chapter 56). Mr Collins, her clergyman, praises her “affability and condescension” (Chapter 14) as if rudeness from the great were a gift. Elizabeth's answer to Lady Catherine is the novel's clearest statement on the subject: “He is a gentleman; I am a gentleman's daughter; so far we are equal.” Notice how careful that claim is. Elizabeth does not reject rank; she claims her place within it. That is why one reading calls the novel conservative: it ends with a gentleman's daughter becoming mistress of a great estate and the order of things untouched. A more persuasive reading looks at who is honoured and who is exposed. Mr Gardiner, who lives “by trade, and within view of his own warehouses”, is “a sensible, gentlemanlike man” (Chapter 25), and the last sentence of the novel records the Darcys' “warmest gratitude” to him and his wife. Lady Catherine, the highest-ranking character, is the rudest. Austen does not overturn class, but she insists that manners and conduct, not birth, decide who deserves respect.",
    },
    {
      title: 'Women and dependence',
      body: "The novel rarely states its argument about women openly, but it is there in the arithmetic. The Bennet daughters cannot inherit Longbourn, which is entailed “in default of heirs male” (Chapter 7), and their father has saved nothing for them, a failure the narrator records in Chapter 50. A woman's education is designed to make her marriageable: Miss Bingley's list of what an accomplished woman needs, from music to “the modern languages”, is a catalogue of display, and Elizabeth's reply that she wonders at Darcy “knowing any” such women mocks the whole idea (Chapter 8). Her refusal of Mr Collins, in which she asks to be treated “as a rational creature speaking the truth from her heart” (Chapter 19), is a claim to be heard as a person rather than acquired as a prize, and his refusal to believe her shows how little a woman's words were expected to mean. One reading makes Elizabeth a feminist heroine before her time. A more careful one notes that she escapes dependence by marrying the richest man in the book. Perhaps Austen's point is that a woman's independence in 1813 consisted largely in the right to refuse, which Elizabeth uses against Collins, Darcy and Lady Catherine, and that the right mattered precisely because refusing was so risky.",
    },
    {
      title: 'Family and responsibility',
      body: "Parents in this novel are more often a danger than a protection. The business of Mrs Bennet's life, the narrator says in Chapter 1, is “to get her daughters married”, and Lydia is “a favourite with her mother, whose affection had brought her into public at an early age” (Chapter 9). Mr Bennet is cleverer and far funnier, but his wit is a way of not acting. When Elizabeth warns him that Lydia should not go to Brighton, he answers that she “will never be easy till she has exposed herself in some public place or other” (Chapter 41), and lets her go. His remark to Elizabeth over Collins's letter in Chapter 57, “For what do we live, but to make sport for our neighbours, and laugh at them in our turn?”, is the philosophy of a man who has turned his family into an entertainment. After the elopement he asks to “feel how much I have been to blame” (Chapter 48), but his remorse does not last. Lydia seems to feel nothing: her farewell letter to Mrs Forster laughs that it will be a “good joke” when she signs her name Lydia Wickham (Chapter 47). It is easy to make Lydia the villain of the crisis. The more convincing reading spreads the blame across Wickham's calculation, Mrs Bennet's indulgence and Mr Bennet's neglect. The rescue comes from outside the family, from Darcy and Mr Gardiner, which shows how far a family's reputation was shared: one daughter's disgrace would have fallen on all her sisters.",
    },
  ],

  extracts: [
    {
      title: "Darcy's first proposal",
      where: 'Volume II, Chapter 11 (Chapter 34)',
      pointer:
        'At Hunsford parsonage, from “He sat down for a few moments” to “his countenance expressed real security.”',
      text: "He sat down for a few moments, and then getting up walked about the room. Elizabeth was surprised, but said not a word. After a silence of several minutes he came towards her in an agitated manner, and thus began,\n\n“In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.”\n\nElizabeth's astonishment was beyond expression. She stared, coloured, doubted, and was silent. This he considered sufficient encouragement, and the avowal of all that he felt and had long felt for her, immediately followed. He spoke well, but there were feelings besides those of the heart to be detailed, and he was not more eloquent on the subject of tenderness than of pride. His sense of her inferiority—of its being a degradation—of the family obstacles which judgment had always opposed to inclination, were dwelt on with a warmth which seemed due to the consequence he was wounding, but was very unlikely to recommend his suit.\n\nIn spite of her deeply-rooted dislike, she could not be insensible to the compliment of such a man's affection, and though her intentions did not vary for an instant, she was at first sorry for the pain he was to receive; till, roused to resentment by his subsequent language, she lost all compassion in anger. She tried, however, to compose herself to answer him with patience, when he should have done. He concluded with representing to her the strength of that attachment which, in spite of all his endeavours, he had found impossible to conquer; and with expressing his hope that it would now be rewarded by her acceptance of his hand. As he said this, she could easily see that he had no doubt of a favourable answer. He spoke of apprehension and anxiety, but his countenance expressed real security.",
      annotations: [
        {
          phrase: 'In vain have I struggled.',
          note: 'The proposal opens with defeat, not delight. Love is presented as a battle Darcy has lost, and the two blunt sentences that follow, “It will not do” and “My feelings will not be repressed”, read like self-control giving way under pressure.',
        },
        {
          phrase: 'She stared, coloured, doubted, and was silent.',
          note: 'Three quick verbs, and then a fourth item that is the absence of action: the list runs out into silence. Elizabeth, whose weapon is talk, is left with nothing to say, which is both comic and a measure of her shock.',
        },
        {
          phrase: 'he was not more eloquent on the subject of tenderness than of pride',
          note: 'A balanced, ironic judgement from the narrator. It sounds like praise of his fluency, but it tells us his pride is as strong as his love, and it brings the title word into the proposal itself.',
        },
        {
          phrase:
            'His sense of her inferiority—of its being a degradation—of the family obstacles which judgment had always opposed to inclination',
          note: 'Austen gives these objections in reported speech, denying Darcy his own voice for the insulting part. The dashes pile one objection on another, and judgment set against inclination shows reason and desire at war in him.',
        },
        {
          phrase: 'the consequence he was wounding',
          note: 'Consequence here means social importance, his own. The word echoes Chapter 3, where he would not “give consequence” to a slighted young lady: he still measures people by the value his attention confers.',
        },
        {
          phrase:
            'He spoke of apprehension and anxiety, but his countenance expressed real security.',
          note: 'The gap between his words and his face exposes him. He performs humility while fully expecting acceptance. Elizabeth never meant to accept, since her intentions “did not vary for an instant”, but the narrator adds that his confidence “could only exasperate farther”, so it sharpens the anger of her reply.',
        },
      ],
      question:
        "How does Austen present Darcy's feelings and attitudes in this extract? Refer closely to the language of the passage.",
    },
    {
      title: "Elizabeth's self-reproach after the letter",
      where: 'Volume II, Chapter 13 (Chapter 36)',
      pointer:
        'In the lane near Hunsford, from “She grew absolutely ashamed of herself” to “Till this moment, I never knew myself.”',
      text: 'She grew absolutely ashamed of herself.—Of neither Darcy nor Wickham could she think, without feeling that she had been blind, partial, prejudiced, absurd.\n\n“How despicably have I acted!” she cried.—“I, who have prided myself on my discernment!—I, who have valued myself on my abilities! who have often disdained the generous candour of my sister, and gratified my vanity, in useless or blameable distrust.—How humiliating is this discovery!—Yet, how just a humiliation!—Had I been in love, I could not have been more wretchedly blind. But vanity, not love, has been my folly.—Pleased with the preference of one, and offended by the neglect of the other, on the very beginning of our acquaintance, I have courted prepossession and ignorance, and driven reason away, where either were concerned. Till this moment, I never knew myself.”',
      annotations: [
        {
          phrase: 'blind, partial, prejudiced, absurd',
          note: 'Four adjectives without a conjunction, building to the bluntest, “absurd”. The third is the title word, so Elizabeth names her own fault in the very language the novel has used against Darcy.',
        },
        {
          phrase: 'How despicably have I acted!',
          note: 'The narration breaks into direct speech and exclamation. The inverted word order puts the judgement first, and she condemns what she has done, not merely what she has thought.',
        },
        {
          phrase: 'I, who have prided myself on my discernment!',
          note: 'Anaphora on “I, who have” builds a case against herself. The verb “prided” is the key: Elizabeth discovers that her fault was pride too, pride in her powers of judgement.',
        },
        {
          phrase: 'How humiliating is this discovery!—Yet, how just a humiliation!',
          note: 'She corrects herself within a breath. Feeling humiliated is one thing; accepting the humiliation as just is moral growth, and the antithesis marks the exact moment the change happens.',
        },
        {
          phrase: 'But vanity, not love, has been my folly.',
          note: 'A precise diagnosis. It echoes Mary’s distinction in Chapter 5: vanity is about what others think of us, and Elizabeth’s wound was Darcy’s slight at the ball.',
        },
        {
          phrase: 'Till this moment, I never knew myself.',
          note: 'After the exclamations and dashes, the speech ends on a short, plain, calm sentence. The shift in rhythm makes it the climax of the passage and, arguably, of the whole novel.',
        },
      ],
      question:
        'Explore how Austen presents Elizabeth’s feelings in this extract, and how they show her changing view of herself.',
    },
    {
      title: 'Lady Catherine and Elizabeth',
      where: 'Volume III, Chapter 14 (Chapter 56)',
      pointer:
        'In the copse at Longbourn, from “If you were sensible of your own good” to “I will make no promise of the kind.”',
      text: "“If you were sensible of your own good, you would not wish to quit the sphere, in which you have been brought up.”\n\n“In marrying your nephew, I should not consider myself as quitting that sphere. He is a gentleman; I am a gentleman's daughter; so far we are equal.”\n\n“True. You are a gentleman's daughter. But who was your mother? Who are your uncles and aunts? Do not imagine me ignorant of their condition.”\n\n“Whatever my connections may be,” said Elizabeth, “if your nephew does not object to them, they can be nothing to you.”\n\n“Tell me once for all, are you engaged to him?”\n\nThough Elizabeth would not, for the mere purpose of obliging Lady Catherine, have answered this question; she could not but say, after a moment's deliberation,\n\n“I am not.”\n\nLady Catherine seemed pleased.\n\n“And will you promise me, never to enter into such an engagement?”\n\n“I will make no promise of the kind.”",
      annotations: [
        {
          phrase: 'you would not wish to quit the sphere, in which you have been brought up',
          note: 'The sphere is a metaphor for rank as a fixed orbit, a place one is born into and should never leave. Lady Catherine presents her snobbery as advice for Elizabeth’s own good.',
        },
        {
          phrase: "He is a gentleman; I am a gentleman's daughter; so far we are equal.",
          note: 'Three short clauses balanced by semicolons, as neat as a proof. The phrase “so far” is careful: Elizabeth claims equality of rank, not equality of fortune, and so beats Lady Catherine on her own terms.',
        },
        {
          phrase: 'But who was your mother? Who are your uncles and aunts?',
          note: 'Rhetorical questions that need no answer, because Lady Catherine thinks the answer is shameful. She shifts from Elizabeth herself to her relations, the same connections Darcy objected to at Hunsford.',
        },
        {
          phrase: 'they can be nothing to you',
          note: 'Elizabeth turns the argument round: if anyone may object to her relations it is Darcy, not his aunt. The conditional “if” is careful, since Darcy did object to them at Hunsford, but it quietly denies that Lady Catherine’s rank gives her any authority over the matter.',
        },
        {
          phrase: 'Lady Catherine seemed pleased.',
          note: 'Four words of dry narration, and the word “seemed” warns that the pleasure will be short. The pause makes the refusal that follows land harder.',
        },
        {
          phrase: 'I will make no promise of the kind.',
          note: 'A flat refusal in plain words, most of them one syllable. A young woman without fortune refuses a direct order from a titled lady, and the scene becomes the novel’s clearest act of independence.',
        },
      ],
      question:
        'How does Austen make this such a dramatic and revealing moment in the novel? Consider what the dialogue shows about both women.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Irony in the narrative voice',
      example:
        'The opening sentence, “It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife,” is followed at once by the admission that such a man is treated as “the rightful property of some one or other of their daughters” (Chapter 1).',
      effect:
        'The second sentence quietly reverses the first: it is the families with daughters who are in want, and the rich young man who is the prize. Irony lets Austen criticise a whole society while sounding perfectly polite, and it trains the reader from the first line to ask what is really meant.',
    },
    {
      technique: 'Free indirect discourse',
      example:
        'Charlotte’s reasoning in Chapter 22 is told in the narrator’s voice but in her terms: “Without thinking highly either of men or of matrimony, marriage had always been her object; it was the only honourable provision for well-educated young women of small fortune”.',
      effect:
        'Blending narrator and character makes it hard to say whose view this is, which is the point. The reader understands Charlotte from the inside, so her choice seems reasonable even while Elizabeth condemns it, and Austen avoids preaching in either direction.',
    },
    {
      technique: 'Direct characterisation by the narrator',
      example:
        'Mrs Bennet is summed up in Chapter 1: “She was a woman of mean understanding, little information, and uncertain temper.” Mr Bennet, in the same paragraph, is “so odd a mixture of quick parts, sarcastic humour, reserve, and caprice”.',
      effect:
        'The flat triplet of judgements on Mrs Bennet is brutal in its economy and invites us to laugh at her. The richer, more complicated list for Mr Bennet suggests he is more interesting, but “reserve, and caprice” also hints at the unreliability that fails his family later.',
    },
    {
      technique: 'Dialogue as characterisation',
      example:
        'Mr Collins proposes in Chapter 19 with a numbered argument: “My reasons for marrying are, first, that I think it a right thing for every clergyman in easy circumstances (like myself) to set the example of matrimony in his parish.”',
      effect:
        'He speaks like a sermon, in formal, self-satisfied clauses, and the parenthesis “(like myself)” shows him admiring his own position mid-proposal. Love does not appear among his reasons at all, so his speech exposes a view of marriage as duty and convenience.',
    },
    {
      technique: 'Reported speech',
      example:
        'In Chapter 34 Darcy’s declaration of love is given in his own words, but his objections are reported by the narrator: “His sense of her inferiority—of its being a degradation—of the family obstacles which judgment had always opposed to inclination”.',
      effect:
        'By taking the insulting part out of Darcy’s mouth, Austen compresses it and lets the narrator frame it with judgement. We receive it as Elizabeth does, as a pile of offences, and the dashes make it feel as if he cannot stop.',
    },
    {
      technique: 'The letter form',
      example:
        'Darcy’s letter in Chapter 35 opens with cold formality: “Be not alarmed, Madam, on receiving this letter, by the apprehension of its containing any repetition of those sentiments, or renewal of those offers, which were last night so disgusting to you.”',
      effect:
        'A letter lets Darcy explain himself at length without interruption, which he could never do face to face with Elizabeth. It also forces both her and the reader to read, reread and weigh evidence, so the letter becomes the instrument of her change.',
    },
    {
      technique: 'Antithesis and balanced syntax',
      example:
        'Elizabeth jokes in Chapter 5 that she “could easily forgive his pride, if he had not mortified mine”, and Darcy confesses in Chapter 58 that he has been selfish “in practice, though not in principle”.',
      effect:
        'Austen’s sentences often weigh one thing against another, and the balance carries the meaning. Elizabeth’s joke reveals that her objection is personal, not principled; Darcy’s confession shows he now understands the gap between what he believed and how he behaved.',
    },
    {
      technique: 'Broken syntax and dashes',
      example:
        'In Chapter 46 Elizabeth tells Darcy of Lydia’s elopement: “My youngest sister has left all her friends—has eloped;—has thrown herself into the power of—of Mr. Wickham.”',
      effect:
        'The dashes break the sentence into pieces, and the stumble on “of—of” shows her struggling to say Wickham’s name to the man he wronged. A heroine defined by fluent wit is reduced to fragments, which measures both the disaster and her feeling for Darcy.',
    },
    {
      technique: 'Rhetorical questions',
      example: 'Lady Catherine in Chapter 56: “Are the shades of Pemberley to be thus polluted?”',
      effect:
        'The question is grand and absurd at once. Shades probably means the shady woods of the estate, though it can suggest the spirits of Darcy’s ancestors too; polluted treats a lower-born wife as dirt. The inflated language makes her snobbery ridiculous, and the novel’s final chapter returns to the word pollution to mock it.',
    },
    {
      technique: 'Setting as symbol',
      example:
        'At Pemberley in Chapter 43, Elizabeth “had never seen a place for which nature had done more, or where natural beauty had been so little counteracted by an awkward taste.”',
      effect:
        'The estate is described in the language of taste and judgement, and it reflects its owner: natural, unaffected and well managed. Elizabeth’s approval of the grounds prepares her, and us, to revise her opinion of the man, so the landscape does work that argument alone could not.',
    },
  ],

  structureForm: [
    {
      heading: 'Three volumes and a hinge in the middle',
      body: 'The novel was first published in three volumes, of 23, 19 and 19 chapters. Some modern editions keep that numbering and others count straight through from 1 to 61, so check which your copy uses; this guide gives both. The turning point sits just past the centre, in Chapters 34 to 36, the middle of Volume II: the first proposal, the letter and Elizabeth’s self-reproach. Everything before it builds her misjudgement and everything after it takes that misjudgement apart. Volume III then opens with a new place and a new view of Darcy, at Pemberley.',
    },
    {
      heading: 'Three proposals to Elizabeth',
      body: 'Elizabeth is proposed to three times, and the scenes answer one another. Mr Collins in Chapter 19 is a comic rehearsal: he cannot believe a refusal is meant. Darcy in Chapter 34 makes a serious version of the same mistake, and the narrator notes that he “had no doubt of a favourable answer”. In Chapter 58 Darcy himself names the fault, telling Elizabeth that he came to her at Hunsford “without a doubt of my reception”. The echo shows exactly what has changed: the second proposal is built on uncertainty and humility, and it succeeds because the first failed.',
    },
    {
      heading: 'Letters that turn the plot',
      body: 'Letters carry the novel’s most important information, and each one has to be read and judged. Mr Collins’s letter in Chapter 13 introduces his pomposity before he arrives. Darcy’s letter in Chapter 35 overturns Elizabeth’s view of Wickham and of Darcy. Jane’s letters in Chapter 46 bring the news of Lydia, Lydia’s own note in Chapter 47 shows her thoughtlessness, and Mrs Gardiner’s letter in Chapter 52 reveals what Darcy has secretly done. Because the narrator usually withholds what other characters know, a letter is often the only way the truth reaches Elizabeth, and her readings of letters chart her growth as a judge of character.',
    },
    {
      heading: 'Seeing through Elizabeth',
      body: 'The third-person narrator stays close to Elizabeth for most of the novel, so the reader shares her view and, for the first half, her mistakes: a first-time reader is likely to believe Wickham too. Austen allows a few glimpses of Darcy from the outside, and they create dramatic irony. As early as Chapter 6 we are told that he found her face “rendered uncommonly intelligent by the beautiful expression of her dark eyes”, so we know he is attracted long before she does. When the letter arrives, the reader has to re-read the first half alongside Elizabeth, which makes her discovery ours.',
    },
    {
      heading: 'Marriages that mirror each other',
      body: 'The novel is organised around couples who act as foils. Jane and Bingley are an easy, open match nearly ruined by other people’s judgement. Charlotte and Mr Collins marry for security. Lydia and Wickham run off together, she on impulse and he to escape his debts, and are married only because someone pays. Mr and Mrs Bennet show what an unequal match becomes after twenty-three years (the figure is given in Chapter 1): the narrator says in Chapter 42 that he was “captivated by youth and beauty” and married a woman whose weak understanding soon ended “all real affection for her”. Elizabeth and Darcy are measured against all of these, which is why an essay on their marriage is stronger when it uses the others as evidence.',
    },
    {
      heading: 'A comedy of manners in scenes',
      body: 'Much of the novel is told through dialogue in social set pieces: the Meryton assembly (Chapter 3), the evenings at Netherfield (Chapters 8 to 11), the Netherfield ball (Chapter 18), dinners at Rosings and visits in the drawing room. Character is revealed through how people talk, which is why the book adapts so readily to stage and screen. It is a comedy in the classical sense, ending in marriages, and the last chapter works as an epilogue that follows each character’s future. Its first sentence, about the day Mrs Bennet “got rid of her two most deserving daughters”, shows the irony holding firm to the end.',
    },
    {
      heading: 'From First Impressions to Pride and Prejudice',
      body: 'Austen drafted the novel between October 1796 and August 1797 as First Impressions. Her father offered it to the London publisher Thomas Cadell in November 1797, and the offer was declined by return of post. She revised it heavily before Thomas Egerton, who paid her £110 for the copyright, published it on 28 January 1813, credited only as the work of the author of Sense and Sensibility. The change of title is worth an essay point. First Impressions names a plot about perception; Pride and Prejudice names two faults of character, and puts the moral weight on what the lovers must correct in themselves.',
    },
    {
      heading: 'Places and movement',
      body: 'Each change of place brings a change of understanding. Hertfordshire, with Longbourn, Netherfield and Meryton, is where the first impressions are formed. Kent, at Hunsford parsonage and Rosings, brings the proposal and the letter, away from Elizabeth’s family. Derbyshire brings Pemberley, where she sees Darcy at home, and the inn at Lambton, where the news of Lydia reaches her. The return to Longbourn in the last volume tests whether what has been learned elsewhere can survive at home, among the people who made it so hard to learn.',
    },
  ],

  vocabulary: [
    {
      term: 'entail',
      definition:
        'A legal arrangement that fixes who inherits an estate. Longbourn is entailed on heirs male, so it will pass to Mr Collins, a distant cousin, and not to any of the five Bennet daughters.',
    },
    {
      term: 'living',
      definition:
        'A post as a Church of England clergyman, with its income and house, which a landowner could give to a man of his choosing. Wickham claims Darcy denied him the living old Mr Darcy meant for him.',
    },
    {
      term: 'patroness',
      definition:
        'A woman of rank who gives someone a position and expects loyalty in return. Lady Catherine is Mr Collins’s patroness because she gave him the living at Hunsford.',
    },
    {
      term: 'condescension',
      definition:
        'In Austen’s time often a compliment: a person of high rank kindly setting aside their rank to treat an inferior graciously. Collins praises Lady Catherine’s condescension; the reader sees mainly arrogance.',
    },
    {
      term: 'connections',
      definition:
        'A person’s relatives and the social standing they bring. Darcy and Lady Catherine object to Elizabeth’s connections: her mother’s family, the Philipses in Meryton and the Gardiners in trade in London.',
    },
    {
      term: 'accomplished',
      definition:
        'Trained in the skills expected of a genteel young woman, such as music, singing, drawing, dancing and languages. The Netherfield conversation in Chapter 8 mocks how impossible the standard is.',
    },
    {
      term: 'amiable',
      definition:
        'Pleasant, friendly and good-natured. Bingley is amiable; Wickham appears so. The novel repeatedly asks whether being amiable is the same as being good.',
    },
    {
      term: 'sensible',
      definition:
        'Usually meaning having good sense, as when Mr Gardiner is called a sensible man. Sensible of can also mean aware of, as when Lady Catherine says Elizabeth would act differently if she were sensible of her own good.',
    },
    {
      term: 'countenance',
      definition:
        'A face or its expression. Austen’s characters read countenances constantly, and often wrongly: Darcy misreads the serenity of Jane’s countenance as indifference to Bingley.',
    },
    {
      term: 'civility',
      definition:
        'Politeness, sometimes of a cool or formal kind. Elizabeth receives Darcy with cold civility at Hunsford, and at Pemberley he invites Mr Gardiner to fish with the greatest civility, a sign of how he has changed.',
    },
    {
      term: 'mortification',
      definition:
        'Humiliation, or wounded pride. Elizabeth admits Darcy’s slight mortified her, and the word links her prejudice to her own pride.',
    },
    {
      term: 'propriety',
      definition:
        'Correct, respectable behaviour. Darcy’s letter blames the Bennet family’s want of propriety, shown by Mrs Bennet, by Elizabeth’s three younger sisters and occasionally even by Mr Bennet, for his interference between Bingley and Jane.',
    },
    {
      term: 'militia',
      definition:
        'A home-defence force, separate from the regular army, whose regiments were stationed in country towns. A militia regiment winters at Meryton, bringing Wickham with it, and later moves to Brighton.',
    },
    {
      term: 'elopement',
      definition:
        'Running away together to marry without family consent. Lydia’s letter names Gretna Green, just over the Scottish border, where English laws requiring parental consent for under twenty-ones did not apply.',
    },
    {
      term: 'felicity',
      definition:
        'Happiness, especially in marriage. Chapter 42 says that Elizabeth could not have formed a pleasing picture of conjugal felicity from her parents’ marriage.',
    },
    {
      term: 'free indirect discourse',
      definition:
        'Third-person narration that slips into a character’s thoughts and way of speaking without quotation marks. Austen uses it to let us understand characters from the inside while keeping an ironic distance.',
    },
    {
      term: 'comedy of manners',
      definition:
        'A comic work that satirises the behaviour, customs and snobberies of a particular social class, usually through witty dialogue, and typically ends in marriage.',
    },
    {
      term: 'foil',
      definition:
        'A character whose differences highlight another’s qualities. Jane’s trust is a foil to Elizabeth’s suspicion, and Wickham’s charm is a foil to Darcy’s reserve.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Starting with the extract from Chapter 34, in which Darcy first proposes, explore how Austen presents pride in Pride and Prejudice. Write about how Austen presents Darcy’s pride in this extract, and how Austen presents pride in the novel as a whole.',
        skill: 'Extract analysis leading into a whole-text argument',
        guidance: [
          'Open with a thesis that answers the question in one sentence: for example, that Austen presents pride as a fault both lovers share, which only knowledge of oneself can correct.',
          'In the extract, analyse three details closely: the defeat in “In vain have I struggled”, the narrator’s balance of tenderness against pride, and the gap between what Darcy spoke of and what his countenance expressed.',
          'Link the extract back to Chapter 3 through the word consequence, so the proposal becomes the climax of a pride shown from the first ball.',
          'Turn the argument to Elizabeth: her pride in her own judgement, from her joke in Chapter 5 to “vanity, not love, has been my folly” in Chapter 36.',
          'Show the change: Darcy at Pemberley in Chapter 43, Elizabeth proud of him in Chapter 52 for getting “the better of himself”, and his confession in Chapter 58.',
          'Weave in context: rank, land and connections among the gentry, with Lady Catherine as pride that never learns.',
          'Conclude by judging which character changes more, and why the title needs both words.',
        ],
      },
      {
        question:
          'Reread the extract from Chapter 56, from Lady Catherine’s “If you were sensible of your own good” to Elizabeth’s “I will make no promise of the kind.” How does Austen make this such a dramatic and revealing moment in the novel?',
        skill: 'Close analysis of a passage',
        guidance: [
          'Set the scene briefly: Lady Catherine has come uninvited to Longbourn to stop a marriage she has only heard rumoured.',
          'Analyse the language of rank: the sphere metaphor, the rhetorical questions about Elizabeth’s mother and relations, and the demand for a promise.',
          'Analyse Elizabeth’s replies: the balanced logic of “so far we are equal”, the turn in “they can be nothing to you”, and the plain refusal.',
          'Comment on how the narrator controls pace, for example the short line “Lady Catherine seemed pleased” before the refusal.',
          'Explain what the moment reveals: Lady Catherine as unreformed pride, Elizabeth as independent, and the irony that this visit will give Darcy hope.',
          'Stay close to the passage throughout; bring in other parts of the novel only where they sharpen a point about this moment.',
        ],
      },
      {
        question:
          'How does Austen use the marriage of Charlotte Lucas and Mr Collins to explore the choices open to women in the novel?',
        skill: 'Whole-text essay with context',
        guidance: [
          'Begin with the problem Charlotte faces: her age, her lack of fortune, and marriage as “the only honourable provision” for women like her.',
          'Analyse Charlotte’s own words in Chapter 22, “I am not romantic you know. I never was.”, and the free indirect discourse that presents her reasoning sympathetically.',
          'Contrast Elizabeth’s refusal of Collins in Chapter 19 and her harsh verdict on Charlotte’s choice.',
          'Use the entail and Collins’s position as heir to Longbourn as context: the woman he marries will one day be mistress of the Bennets’ home.',
          'Consider how Austen shows Charlotte’s life at Hunsford in Volume II: she sits in a room her husband is less likely to use, and he spends much of the day in his garden or his book room.',
          'Compare with other marriages, the Bennets, Lydia and Wickham, Elizabeth and Darcy, to show the range of choices and their costs.',
          'Conclude with a judgement: does the novel condemn Charlotte, pity her, or quietly defend her?',
        ],
      },
      {
        question:
          'How far do you agree that Mr Bennet, rather than Wickham, is to blame for Lydia’s elopement?',
        skill: 'Whole-text argument and evaluation',
        guidance: [
          'State a clear position that allows for both sides, for example that Wickham commits the wrong but Mr Bennet makes it possible.',
          'Wickham’s case: his earlier attempt on Georgiana at Ramsgate, and Jane’s letter in Chapter 46 reporting Denny’s belief that Wickham never intended to marry Lydia at all.',
          'Mr Bennet’s case: his ironic detachment, his refusal of Elizabeth’s warning about Brighton in Chapter 41, and his own confession in Chapter 48.',
          'Consider other candidates briefly: Mrs Bennet’s indulgence of her favourite, and Lydia herself, whose letter to Mrs Forster treats the surprise of her new name as a “good joke”.',
          'Bring in context: what an unmarried elopement meant for a young woman’s reputation and for her sisters’ prospects.',
          'Conclude by weighing responsibility, and say what Austen seems to want the reader to feel about parents who fail to guide their children.',
        ],
      },
      {
        question:
          'Reread the extract from Chapter 36, from “She grew absolutely ashamed of herself” to “Till this moment, I never knew myself.” Explore how Austen presents Elizabeth’s feelings in this extract. Then explain the importance of judging others elsewhere in the novel, considering the society in which it is set.',
        skill: 'Extract language analysis, then a whole-text response with context',
        guidance: [
          'For the extract, track the movement of feeling: shame, self-accusation, acceptance, and finally calm recognition.',
          'Analyse techniques precisely: the list of adjectives, the exclamations and dashes, the anaphora on “I, who have”, and the plain final sentence.',
          'For the whole text, choose three or four judgements: Elizabeth on Darcy and Wickham, Jane on Miss Bingley, Darcy on Jane, and Charlotte’s calculations.',
          'Explain why judgement mattered so much in this society: marriage decided a woman’s whole future, and it was often decided after a few balls and visits.',
          'End by connecting back to the extract: the novel values the ability to change one’s mind when the evidence changes.',
        ],
      },
    ],
    tips: [
      'Quote the novel, not an adaptation. Film and television versions add lines the book does not contain and change others, so check every quotation against your own copy before you learn it.',
      'Learn the words, not a version from memory. Darcy says “In vain have I struggled”, not “In vain I have struggled”, which is a common misquotation. Editions also differ in small ways: the 1894 edition reproduced online by Project Gutenberg prints “insure” for the first edition’s “ensure” in Chapter 18, “blameless distrust” for “blameable distrust” in Chapter 36 and “what was your mother” for “who was your mother” in Chapter 56. If your copy differs from this guide, your copy is the one to quote.',
      'Know which chapter numbering your edition uses. Chapter 34 in a continuously numbered edition is Volume II, Chapter 11 in one numbered by volume; either is acceptable if you are consistent.',
      'Write about the narrator as a voice with opinions. Saying that Austen’s narrator is ironic about Mrs Bennet is sharper than saying Mrs Bennet is silly, because it shows you are analysing a method.',
      'Give both lovers a fault. Answers that make Darcy the proud one and Elizabeth the prejudiced one miss the novel’s point that each is guilty of both.',
      'Use context to explain a choice, not as a separate paragraph. The entail explains Mrs Bennet’s panic and Charlotte’s decision; a paragraph of history on its own explains nothing.',
      'Track a key word across the novel. Pride, prejudice, connections, consequence and civility all recur, and following one word is an efficient way to build a whole-text argument.',
      'When you identify irony, always state both halves: what the sentence says, and what it means.',
      'Take minor characters seriously. Charlotte, Mr Collins, Lady Catherine and the Gardiners each carry an argument about marriage or class, and using them shows a grasp of the whole novel.',
    ],
  },

  modelAnswer: {
    question:
      'Starting with the extract from Chapter 34, in which Darcy first proposes, explore how Austen presents pride in Pride and Prejudice.',
    paragraph:
      'Austen presents Darcy’s pride most sharply at the moment he believes he has conquered it. His proposal opens with “In vain have I struggled”, so that love arrives as a defeat rather than a joy, and the short, abrupt sentences that follow suggest a man whose self-control is failing. Yet the narrator immediately takes his words away from him. His objections appear only in reported speech, “His sense of her inferiority—of its being a degradation”, and the dashes pile one insult on another as if he cannot stop. The balanced judgement that he “was not more eloquent on the subject of tenderness than of pride” is typical of Austen’s irony: it sounds like praise of his fluency but tells us that his pride is as strong as his love. The word “consequence” is crucial. It echoes Chapter 3, where Darcy refused to “give consequence” to a young lady slighted by other men, and it shows that he still measures people by the importance his notice confers. In a society where a gentleman’s standing rested on land and family, his concern with Elizabeth’s connections is not only personal vanity but the voice of his class, as Lady Catherine’s outrage in Chapter 56 later confirms. The extract, however, also exposes pride in Elizabeth, whose “deeply-rooted dislike” took root in that same remark at the Meryton assembly and was fed by Wickham’s story. The final contrast, between what he “spoke” of and what “his countenance expressed”, suggests that Darcy’s pride lies in the confident assumption of being loved, and it is precisely that security which Elizabeth’s refusal destroys.',
    commentary: [
      'It opens with an argument, not a summary. The claim that pride appears most clearly at the moment Darcy thinks he has overcome it gives the whole paragraph a direction.',
      'The quotations are short and embedded, and each is followed by analysis that names a method, reported speech, dashes or irony, and explains its effect.',
      'It links the extract to the rest of the novel through a precise verbal echo, consequence in Chapters 3 and 34, which is more convincing than a vague gesture back to the start of the book.',
      'Context is woven into the argument: rank and connections explain why Darcy thinks as he does, and Lady Catherine is used as evidence rather than as a history lesson.',
      'It turns the argument to show that Elizabeth is proud too, which addresses the title and the whole text, and it ends on an interpretation rather than a restatement.',
    ],
  },

  timeline: [
    {
      where: 'Volume I, Chapter 1',
      title: 'A rich young man takes Netherfield',
      summary:
        'Mrs Bennet tells her husband that Netherfield Park has been taken by a rich young man, Mr Bingley, and urges him to call so that their five daughters can be introduced. Mr Bennet teases her, and the narrator sums both of them up.',
      setting: 'Longbourn, the Bennets’ house in Hertfordshire',
      who: ['Mrs Bennet', 'Mr Bennet'],
      quote:
        'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
      themes: ['Marriage and money', 'Family and responsibility'],
      tension: 1,
      significance:
        'The first sentence sets the ironic voice and the question the whole novel explores: what is marriage for?',
    },
    {
      where: 'Volume I, Chapter 3',
      title: 'The Meryton assembly',
      summary:
        'At the public ball in Meryton, Bingley is delighted with Jane, while Darcy dances only with the women of his own party. Elizabeth, sitting out two dances for lack of partners, overhears him refuse to dance with her, and tells the story against him with great spirit.',
      setting: 'The assembly rooms at Meryton',
      who: ['Elizabeth Bennet', 'Mr Darcy', 'Mr Bingley', 'Jane Bennet'],
      quote: 'She is tolerable; but not handsome enough to tempt me',
      themes: ['First impressions and judgement', 'Pride and self-knowledge'],
      tension: 2,
      significance:
        'One overheard remark creates both faults of the title: his pride in showing it and her prejudice in answer to it.',
    },
    {
      where: 'Volume I, Chapter 16',
      title: 'Wickham’s story',
      summary:
        'At an evening at Mrs Philips’s house in Meryton, the charming new officer Wickham tells Elizabeth that Darcy denied him the church living old Mr Darcy intended for him. Already hostile to Darcy, she believes every word.',
      setting: 'Mrs Philips’s house in Meryton',
      who: ['Mr Wickham', 'Elizabeth Bennet'],
      quote: 'Till I can forget his father, I can never defy or expose him.',
      themes: ['First impressions and judgement'],
      tension: 2,
      significance:
        'Wickham promises not to expose Darcy while doing exactly that, and Elizabeth’s failure to notice is the novel’s central misjudgement.',
    },
    {
      where: 'Volume I, Chapter 18',
      title: 'The Netherfield ball',
      summary:
        'Elizabeth dances with Darcy and challenges him about Wickham, and he answers with a cool warning. Then her family embarrass her one after another: Mr Collins introduces himself to Darcy uninvited, Mrs Bennet talks loudly at supper of Jane marrying Bingley, and after supper Mary sings until her father stops her.',
      setting: 'The ballroom and supper room at Netherfield Park',
      who: ['Elizabeth Bennet', 'Mr Darcy', 'Mr Collins', 'Mary Bennet', 'Mrs Bennet', 'Mr Bennet'],
      quote: 'Mr. Wickham is blessed with such happy manners as may ensure his making friends',
      themes: ['First impressions and judgement', 'Family and responsibility', 'Class and rank'],
      tension: 3,
      significance:
        'Darcy tells the truth about Wickham and is not believed, while the Bennets supply the evidence for his later objections to her family.',
    },
    {
      where: 'Volume I, Chapters 19-20',
      title: 'Mr Collins proposes',
      summary:
        'Mr Collins, the cousin who will inherit Longbourn, proposes to Elizabeth with a list of reasons and refuses to believe her refusal is meant. Mrs Bennet demands that Mr Bennet make her accept; instead he tells Elizabeth he will never see her again if she does.',
      setting: 'Longbourn, the morning after the ball, and then Mr Bennet’s library',
      who: ['Mr Collins', 'Elizabeth Bennet', 'Mrs Bennet', 'Mr Bennet'],
      quote:
        'Your mother will never see you again if you do not marry Mr. Collins, and I will never see you again if you do.',
      themes: ['Marriage and money', 'Women and dependence', 'Family and responsibility'],
      tension: 3,
      significance:
        'A comic proposal that states the novel’s serious question: may a woman without fortune refuse a secure marriage?',
    },
    {
      where: 'Volume I, Chapter 22',
      title: 'Charlotte accepts Mr Collins',
      summary:
        'Soon after Elizabeth’s refusal, her friend Charlotte Lucas accepts Mr Collins. Charlotte tells her plainly that she wants only a comfortable home, and Elizabeth is shocked that her friend has chosen worldly advantage over feeling.',
      setting: 'Lucas Lodge and Longbourn',
      who: ['Charlotte Lucas', 'Mr Collins', 'Elizabeth Bennet'],
      quote: 'I am not romantic you know. I never was. I ask only a comfortable home',
      themes: ['Marriage and money', 'Women and dependence'],
      tension: 2,
      significance:
        'Charlotte’s choice shows what refusing Collins could have cost, and tests whether Elizabeth’s judgement of her friend is fair.',
    },
    {
      where: 'Volume II, Chapter 11 (Chapter 34)',
      title: 'The first proposal',
      summary:
        'Too upset by Colonel Fitzwilliam’s news that Darcy had saved a friend from a most imprudent marriage to go to Rosings, Elizabeth stays at Hunsford parsonage. Darcy calls and proposes, dwelling on her inferiority; she refuses him and accuses him of ruining Jane’s happiness and wronging Wickham.',
      setting: 'Hunsford parsonage, Kent, in the evening',
      who: ['Mr Darcy', 'Elizabeth Bennet'],
      quote: 'In vain have I struggled. It will not do. My feelings will not be repressed.',
      themes: ['Pride and self-knowledge', 'Class and rank', 'First impressions and judgement'],
      tension: 5,
      significance:
        'The two faults of the title collide head on, and each lover’s refusal to see the other at last becomes impossible to ignore.',
    },
    {
      where: 'Volume II, Chapters 12-13 (Chapters 35-36)',
      title: 'The letter',
      summary:
        'Next morning Darcy meets Elizabeth at a gate into the park at Rosings and hands her a letter. It explains that he believed Jane indifferent to Bingley, that Wickham gave up the living for three thousand pounds, and that Wickham later tried to persuade Darcy’s fifteen-year-old sister to elope with him for her fortune. Elizabeth reads and re-reads it, and sees her own prejudice.',
      setting: 'A gate into the park at Rosings, and the lane beside it near Hunsford',
      who: ['Mr Darcy', 'Elizabeth Bennet'],
      quote: 'Till this moment, I never knew myself.',
      themes: ['Pride and self-knowledge', 'First impressions and judgement'],
      tension: 4,
      significance:
        'Evidence replaces first impressions, and Elizabeth’s recognition of her own fault is the turning point of the novel.',
    },
    {
      where: 'Volume III, Chapter 1 (Chapter 43)',
      title: 'Pemberley',
      summary:
        'Touring Derbyshire with her aunt and uncle Gardiner, Elizabeth visits Pemberley believing Darcy to be away. The housekeeper, Mrs Reynolds, praises him as a master and landlord. Then Darcy arrives unexpectedly, asks to be introduced to the Gardiners, and invites Mr Gardiner to fish.',
      setting: 'Pemberley House and its grounds, Derbyshire',
      who: ['Elizabeth Bennet', 'Mr Darcy', 'Mrs Reynolds', 'Mr Gardiner', 'Mrs Gardiner'],
      quote:
        'She had never seen a place for which nature had done more, or where natural beauty had been so little counteracted by an awkward taste.',
      themes: ['Class and rank', 'First impressions and judgement', 'Pride and self-knowledge'],
      tension: 3,
      significance:
        'Seen at home and through the people who depend on him, Darcy is a different man, and his courtesy to relatives in trade shows he has listened.',
    },
    {
      where: 'Volume III, Chapter 4 (Chapter 46)',
      title: 'Lydia has gone',
      summary:
        'At the inn at Lambton, Elizabeth reads two letters from Jane: Lydia has left Brighton with Wickham, and they seem never to have gone to Scotland to marry. As Elizabeth rushes to find her uncle, Darcy arrives; she tells him the news, and when he leaves she believes she has lost him.',
      setting: 'The inn at Lambton, Derbyshire',
      who: ['Elizabeth Bennet', 'Mr Darcy', 'Lydia Bennet', 'Mr Wickham', 'Jane Bennet'],
      quote:
        'My youngest sister has left all her friends—has eloped;—has thrown herself into the power of—of Mr. Wickham.',
      themes: ['Family and responsibility', 'Women and dependence', 'Marriage and money'],
      tension: 5,
      significance:
        'The family’s disgrace seems to end all hope just as Elizabeth understands that she could have loved Darcy.',
    },
    {
      where: 'Volume III, Chapters 9-10 (Chapters 51-52)',
      title: 'Darcy’s secret',
      summary:
        'At Longbourn the newly married Lydia lets slip that Darcy was at her wedding, though it was meant to be a secret. Mrs Gardiner’s reply to Elizabeth’s letter reveals that Darcy found the couple in London, paid Wickham’s debts, settled money on Lydia and bought Wickham’s commission.',
      setting: 'Longbourn, and Mrs Gardiner’s letter from London',
      who: ['Lydia Bennet', 'Mrs Gardiner', 'Elizabeth Bennet', 'Mr Darcy', 'Mr Wickham'],
      quote:
        'Proud that in a cause of compassion and honour, he had been able to get the better of himself.',
      themes: ['Pride and self-knowledge', 'Family and responsibility'],
      tension: 3,
      significance:
        'Darcy’s pride is shown overcome in action, not words, and Elizabeth’s pride in him replaces her prejudice against him.',
    },
    {
      where: 'Volume III, Chapter 14 (Chapter 56)',
      title: 'Lady Catherine’s visit',
      summary:
        'Having heard a report that Elizabeth is likely to marry Darcy, Lady Catherine drives to Longbourn and, in the copse beside the house, demands a promise that she will never accept him. Elizabeth refuses to promise anything, and Lady Catherine leaves seriously displeased.',
      setting: 'The copse on one side of the lawn at Longbourn',
      who: ['Lady Catherine de Bourgh', 'Elizabeth Bennet'],
      quote: 'Are the shades of Pemberley to be thus polluted?',
      themes: ['Class and rank', 'Women and dependence', 'Pride and self-knowledge'],
      tension: 4,
      significance:
        'Rank at its most arrogant meets a woman who will not be bullied, and the interference backfires by giving Darcy hope.',
    },
    {
      where: 'Volume III, Chapter 16 (Chapter 58)',
      title: 'The second proposal',
      summary:
        'Walking out from Longbourn, Elizabeth thanks Darcy for what he did for Lydia. He says he thought only of her, and asks whether her feelings have changed since April. They have, and she accepts him; both then admit how wrong they were.',
      setting: 'A country walk near Longbourn',
      who: ['Mr Darcy', 'Elizabeth Bennet'],
      quote: 'You are too generous to trifle with me.',
      themes: ['Pride and self-knowledge', 'Marriage and money'],
      tension: 3,
      significance:
        'The second proposal answers the first point by point, built this time on humility and on what each has learned.',
    },
    {
      where: 'Volume III, Chapter 19 (Chapter 61)',
      title: 'Endings',
      summary:
        'Jane and Elizabeth are married, and the last chapter follows everyone’s future. Lady Catherine is in time reconciled enough to visit Pemberley, and the Gardiners remain the Darcys’ closest friends.',
      setting: 'Longbourn, Pemberley and beyond',
      who: [
        'Mrs Bennet',
        'Elizabeth Bennet',
        'Mr Darcy',
        'Jane Bennet',
        'Mr Bingley',
        'Lady Catherine de Bourgh',
        'Mr Gardiner',
        'Mrs Gardiner',
      ],
      quote:
        'Happy for all her maternal feelings was the day on which Mrs. Bennet got rid of her two most deserving daughters.',
      themes: ['Marriage and money', 'Class and rank', 'Family and responsibility'],
      tension: 1,
      significance:
        'A comic ending in marriages, still ironic, which gives its last sentence to the relations in trade Darcy once despised.',
    },
  ],

  relationships: [
    {
      from: 'Elizabeth Bennet',
      to: 'Mr Darcy',
      kind: 'antagonists, then husband and wife',
      note: 'Each misjudges the other and each corrects the other: his letter humbles her, and her refusal humbles him. The relationship moves from sparring to respect, and the second proposal answers the first.',
    },
    {
      from: 'Jane Bennet',
      to: 'Mr Bingley',
      kind: 'lovers parted and reunited',
      note: 'An open, easy attraction nearly ended by other people’s judgement: Darcy believes Jane indifferent, and Bingley lets himself be persuaded. Darcy’s later confession to Bingley that his interference was “absurd and impertinent” (Chapter 58) clears the way for Bingley’s proposal.',
    },
    {
      from: 'Mr Bennet',
      to: 'Mrs Bennet',
      kind: 'mismatched husband and wife',
      note: 'He married for youth and beauty, and her weak understanding soon ended his affection. He mocks her and she does not notice; their marriage is the novel’s warning of what an unequal match does to a family.',
    },
    {
      from: 'Mr Bennet',
      to: 'Elizabeth Bennet',
      kind: 'father and favourite daughter',
      note: 'They share a quick, ironic wit. But when she warns him not to let Lydia go to Brighton he jokes the warning away, and the elopement proves her right.',
    },
    {
      from: 'Mr Wickham',
      to: 'Mr Darcy',
      kind: 'raised together, now enemies',
      note: 'Wickham, the son of old Mr Darcy’s steward, grew up with Darcy. His false account of their quarrel drives the first half of the plot, and Darcy’s true account in the letter drives the second.',
    },
    {
      from: 'Mr Wickham',
      to: 'Georgiana Darcy',
      kind: 'a planned elopement, stopped',
      note: 'At Ramsgate Wickham persuaded fifteen-year-old Georgiana to believe herself in love and agree to elope, chiefly for her fortune of thirty thousand pounds. It reveals his pattern long before Lydia.',
    },
    {
      from: 'Mr Wickham',
      to: 'Lydia Bennet',
      kind: 'elopement, then a marriage paid for',
      note: 'Lydia runs away with him from Brighton, and his fellow officer Denny believes he never meant to marry her. The marriage happens only because Darcy pays, and Elizabeth can easily guess how little lasting happiness such a couple will have.',
    },
    {
      from: 'Mr Collins',
      to: 'Charlotte Lucas',
      kind: 'a marriage of convenience',
      note: 'Charlotte accepts him for a comfortable home and a secure future, knowing exactly what he is. Their marriage is the novel’s most honest picture of what many women settled for.',
    },
    {
      from: 'Mr Collins',
      to: 'Lady Catherine de Bourgh',
      kind: 'clergyman and patroness',
      note: 'Her “bounty and beneficence” gave him the rectory at Hunsford, and he repeats her opinions with reverence. Through him Austen satirises grovelling deference to rank.',
    },
    {
      from: 'Lady Catherine de Bourgh',
      to: 'Mr Darcy',
      kind: 'aunt and nephew',
      note: 'She claims Darcy and her daughter were intended for each other from infancy, and tries to stop his marriage to Elizabeth. Her report of Elizabeth’s refusal to promise is what gives him the hope to propose again.',
    },
    {
      from: 'Elizabeth Bennet',
      to: 'Jane Bennet',
      kind: 'sisters and confidantes',
      note: 'Jane trusts everyone and Elizabeth trusts her own judgement. Each is wrong about someone, and their closeness gives the novel a steady centre inside a chaotic family.',
    },
    {
      from: 'Elizabeth Bennet',
      to: 'Charlotte Lucas',
      kind: 'friends divided by a choice',
      note: 'Charlotte’s acceptance of Collins shocks Elizabeth and cools the friendship. Staying with her at Hunsford, Elizabeth has to weigh a choice she could not make herself.',
    },
    {
      from: 'Mr Darcy',
      to: 'Mr Bingley',
      kind: 'friends, one leading the other',
      note: 'Bingley defers to Darcy’s judgement, which is how Darcy can part him from Jane and how his later confession can reunite them. The friendship shows Darcy’s influence used badly and then well.',
    },
    {
      from: 'Mrs Gardiner',
      to: 'Elizabeth Bennet',
      kind: 'aunt and niece',
      note: 'She is the sensible adult Elizabeth’s mother is not. She warns Elizabeth not to fall for Wickham, who has no fortune, takes her to Derbyshire, and her letter reveals what Darcy has done.',
    },
  ],

  compareWith: [
    {
      title: 'Jane Eyre',
      href: '/revision/texts/jane-eyre',
      reason:
        'Another heroine without fortune who claims equality with a richer, prouder man and refuses a marriage she cannot respect, written a generation later and in the first person.',
    },
    {
      title: 'Great Expectations',
      href: '/revision/texts/great-expectations',
      reason:
        'A novel about snobbery and misjudgement in which the hero, like Elizabeth, has to learn that manners and conduct, not rank, make a gentleman.',
    },
    {
      title: 'Silas Marner',
      href: '/revision/texts/silas-marner',
      reason:
        'Eliot also sets a gentry family against the community around it and asks what makes a good parent, a useful comparison with Mr and Mrs Bennet.',
    },
  ],

  contentGuidance: ['intimate_relationships', 'discrimination'],

  // Quoted in the exam tips as words students may meet that are NOT the first
  // edition's: a common misquotation, and three readings of the 1894 edition.
  quotesFromElsewhere: [
    'In vain I have struggled',
    'insure',
    'blameless distrust',
    'what was your mother',
  ],

  sources: [
    {
      label:
        'Wikisource, Pride and Prejudice (1813), the first edition in three volumes, transcribed from scans: the copy every quotation and passage follows, all 61 chapters searched by script on 25 September 2026',
      url: 'https://en.wikisource.org/wiki/Pride_and_Prejudice_(1813)',
    },
    {
      label:
        'Wikisource, the first proposal (Volume II, Chapter 11), the source of the Chapter 34 passage',
      url: 'https://en.wikisource.org/wiki/Pride_and_Prejudice_(1813)/Volume_2/Chapter_11',
    },
    {
      label:
        'Wikisource, the self-reproach (Volume II, Chapter 13), the source of the Chapter 36 passage',
      url: 'https://en.wikisource.org/wiki/Pride_and_Prejudice_(1813)/Volume_2/Chapter_13',
    },
    {
      label:
        'Wikisource, Lady Catherine at Longbourn (Volume III, Chapter 14), the source of the Chapter 56 passage',
      url: 'https://en.wikisource.org/wiki/Pride_and_Prejudice_(1813)/Volume_3/Chapter_14',
    },
    {
      label:
        'The Republic of Pemberley electronic text, all 61 chapters (ppv1n01 to ppv3n61): the second complete copy, against which every quoted phrase and all three passages were searched by script and found in the chapter given; also used to read speakers and plot facts in context',
      url: 'https://www.pemberley.com/janeinfo/ppv2n34.html',
    },
    {
      label:
        'Project Gutenberg eBook 1342, the 1894 George Allen edition with a preface by George Saintsbury: a third copy, which agrees with every quotation here except the three variant readings named in the exam tips (insure, blameless, what was your mother)',
      url: 'https://www.gutenberg.org/cache/epub/1342/pg1342-images.html',
    },
    {
      label:
        'Jane Austen Society of North America, Pride and Prejudice: drafting as First Impressions (October 1796 to August 1797), the Cadell refusal, publication by Egerton on 28 January 1813, the £110 payment and the title-page credit',
      url: 'https://jasna.org/austen/works/pride-prejudice/',
    },
    {
      label:
        'Wikipedia, Pride and Prejudice: the same publication facts, the letter to Cadell of 1 November 1797, and the revisions of 1811 to 1812',
      url: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice',
    },
    {
      label:
        'Wikipedia, Gretna Green: Lord Hardwicke’s Marriage Act of 1753 required parental consent in England for those under twenty-one, and Scotland was outside it',
      url: 'https://en.wikipedia.org/wiki/Gretna_Green',
    },
    {
      label:
        'The existing guide at /revision/texts/pride-and-prejudice and its chapters and characters pages, read for consistency; nothing was copied from them unverified',
    },
  ],
}
