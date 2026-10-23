import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Spelling Bee: the explanation a student sees after each answer, by question key
 * (src/data/games/banks/spelling-bee.ts). Written with AI on 16 October 2026 and
 * checked against each word (the student types, so there are no options), as the
 * founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  definitely: {
    why: "The tricky part is the middle: definitely is definite + ly, and definite contains the word finite. So it is de + finite + ly, with an i after the n, never an a. 'Definately' is a very common mistake.",
    more: "Memory aid: there is a finite number of ways to spell definitely, and only one is right. The word comes from the Latin finis, 'end' or 'limit', like finish and infinite.",
    tip: "Use it in a sentence: 'Priestley definitely wants the audience to question Mr Birling's confidence.' In formal analysis, 'clearly' is often a stronger choice.",
  },
  separate: {
    why: "The tricky part is the second vowel: sep-A-rate, not sep-E-rate. 'Seperate' is a very common mistake, because the a is not clearly pronounced in normal speech.",
    more: "Memory aid: there is 'a rat' in sep-a-rat-e. The same spelling runs through the whole word family: separately, separation and separable.",
    tip: "Use it in a sentence: 'Jekyll hopes his potion will separate the good and evil sides of his nature.'",
  },
  necessary: {
    why: 'The tricky part is the mix of single and double letters: one c, then a double s: ne-c-e-ss-ary. Writers often double the c or use a single s.',
    more: "Memory aid: a shirt has one collar and two sleeves, so necessary has one c and two s's. Adding un- gives unnecessary, with a double n.",
    tip: "Use it in a sentence: 'It is necessary to support every point with evidence from the text.'",
  },
  environment: {
    why: "The tricky part is the n hiding before -ment: environ + ment. In speech the n is often swallowed, so people write 'enviroment', but it must be there: enviro-N-ment.",
    more: "Memory aid: there is 'iron' in envIRONment. The word is built from environ, an old verb meaning 'to surround', plus -ment, which is why the n stays.",
    tip: "Use it in a sentence: 'The harsh environment of the trenches is central to Owen's poetry.'",
  },
  beginning: {
    why: 'The tricky part is the double n: begin + n + ing. When a word ends in one vowel and one consonant, and the stress falls on that last syllable (be-GIN), you double the final consonant before adding -ing or -er.',
    more: 'The same rule gives beginner, forgetting and referred. Compare visiting and opening: the stress falls on the first syllable (VIS-it, O-pen), so the consonant is not doubled. British English doubles a final l anyway: travelling, cancelled.',
    tip: "Use it in a sentence: 'From the beginning of the novella, Dickens presents Scrooge as cold and isolated.'",
  },
  occurred: {
    why: 'The tricky part is the two double letters: double c and double r. Occur already has a double c, and because the stress falls on its last syllable (oc-CUR), the r doubles before -ed.',
    more: "The same doubling gives occurring and occurrence. The noun is often misspelt 'occurence', but it keeps both pairs of double letters: o-cc-u-rr-ence.",
    tip: "Use it in a sentence: 'The murder occurred offstage, so the audience has to imagine it.'",
  },
  disappoint: {
    why: "The tricky part is one s and two p's. The word is the prefix dis- added to appoint, so you keep dis exactly as it is and appoint exactly as it is: dis + appoint.",
    more: "The same thinking works for disappear (dis + appear) and dissatisfied (dis + satisfied, so two s's). When you are unsure, split off the prefix and check the root word.",
    tip: "Use it in a sentence: 'The ending may disappoint readers who expect everyone to be punished.'",
  },
  argument: {
    why: 'The tricky part is the missing e. Argue ends in e, but argument drops it: argu + ment. This is an exception, because most words keep the e before -ment, as in achievement and movement.',
    more: "Memory aid: 'I lost an e in an argument.' Arguing drops the e as well, as most words ending in e do before -ing.",
    tip: "Use it in a sentence: 'The writer's argument is strengthened by statistics and a personal anecdote.'",
  },
  receive: {
    why: "The tricky part is the ei after the c. The rule 'i before e, except after c' works here: when the sound is 'ee' and it follows a c, write ei: rec-EI-ve.",
    more: 'The same rule gives receipt, deceive, ceiling and conceive. Words without a c before the sound usually use ie, as in believe, achieve and field.',
    tip: "Use it in a sentence: 'Scrooge does not expect to receive a visit from Marley's ghost.'",
  },
  achieve: {
    why: "The tricky part is ie, not ei. The sound is 'ee' and the letter before it is h, not c, so 'i before e' applies: ach-IE-ve.",
    more: 'Achieve keeps its final e in achievement, because -ment begins with a consonant. Words with the same ie pattern include believe, relieve and thief.',
    tip: "Use it in a sentence: 'To achieve a high mark, link each quotation to the writer's purpose.'",
  },
  conscience: {
    why: 'The tricky part is the middle: conscience is con + science. Writers often leave out the s, the c or the i, but if you can spell science, you can spell conscience.',
    more: 'Do not confuse it with conscious, meaning awake or aware, which ends in -ious. Conscience is your sense of right and wrong, and conscientious, meaning careful and hard-working, comes from it.',
    tip: "Use it in a sentence: 'Macbeth's guilty conscience torments him after he murders Duncan.'",
  },
  privilege: {
    why: 'The tricky part is the vowels and the ending: priv-I-l-E-ge, with no d. People often add a d, as in knowledge, but privilege ends in -lege.',
    more: 'Memory aid: it is vile to spell privilege with a d. Look closely and you will see vile inside the word: pri + vile + ge.',
    tip: "Use it in a sentence: 'The Birlings' privilege blinds them to the struggles of workers like Eva Smith.'",
  },
  accommodate: {
    why: "The tricky part is the two pairs of double letters, double c and double m: a-cc-o-mm-odate. Many people write 'accomodate' with one m.",
    more: "Memory aid: the word is big enough to accommodate two c's and two m's. The noun accommodation keeps both pairs.",
    tip: "Use it in a sentence: 'The hotel could accommodate all the guests, but the dining room was far too small.'",
  },
  embarrass: {
    why: "The tricky part is the two pairs of double letters, double r and double s: emba-rr-a-ss. 'Embarass' with one r is a very common mistake.",
    more: "Memory aid: when you are embarrassed you go Really Red and Smile Shyly: two r's and two s's. Compare harass, which has one r and two s's.",
    tip: "Use it in a sentence: 'Mr Birling fears that a public scandal will embarrass the family.'",
  },
  metaphor: {
    why: 'The tricky parts are the ph, which makes an f sound, and the ending -or, not -er or -ore. Words with ph for the f sound usually come from Greek.',
    more: "It comes from the Greek metapherein, 'to carry across': a metaphor carries the qualities of one thing across to another. The adjective is metaphorical.",
    tip: "Use it in a sentence: 'The metaphor presents the sea as a monster, suggesting its power to destroy.'",
  },
  simile: {
    why: "The tricky part is the ending: simile has three syllables, sim-i-lee, but the last sound is spelt with a single e. People often write 'similie' or 'simily'.",
    more: "It comes from the Latin similis, 'like', the same root as similar, which helps with the first part: simil-. Similes compare using 'like' or 'as'.",
    tip: "Use it in a sentence: 'The simile compares the soldiers to old beggars, stripping them of heroism.'",
  },
  allegory: {
    why: "The tricky parts are the double l at the start and the ending -ory: a-ll-eg-ory. Some write 'alegory' or 'allegary', but it is allegory.",
    more: "It comes from the Greek allos, 'other', and agoreuein, 'to speak': an allegory says one thing and means another. The adjective is allegorical.",
    tip: "Use it in a sentence: 'Animal Farm is an allegory of the Russian Revolution.'",
  },
  soliloquy: {
    why: "The tricky part is the ending, -loquy, with qu and a final y. It is easy to write 'soliloquey', but the word ends -quy.",
    more: "It comes from the Latin solus, 'alone', and loqui, 'to speak'. Solus gives solo and solitary; loqui gives eloquent. The plural is soliloquies.",
    tip: "Use it in a sentence: 'In his soliloquy before the murder, Macbeth imagines a dagger leading him towards Duncan.'",
  },
  juxtaposition: {
    why: "The tricky part is the start, juxta-, with a u and an x: jux-ta-po-si-tion. People often write 'juxtoposition', but the first part is juxta, the Latin for 'next to'.",
    more: 'Split it into two parts: juxta + position. If you can spell position, you only have to remember juxta. The verb is juxtapose.',
    tip: "Use it in a sentence: 'The juxtaposition of light and dark imagery highlights the conflict between good and evil.'",
  },
  onomatopoeia: {
    why: 'The tricky part is the ending, -poeia: o-no-ma-to-POE-ia. After the p come four vowels in a row: o, e, i, a. Learn it in three chunks: ono, mato, poeia.',
    more: "It comes from the Greek onoma, 'name', and poiein, 'to make': making a name from a sound. The poe part shares its root with poem and poet.",
    tip: "Use it in a sentence: 'In Anthem for Doomed Youth, Owen's onomatopoeia brings the noise of the guns into the poem.'",
  },
  alliteration: {
    why: "The tricky parts are the double l and the single t: a-ll-i-t-eration. People often write 'aliteration' or 'allitteration'.",
    more: "Memory aid: alliteration is all + iteration, and iteration means repeating, which is exactly what alliteration does with sounds. The word actually comes from the Latin littera, 'letter', though English keeps just one t.",
    tip: "Use it in a sentence: 'The harsh alliteration of the plosive b sound makes the battle feel violent.'",
  },
  personification: {
    why: 'The tricky part is the join: personify becomes personif-ication. The y of personify changes to i, then -cation is added: per-son-i-fi-ca-tion.',
    more: 'The same pattern turns classify into classification and justify into justification. If you can spell personify, change the y to i and add -cation.',
    tip: "Use it in a sentence: 'The personification of the wind as howling makes the storm seem angry and alive.'",
  },
  denouement: {
    why: 'The tricky part is the middle, -oue-: de-NOUE-ment. The word is French, which is why the vowels look unusual. Say it as day-NOO-mon, but spell it d-e-n-o-u-e-m-e-n-t.',
    more: "It means 'untying' in French, from dénouer, 'to untie'. Some English writers keep the French accent, dénouement, and that spelling is also correct: this game accepts it too.",
    tip: "Use it in a sentence: 'In the denouement, Scrooge wakes on Christmas morning a changed man.'",
  },
  protagonist: {
    why: "The tricky part is the middle. People often write 'protaganist', but after the g comes an o, because the word is prot + agonist.",
    more: "It comes from the Greek protos, 'first', and agonistes, 'actor' or 'competitor': the first actor. Antagonist has the same ending, so learn the two together.",
    tip: "Use it in a sentence: 'Scrooge is the protagonist of A Christmas Carol, and the story follows his transformation.'",
  },
  antagonist: {
    why: "The tricky part is the same as in protagonist: after the g comes an o, because the word is ant + agonist. People often write 'antaganist'. Ant comes from anti, 'against'.",
    more: "It comes from the Greek antagonistes, 'opponent'. The verb antagonise means to make someone hostile, and the noun antagonism means hostility.",
    tip: "Use it in a sentence: 'Tybalt acts as an antagonist in Romeo and Juliet, provoking the fight that leads to Romeo's banishment.'",
  },
  foreshadowing: {
    why: "The tricky part is the start: fore, meaning 'before', not for. Foreshadowing hints at what will happen before it happens, so it uses the fore of before: fore + shadowing.",
    more: 'Other words with fore in this sense include forecast, foresee and forewarn. Then add shadow and -ing: fore + shadow + ing.',
    tip: "Use it in a sentence: 'The witches' prophecies act as foreshadowing, preparing the audience for Macbeth's rise and fall.'",
  },
  verisimilitude: {
    why: "The tricky part is the run of i's: ver-i-si-mil-i-tude. After ver, all four vowels are i, until the ending -tude.",
    more: "Split it into two Latin parts: veri, 'true' (as in verify), and similitude, 'likeness' (as in similar). Verisimilitude is the likeness of truth.",
    tip: "Use it in a sentence: 'Stevenson creates verisimilitude through letters and eyewitness accounts.'",
  },
  enjambment: {
    why: "The tricky part is the silent b: en-JAMB-ment, like the b in lamb. The word comes from the French jambe, 'leg', because the sentence strides over the end of the line.",
    more: 'Some writers use the French spelling, enjambement, with an extra e, and that spelling is also correct: this game accepts it too. Its opposite is an end-stopped line.',
    tip: "Use it in a sentence: 'The enjambment makes the sentence spill over into the next line, mirroring the speaker's racing thoughts.'",
  },
  sycophantic: {
    why: "The tricky parts are the y after the s, and the ph for the f sound. People often write 'sicophantic' or 'sycofantic', but both the y and the ph come from Greek.",
    more: 'Build it from sycophant, a flatterer, plus -ic. The other forms keep the same spelling: sycophancy and sycophantically.',
    tip: "Use it in a sentence: 'Mr Collins's sycophantic praise of Lady Catherine makes him ridiculous.'",
  },
  anachronism: {
    why: "The tricky part is the ch, which sounds like k. It comes from the Greek khronos, 'time', the same root as chronological and chronic, which also spell the k sound ch.",
    more: "Build it in three parts: ana, 'against', chron, 'time', and -ism. The adjective is anachronistic.",
    tip: "Use it in a sentence: 'The striking clock in Julius Caesar is a famous anachronism, since ancient Rome had no such clocks.'",
  },
  didacticism: {
    why: 'The tricky part is the c before -ism: didactic + ism. Keep the whole of didactic, then add ism: di-dac-ti-cism. The final c of didactic now sounds like s.',
    more: 'The same pattern turns romantic into romanticism and critic into criticism. In each, the hard c of the first word becomes a soft c before -ism.',
    tip: "Use it in a sentence: 'The didacticism of A Christmas Carol is clear: Dickens wants readers to help the poor.'",
  },
  catharsis: {
    why: 'The tricky parts are the th and the ending -sis: ca-THAR-sis. It comes from Greek, where many words end in -sis, such as analysis and crisis.',
    more: 'The plural follows the Greek pattern too: catharses, just as crises is the plural of crisis. The adjective is cathartic.',
    tip: "Use it in a sentence: 'The tragic ending offers the audience catharsis, releasing the tension built up through the play.'",
  },
  polysyllabic: {
    why: "The tricky part is the two y's: pol-Y-s-Y-llabic. Both parts come from Greek: poly, 'many', and syllable, which also has a y and a double l.",
    more: 'If you can spell syllable, you can spell polysyllabic: poly + syllab + ic. Its opposite, monosyllabic, follows the same pattern: mono + syllab + ic.',
    tip: "Use it in a sentence: 'His polysyllabic vocabulary makes him sound pompous and self-important.'",
  },
  ephemeral: {
    why: "The tricky parts are the e at the start and the ph, which sounds like f: e-PHEM-er-al. People often write 'efemeral' or 'ephemoral'.",
    more: "It comes from the Greek ephemeros, 'lasting a day', from hemera, 'day'. Like many Greek words, it uses ph for the f sound, as in phone and photograph.",
    tip: "Use it in a sentence: 'The poet presents youth as ephemeral, gone almost as soon as it arrives.'",
  },
  magnanimous: {
    why: "The tricky part is the middle: magn + animous. It joins two Latin words, magnus, 'great', and animus, 'mind' or 'soul'. Say it slowly: mag-NAN-i-mous.",
    more: 'Magn- appears in magnificent and magnify; anim- appears in animal and animated. Spell the two parts and join them: magn + anim + ous.',
    tip: "Use it in a sentence: 'After winning, she was magnanimous, praising her opponent's courage.'",
  },
  melancholic: {
    why: "The tricky part is the ch, which sounds like k: mel-an-CHOL-ic. It comes from the Greek melas, 'black', and khole, 'bile', and words from Greek often use ch for the k sound.",
    more: 'The related words keep the ch: melancholy and melancholia. Other Greek words with ch for k include character, chorus and chaos.',
    tip: "Use it in a sentence: 'The rain and the empty streets create a melancholic mood.'",
  },
  idiosyncratic: {
    why: "The tricky part is the syn in the middle, with a y, not an i. People often write 'idiosincratic', but syn comes from the Greek for 'together', as in synonym and synchronise.",
    more: "Build it in three parts: idio, 'one's own' (as in idiom), syn, 'together', and cratic. The noun is idiosyncrasy, which ends in -asy, not -acy.",
    tip: "Use it in a sentence: 'The character's idiosyncratic habits make her memorable and believable.'",
  },
  perfunctory: {
    why: 'The tricky part is the ending: perfunct + ory. The middle, -funct-, is the same as in function, so if you can spell function, you can spell this: per-FUNC-tory.',
    more: "It comes from the Latin perfungi, 'to get through' a task: something perfunctory is done just to get it over with. The ending -ory also appears in compulsory and satisfactory.",
    tip: "Use it in a sentence: 'Her perfunctory apology suggests she does not really feel sorry.'",
  },
  acquiesce: {
    why: "The tricky parts are the c before the q, and the sc near the end: ac + quie + sce. People often write 'aquiesce' or 'acquiese'.",
    more: 'Memory aid: acquiesce contains quie, as in quiet: to acquiesce is to accept quietly, without protest. The same c before q appears in acquire and acquaint.',
    tip: "Use it in a sentence: 'At first Sheila acquiesces to her parents' views, but she soon challenges them.'",
  },
  bourgeoisie: {
    why: 'The tricky part is the French spelling: bour-geois-ie. It has ou, then geoi, then ie at the end. Learn it in three chunks: bour, geois and ie.',
    more: 'Bourgeois, without the -ie, describes a middle-class person or attitude; bourgeoisie, with it, is the middle class as a group. Karl Marx used bourgeoisie for the class that owns factories and businesses.',
    tip: "Use it in a sentence: 'Priestley criticises the bourgeoisie, represented by the Birlings, for exploiting workers like Eva Smith.'",
  },
  dichotomy: {
    why: "The tricky part is the ch, which sounds like k: di-CHOT-o-my. It comes from the Greek dicha, 'in two', and temnein, 'to cut', so a dichotomy is something cut into two.",
    more: "The ending -tomy, 'cutting', also appears in anatomy. A dichotomy is a sharp division into two opposites, such as good and evil, or reason and emotion.",
    tip: "Use it in a sentence: 'Stevenson explores the dichotomy between Jekyll's respectable public life and Hyde's violence.'",
  },
  quintessential: {
    why: 'The tricky parts are quint at the start and the -tial ending. It is quint + essential, so if you can spell essential, with its double s and -tial, you can spell this.',
    more: "Quint means 'fifth'. Medieval thinkers believed in a fifth element, purer than earth, air, fire and water: the quintessence, or 'fifth essence'. Quintessential now means the most perfect example of something.",
    tip: "Use it in a sentence: 'Scrooge is the quintessential miser, so his transformation is all the more striking.'",
  },
}
