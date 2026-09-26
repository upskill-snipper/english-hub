import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Antony and Cleopatra, William Shakespeare (written about 1606 to 1607). A
 * supplement: the existing page at /resources/revision-notes/antony-and-cleopatra
 * keeps its act summaries, character profiles, themes, key quotations, context,
 * structure notes, essay plans and practice questions, and this file adds what
 * it lacks: three passages for close reading, a language-analysis section, a
 * glossary, and the scene data for the animated visuals.
 *
 * Every quotation, in the passages, the scene cards and the prose, was copied
 * from the byte copy of Project Gutenberg #1534 held at
 * src/data/full-texts/antony-and-cleopatra.ts, after reading the whole play in
 * that edition (25 September 2026). The guide test checks that each quotation is
 * in the edition; it does not check who says it or where, so every speaker and
 * scene was checked separately by locating the line in its speech.
 *
 * Theme titles on the scene cards match the eight themes on the existing page
 * exactly, so a card's theme chip names a theme the page explains.
 *
 * WHAT THE PAGE ABOVE GETS WRONG, found while checking it against the edition.
 * This file does not repeat any of it, and the page itself is not edited here:
 * - Its board badges and its practice-question rubric name AQA, OCR and Edexcel.
 *   The register has Edexcel A-level, Eduqas A-level and Cambridge IGCSE 0475,
 *   and the page gives no guidance for the 0475 passage-based question. The
 *   passage questions below are written for that paper and for A-level.
 * - It calls Philo's opening speech tetrameter. It is blank verse, ten
 *   syllables to the line (see the vocabulary entry below).
 * - It has Antony say he is "unqualitied". Iras says it, of Antony, in Act 3,
 *   Scene 11; and "unmanned" is not in the play.
 * - It says "O Antony!" is all Enobarbus says before he dies, and quotes a
 *   sentry's "his face is downward". Enobarbus has a full dying speech in Act 4,
 *   Scene 9, and the sentry's phrase is not in the play.
 * - It claims verbatim First Folio quotation. Its quotations are modern
 *   spelling from a modern edition.
 * - Smaller: it calls the ambassador of Act 3, Scene 12 Cleopatra's
 *   schoolmaster, where Antony calls him "our schoolmaster" and Dolabella "his";
 *   it lists Parthia among the play's settings, where Act 3, Scene 1 is set in
 *   Syria; and it attaches the moon to "I am fire and air", which is a separate
 *   speech from Cleopatra's "the fleeting moon / No planet is of mine".
 *
 * Facts checked and sourced below. Where sources differ on the date of writing,
 * the guide gives the range most scholars accept and no more.
 *
 * Second check, 26 September 2026. Every quotation and all three passages were
 * located again in the edition, speaker and scene included; all held. What was
 * corrected: two notes said the dream speech "reverses" the barge speech, when
 * both make the same move (the real lover outdoes imagination); the Act 2,
 * Scene 7 card put Lepidus being carried off before Menas's offer, which comes
 * first; the Act 5, Scene 1 card had Caesar weep, which the text implies but
 * never shows; "all his treasure" in Act 4, Scene 6 read as Antony's when it is
 * Enobarbus's own, sent on with Antony's gifts; Plutarch says Cleopatra "was
 * addressed as" the New Isis, not that she called herself it; and several
 * readings stated as fact are now offered as readings.
 */
export const guide: StudyGuide = {
  slug: 'antony-and-cleopatra',
  title: 'Antony and Cleopatra',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play: five acts and forty-two scenes in the edition used here, moving between Alexandria, Rome and the wider Mediterranean. Antony dies at the end of Act 4 and Cleopatra in the final scene. Shakespeare did not divide the play into acts; the act and scene numbers are later editors’, so check the numbering in your own copy.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Written in about 1606 to 1607 and first printed in the First Folio of 1623, the only early text. Quotations follow the modern-spelling Project Gutenberg edition (eBook #1534) held on this site, so your own edition may differ in spelling, punctuation, line division and scene numbering.',
  },

  native: {
    overview: '/resources/revision-notes/antony-and-cleopatra',
    context: '/resources/revision-notes/antony-and-cleopatra',
    themes: '/resources/revision-notes/antony-and-cleopatra',
    characters: '/resources/revision-notes/antony-and-cleopatra',
    keyQuotes: '/resources/revision-notes/antony-and-cleopatra',
    structureForm: '/resources/revision-notes/antony-and-cleopatra',
    examPractice: '/resources/revision-notes/antony-and-cleopatra',
    modelAnswer: '/resources/revision-notes/antony-and-cleopatra',
  },

  extracts: [
    {
      title: "Enobarbus describes Cleopatra's barge",
      where: 'Act 2, Scene 2',
      pointer:
        'Late in the scene, after Antony has agreed to marry Octavia and the leaders have gone out, leaving Enobarbus with Agrippa and Maecenas: from Enobarbus’s “I will tell you.” to “And made a gap in nature.”',
      text: 'ENOBARBUS: / I will tell you. / The barge she sat in, like a burnished throne, / Burned on the water. The poop was beaten gold; / Purple the sails, and so perfumed that / The winds were love-sick with them; the oars were silver, / Which to the tune of flutes kept stroke, and made / The water which they beat to follow faster, / As amorous of their strokes. For her own person, / It beggared all description: she did lie / In her pavilion, cloth-of-gold of tissue, / O’erpicturing that Venus where we see / The fancy outwork nature. On each side her / Stood pretty dimpled boys, like smiling Cupids, / With divers-coloured fans, whose wind did seem / To glow the delicate cheeks which they did cool, / And what they undid did. / AGRIPPA: / O, rare for Antony! / ENOBARBUS: / Her gentlewomen, like the Nereides, / So many mermaids, tended her i’ th’ eyes, / And made their bends adornings. At the helm / A seeming mermaid steers. The silken tackle / Swell with the touches of those flower-soft hands / That yarely frame the office. From the barge / A strange invisible perfume hits the sense / Of the adjacent wharfs. The city cast / Her people out upon her, and Antony, / Enthroned i’ th’ market-place, did sit alone, / Whistling to th’ air, which, but for vacancy, / Had gone to gaze on Cleopatra too, / And made a gap in nature.',
      annotations: [
        {
          phrase: 'I will tell you.',
          note: 'Until this line Enobarbus has been swapping gossip with the Romans in prose. With these four words he moves into verse, and the shift tells the audience that what follows is a performance, a set piece he has perhaps told before, and not a plain report.',
        },
        {
          phrase: 'The barge she sat in, like a burnished throne, / Burned on the water.',
          note: 'The simile turns a boat into a seat of royal power, and the near-pun of “burnished” and “Burned” sets fire on water. Two elements that should cancel each other out burn together, which is the paradox the whole speech builds, and it looks forward to Cleopatra’s dying claim, “I am fire and air”.',
        },
        {
          phrase: 'The winds were love-sick with them',
          note: 'Personification makes nature itself fall in love: the winds are love-sick with the perfume, the water follows the oars “As amorous of their strokes”. Enobarbus does not describe Cleopatra at all yet. He describes the world responding to her, so that her power is felt before she is seen.',
        },
        {
          phrase: 'It beggared all description',
          note: 'He claims she is beyond words while spending nearly thirty lines on the scene. The word picks up the language of the opening scene, where Antony says “There’s beggary in the love that can be reckoned”. The play keeps suggesting that what is truly great cannot be counted or described, and that those who try come away poorer.',
        },
        {
          phrase: 'O’erpicturing that Venus where we see / The fancy outwork nature.',
          note: 'A painting of Venus shows imagination outdoing nature, and Cleopatra outdoes even that painting. Keep this in mind for Act 5, Scene 2, where Cleopatra makes the same move about Antony: nature, she says, lacks the material to compete with fancy, yet an Antony would be nature’s masterpiece against it. In both speeches the lover is the real thing that beats imagination.',
        },
        {
          phrase: 'To glow the delicate cheeks which they did cool, / And what they undid did.',
          note: 'The fans that should cool her make her cheeks glow, so each action produces its opposite. The compressed final line, five short words, is almost a riddle. It prepares for Enobarbus’s famous paradox later in the scene that she “makes hungry / Where most she satisfies”.',
        },
        {
          phrase: 'Enthroned i’ th’ market-place, did sit alone,',
          note: 'The comic climax: the whole city runs to the river, and the great triumvir is left alone on his throne, whistling. Antony is upstaged and, in effect, conquered before they meet. In Act 3, Scene 6 Caesar will report the two of them enthroned together in the market-place, the private spectacle become a political scandal.',
        },
        {
          phrase: 'And made a gap in nature.',
          note: 'Hyperbole to finish: the air itself would have gone to gaze at her, except that its leaving would have left an empty space in nature. The speaker matters. This is Enobarbus, the play’s blunt soldier, and if even he talks like this, the audience is invited to believe Cleopatra really is extraordinary.',
        },
      ],
      question:
        "Explore the ways in which Shakespeare makes Enobarbus's description of Cleopatra so vivid and so persuasive in this passage. For an A-level essay, go on to consider how far the play presents Cleopatra through other people's words rather than letting the audience judge her for itself.",
    },
    {
      title: 'Antony and the shapes of clouds',
      where: 'Act 4, Scene 14',
      pointer:
        'The opening of the scene, after the fleet has yielded and before Mardian brings the false news of Cleopatra’s death: from Antony’s “Eros, thou yet behold’st me?” to “Ourselves to end ourselves.”',
      text: 'ANTONY: / Eros, thou yet behold’st me? / EROS: / Ay, noble lord. / ANTONY: / Sometime we see a cloud that’s dragonish, / A vapour sometime like a bear or lion, / A towered citadel, a pendant rock, / A forked mountain, or blue promontory / With trees upon’t, that nod unto the world / And mock our eyes with air. Thou hast seen these signs. / They are black vesper’s pageants. / EROS: / Ay, my lord. / ANTONY: / That which is now a horse, even with a thought / The rack dislimns and makes it indistinct / As water is in water. / EROS: / It does, my lord. / ANTONY: / My good knave Eros, now thy captain is / Even such a body. Here I am Antony, / Yet cannot hold this visible shape, my knave. / I made these wars for Egypt, and the Queen, / Whose heart I thought I had, for she had mine, / Which, whilst it was mine, had annexed unto’t / A million more, now lost—she, Eros, has / Packed cards with Caesar, and false-played my glory / Unto an enemy’s triumph. / Nay, weep not, gentle Eros. There is left us / Ourselves to end ourselves.',
      annotations: [
        {
          phrase: 'Eros, thou yet behold’st me?',
          note: 'The scene opens with a question, and a strange one: Antony asks whether he can still be seen. A man who has lived as a public spectacle now doubts that he exists at all, and the rest of the speech explains the fear.',
        },
        {
          phrase: 'Sometime we see a cloud that’s dragonish,',
          note: 'The list of cloud shapes moves from beasts of strength (dragon, bear, lion) to things of permanence (a citadel, a rock, a mountain). Each can be read as an image of the soldier Antony used to be, and every one is made of vapour. The long, calm catalogue makes the dissolving feel slow and inevitable.',
        },
        {
          phrase: 'And mock our eyes with air.',
          note: 'The clouds deceive the eye, and Antony believes he has been deceived too. The line gathers the play’s worries about seeing and believing: the audience knows, from the scene before, that Cleopatra has only hidden in her monument.',
        },
        {
          phrase: 'They are black vesper’s pageants.',
          note: 'Vesper is evening, and a pageant is a show. The shapes are the night’s theatre, gone as darkness comes, and the image looks ahead to his own ending later in the scene: “The long day’s task is done, / And we must sleep.”',
        },
        {
          phrase: 'The rack dislimns and makes it indistinct / As water is in water.',
          note: 'The rack, the driving clouds, blurs the horse’s outline until it disappears as completely as water poured into water. In Act 1, Scene 1 Antony wished Rome to melt into the Tiber; now it is he who melts. The simile is the play’s image of dissolution at its most exact and most frightening.',
        },
        {
          phrase: 'Here I am Antony, / Yet cannot hold this visible shape',
          note: 'The name remains but the self has gone. Throughout the play Antony measures himself by his name, “I am / Antony yet” in Act 3, Scene 13, and here the name and the man come apart. Spoken to a servant rather than to the audience, it is one of the most private moments Antony is given.',
        },
        {
          phrase: 'Packed cards with Caesar, and false-played my glory',
          note: 'The metaphor is of a cheat at cards stacking the pack. It recalls the Soothsayer’s warning in Act 2, Scene 3 that at any game with Caesar, Antony is sure to lose. The charge against Cleopatra is never proved: Diomedes later says it “never shall be found”, and the play leaves the fleet’s surrender unexplained.',
        },
        {
          phrase: 'There is left us / Ourselves to end ourselves.',
          note: 'The quiet line turns from grief to resolve. Antony treats death as the one choice defeat has left him, in the Roman way the play keeps returning to, and he comforts Eros rather than himself. The scene that follows treats that choice with dignity and with painful irony.',
        },
      ],
      question:
        "How does Shakespeare make this such a moving and revealing moment for Antony? For an A-level essay, use the passage as the starting point for a discussion of how the play presents Antony's sense of who he is.",
    },
    {
      title: "Cleopatra's dream of Antony",
      where: 'Act 5, Scene 2',
      pointer:
        'In the monument, after Proculeius has disarmed Cleopatra and handed her to Dolabella’s guard: from Dolabella’s “Most noble empress, you have heard of me?” to Cleopatra’s “Condemning shadows quite.”',
      text: 'DOLABELLA: / Most noble empress, you have heard of me? / CLEOPATRA: / I cannot tell. / DOLABELLA: / Assuredly you know me. / CLEOPATRA: / No matter, sir, what I have heard or known. / You laugh when boys or women tell their dreams; / Is’t not your trick? / DOLABELLA: / I understand not, madam. / CLEOPATRA: / I dreamt there was an Emperor Antony. / O, such another sleep, that I might see / But such another man! / DOLABELLA: / If it might please you— / CLEOPATRA: / His face was as the heavens, and therein stuck / A sun and moon, which kept their course, and lighted / The little O, the earth. / DOLABELLA: / Most sovereign creature— / CLEOPATRA: / His legs bestrid the ocean; his reared arm / Crested the world; his voice was propertied / As all the tuned spheres, and that to friends; / But when he meant to quail and shake the orb, / He was as rattling thunder. For his bounty, / There was no winter in’t; an autumn ’twas / That grew the more by reaping. His delights / Were dolphin-like; they showed his back above / The element they lived in. In his livery / Walked crowns and crownets; realms and islands were / As plates dropped from his pocket. / DOLABELLA: / Cleopatra— / CLEOPATRA: / Think you there was or might be such a man / As this I dreamt of? / DOLABELLA: / Gentle madam, no. / CLEOPATRA: / You lie up to the hearing of the gods! / But if there be nor ever were one such, / It’s past the size of dreaming. Nature wants stuff / To vie strange forms with fancy; yet t’ imagine / An Antony were nature’s piece ’gainst fancy, / Condemning shadows quite.',
      annotations: [
        {
          phrase: 'You laugh when boys or women tell their dreams;',
          note: 'Cleopatra expects a Roman to sneer and says so first, which disarms the sneer. She is a prisoner, but she still controls how her words will be received. On Shakespeare’s stage Cleopatra was played by a male actor, most likely a boy, so the line can also be heard as a dare to the audience to laugh at the performance in front of it.',
        },
        {
          phrase: 'I dreamt there was an Emperor Antony.',
          note: 'The past tense makes Antony a figure of story already. The title is pointed: later in the scene Dolabella announces Caesar with “It is the Emperor, madam.” Cleopatra gives the title to the loser, and the play lets the two claims to it stand side by side.',
        },
        {
          phrase: 'His face was as the heavens, and therein stuck / A sun and moon',
          note: 'The description begins at the face, as a love poem would, and expands at once to the size of the universe. The earth itself shrinks to “The little O”, a speck lit by the sun and moon of his face, so that the whole world Caesar has just won becomes tiny beside him.',
        },
        {
          phrase: 'His legs bestrid the ocean',
          note: 'He becomes a colossus standing astride the sea. The image answers the history the audience has watched: the real Antony lost everything at sea, at Actium and again in Act 4, Scene 12, yet in Cleopatra’s telling the ocean is something he straddles with ease.',
        },
        {
          phrase: 'There was no winter in’t; an autumn ’twas / That grew the more by reaping.',
          note: 'A harvest that grows as it is gathered is a paradox of endless generosity. It is not only fantasy: in Act 4, Scene 5 Antony sent Enobarbus’s treasure after him when he deserted, and in the next scene Enobarbus called him “Thou mine of bounty”.',
        },
        {
          phrase:
            'His delights / Were dolphin-like; they showed his back above / The element they lived in.',
          note: 'A dolphin lives in the sea but leaps above it. The simile can be read as a reply to the Roman view of Antony, from Philo onwards, as a man drowned in pleasure: in Cleopatra’s version his pleasures never closed over his head.',
        },
        {
          phrase: 'realms and islands were / As plates dropped from his pocket.',
          note: 'Kingdoms fall from him as carelessly as small things dropped from a pocket. Hyperbole again, but it has a basis in the play: Caesar reported with disgust in Act 3, Scene 6 that Antony had given away kingdoms to Cleopatra and to their sons.',
        },
        {
          phrase: 'Gentle madam, no.',
          note: 'Three plain words from Dolabella set Roman fact against Egyptian imagination. They are kind as well as honest, and Cleopatra’s furious reply shows how much she needs the dream to be true.',
        },
        {
          phrase: 'Nature wants stuff / To vie strange forms with fancy',
          note: 'Her argument is compressed but precise: nature lacks the material to compete with imagination, and yet an Antony, if he existed, would be nature’s masterpiece against imagination. So, she implies, her Antony was no mere dream. The speech echoes the barge speech of Act 2, Scene 2, where Cleopatra outdid a painting in which fancy outdid nature: in both, the lover is praised as the real thing that beats imagination.',
        },
      ],
      question:
        "Explore the ways in which Shakespeare makes Cleopatra's description of Antony such a powerful moment in the play. For an A-level essay, weigh the view that Antony is great only in Cleopatra's words, using this passage and the play as a whole.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Hyperbole on a cosmic scale',
      example:
        'Antony tells Cleopatra that to bound his love she must “find out new heaven, new earth” and that “Kingdoms are clay” (Act 1, Scene 1); Cleopatra remembers that “His legs bestrid the ocean” (Act 5, Scene 2).',
      effect:
        'The lovers speak in the largest terms available, so that love is measured against empires and the universe and the empires lose. The Romans hear this as boasting. The play tests such claims by setting them beside defeats, and by the end asks whether hyperbole can be true in a way that facts are not.',
    },
    {
      technique: 'Imagery of melting and dissolving',
      example:
        '“Let Rome in Tiber melt” (Antony, Act 1, Scene 1); “Melt Egypt into Nile” (Cleopatra, Act 2, Scene 5); “Authority melts from me” (Antony, Act 3, Scene 13); followers who “melt their sweets / On blossoming Caesar” (Antony, Act 4, Scene 12); “The crown o’ th’ earth doth melt” (Cleopatra, Act 4, Scene 15).',
      effect:
        'Trace the verb through the play and it changes direction. At first the lovers, in love or in fury, call on whole countries to melt; then Antony feels his own power and followers melting away from him; finally Cleopatra sees Antony himself dissolve. The chain makes his fall feel like a slow loss of solid shape, which Act 4, Scene 14 turns into an image of clouds.',
    },
    {
      technique: 'Names and titles as a measure of identity',
      example:
        'Antony insists “I am / Antony yet” (Act 3, Scene 13), and later in the scene Cleopatra says that “since my lord / Is Antony again, I will be Cleopatra”; later he says “Here I am Antony, / Yet cannot hold this visible shape” (Act 4, Scene 14). He calls her by her country: “O, whither hast thou led me, Egypt?” (Act 3, Scene 11).',
      effect:
        'The two treat their names as roles to live up to, and the question of whether Antony is still Antony runs through the second half of the play. Calling Cleopatra “Egypt” fuses the woman with the kingdom, so his love and his politics can never be separated. In Act 5, Scene 2 Caesar calls her Egypt too, and from a conqueror the name sounds like a claim to both.',
    },
    {
      technique: 'Paradox and oxymoron',
      example:
        'Enobarbus says that other women cloy the appetite, but “she makes hungry / Where most she satisfies” (Act 2, Scene 2); Cleopatra says “The stroke of death is as a lover’s pinch, / Which hurts and is desired” and “My desolation does begin to make / A better life” (Act 5, Scene 2).',
      effect:
        'Cleopatra is described, and describes herself, in contradictions that refuse to resolve. The effect is to make her impossible to pin down, which is exactly what fascinates and frustrates the Romans. In Act 5 the paradoxes turn from desire to death, so that dying is spoken of in the language of love.',
    },
    {
      technique: 'Classical allusion',
      example:
        'Philo remembers Antony’s eyes that “Have glowed like plated Mars” (Act 1, Scene 1); Cleopatra mocks “this Herculean Roman” (Act 1, Scene 3); in despair Antony calls on “Alcides, thou mine ancestor” (Act 4, Scene 12) and imagines that in the underworld “Dido and her Aeneas shall want troops” (Act 4, Scene 14).',
      effect:
        'Antony is measured against gods and heroes, which makes his fall the fall of something godlike. The Dido allusion carries an irony worth noticing: in Virgil’s Aeneid, Aeneas left Dido at the gods’ command to sail for Italy and found the Roman line, and her ghost turns away from him. Antony made the opposite choice, Egypt over Rome, and pictures himself outshining them.',
    },
    {
      technique: 'Reported action and unreliable report',
      example:
        'The sea battle at Actium is heard but not seen; Enobarbus and Scarus describe it as they watch, “Th’ Antoniad, the Egyptian admiral, / With all their sixty, fly and turn the rudder” (Act 3, Scene 10). Caesar reports the ceremony in Alexandria, “I’ th’ market-place, on a tribunal silvered” (Act 3, Scene 6). In Act 1, Scene 1 Demetrius is sorry to see Antony confirm “the common liar”, the rumour that carries his reputation to Rome.',
      effect:
        'The greatest public events of the play reach the audience second-hand, through witnesses with a point of view. This makes every judgement of the lovers provisional: we hear Rome’s version, Enobarbus’s version, Cleopatra’s version. Messengers suffer for what they bring: Cleopatra beats one in Act 2, Scene 5, and Antony has Caesar’s envoy Thidias whipped in Act 3, Scene 13.',
    },
    {
      technique: 'Dramatic irony',
      example:
        'Cleopatra sends Mardian to tell Antony she is dead, telling him to “word it, prithee, piteously” (Act 4, Scene 13); in the next scene Mardian delivers a touching account in which “a tearing groan did break / The name of Antony” (Act 4, Scene 14).',
      effect:
        'The audience knows the report is a performance Cleopatra has scripted, and watches Antony believe it and act on it. The irony is tragic rather than comic: a lie meant to calm his anger leads directly to his death, and by the time Diomedes arrives with the truth it is, in his own words, “too late”.',
    },
    {
      technique: 'Comic prose set against tragic verse',
      example:
        'The Clown who brings the asps warns in prose that “his biting is immortal” and wishes Cleopatra “joy of the worm” (Act 5, Scene 2); moments later she speaks in verse, “Give me my robe. Put on my crown. I have / Immortal longings in me.”',
      effect:
        'The Clown means mortal and says the opposite, a blunder that accidentally predicts Cleopatra’s claim to immortality. His rambling jokes delay the death and make it stranger. When she moves into solemn, measured verse, the contrast lifts her ending above the everyday world he represents.',
    },
    {
      technique: 'Metatheatre and self-staging',
      example:
        'Cleopatra taunts Antony to “play one scene / Of excellent dissembling” (Act 1, Scene 3); fearing Rome, she imagines “Some squeaking Cleopatra boy my greatness”; sending for her finest clothes to die in, she says “I am again for Cydnus / To meet Mark Antony” (both Act 5, Scene 2).',
      effect:
        'Cleopatra sees life as performance and judges others as actors. Her death is staged as a return to the barge of their first meeting, so she ends the play by restaging its most famous description. The effect is double: the audience is reminded it is watching a play, and yet her performance is the one thing Caesar cannot control.',
    },
    {
      technique: 'Imagery of tides, ships and rudders',
      example:
        'Caesar compares the common people to “a vagabond flag upon the stream” (Act 1, Scene 4); Antony sees Octavia torn between husband and brother as “the swan’s-down feather, / That stands upon the swell at the full of tide, / And neither way inclines” (Act 3, Scene 2); after Actium he tells Cleopatra “My heart was to thy rudder tied by th’ strings” (Act 3, Scene 11).',
      effect:
        'Power and loyalty in the play move like water, drifting and turning with the tide. The rudder image is the most telling: in Antony’s own account it makes his disastrous flight at Actium an act of love he could not help, and the play is decided at sea, the element where Caesar is strong and Antony is not.',
    },
  ],

  vocabulary: [
    {
      term: 'Triumvir',
      definition:
        'One of three men sharing power. Antony, Octavius Caesar and Lepidus formed the Second Triumvirate, set up by law in 43 BC, which is why Philo calls Antony “The triple pillar of the world” (Act 1, Scene 1) and Enobarbus says the servant carrying the drunken Lepidus “bears the third part of the world” (Act 2, Scene 7).',
    },
    {
      term: 'Dotage',
      definition:
        'Foolish, excessive fondness, and also the weakened judgement of old age. Philo’s “this dotage of our general’s” (Act 1, Scene 1) can carry both senses, since Antony later speaks of his own grey hairs, and Antony himself fears he will “lose myself in dotage” (Act 1, Scene 2).',
    },
    {
      term: 'Tawny front',
      definition:
        'A brownish face or forehead (front meant the brow or the whole face). Philo’s “Upon a tawny front” (Act 1, Scene 1) marks Cleopatra as foreign and dark in Roman eyes; she describes herself as darkened by the sun, with “amorous pinches black” (Act 1, Scene 5).',
    },
    {
      term: 'Gipsy',
      definition:
        'From Egyptian, because the Roma were wrongly believed to have come from Egypt. The Romans use it as an insult, “To cool a gipsy’s lust” (Act 1, Scene 1), suggesting a cunning cheat, and Antony uses it in fury in Act 4, Scene 12. Many Romani people find the word offensive, so use it only when quoting.',
    },
    {
      term: 'Salad days',
      definition:
        'Youthful inexperience. Cleopatra dismisses her affair with Julius Caesar as belonging to “My salad days, / When I was green in judgment, cold in blood” (Act 1, Scene 5). The phrase entered English from this line.',
    },
    {
      term: 'Mandragora',
      definition:
        'Mandrake, a plant used as a sleeping drug. Cleopatra asks for it so that she can sleep through “this great gap of time / My Antony is away” (Act 1, Scene 5).',
    },
    {
      term: 'Soothsayer',
      definition:
        'A fortune-teller. The play’s Soothsayer says of himself, “I make not, but foresee” (Act 1, Scene 2). He tells Charmian she will outlive her mistress, and warns Antony that beside Caesar his guardian spirit is overpowered (Act 2, Scene 3).',
    },
    {
      term: 'Dæmon',
      definition:
        'A guardian spirit. The Soothsayer glosses the word himself, “that thy spirit which keeps thee” (Act 2, Scene 3), and warns that near Caesar it becomes afraid.',
    },
    {
      term: 'Garboils',
      definition:
        'Disturbances or uproar. Antony uses it of the trouble his wife Fulvia caused in Italy, “The garboils she awaked” (Act 1, Scene 3).',
    },
    {
      term: 'Yare',
      definition:
        'Quick, nimble; of a ship, easy to handle. Enobarbus warns that Caesar’s “ships are yare, yours heavy” before Actium (Act 3, Scene 7); Cleopatra hurries her women with “Yare, yare, good Iras” as she dresses for death (Act 5, Scene 2).',
    },
    {
      term: 'Cantle',
      definition:
        'A piece or segment cut from something. Scarus, watching Actium, says “The greater cantle of the world is lost” (Act 3, Scene 10).',
    },
    {
      term: 'Rack and dislimn',
      definition:
        'The rack is thin, broken cloud driven by the wind; to dislimn is to blur an outline until it disappears. Antony uses both of a cloud shaped like a horse: “The rack dislimns and makes it indistinct” (Act 4, Scene 14).',
    },
    {
      term: 'Vesper',
      definition:
        'Evening, or the evening star. Cloud shapes at dusk are “black vesper’s pageants”, the evening’s shows (Act 4, Scene 14).',
    },
    {
      term: 'Actium',
      definition:
        'The sea battle of 2 September 31 BC between Octavius and Antony. In the play Antony chooses to fight there “By sea, by sea” against his soldiers’ advice (Act 3, Scene 7), and Cleopatra’s ships flee in the middle of the fight (Act 3, Scene 10).',
    },
    {
      term: 'Triumph',
      definition:
        'A Roman victory procession in which captured leaders were paraded, often in chains. It is what Cleopatra most fears: Caesar wants her alive because “her life in Rome / Would be eternal in our triumph” (Act 5, Scene 1).',
    },
    {
      term: 'Lictors',
      definition:
        'Officers who attended Roman magistrates and carried out punishments. Cleopatra imagines “Saucy lictors” seizing her in Rome (Act 5, Scene 2).',
    },
    {
      term: 'Varletry',
      definition:
        'The rabble or mob. Cleopatra refuses to be shown to “the shouting varletry / Of censuring Rome” (Act 5, Scene 2).',
    },
    {
      term: 'Monument',
      definition:
        'Here, a tomb. Cleopatra locks herself in hers on Charmian’s advice (Act 4, Scene 13); Antony is lifted up into it to die (Act 4, Scene 15); and she dies there (Act 5, Scene 2).',
    },
    {
      term: 'Asp, aspic and worm',
      definition:
        'An asp is a small venomous snake; the name is used for the Egyptian cobra. The play also calls it an aspic, “Have I the aspic in my lips?”, and the Clown calls it “the worm”, an old word for a snake (Act 5, Scene 2).',
    },
    {
      term: 'Isis',
      definition:
        'A great goddess of Egypt, wife of Osiris and mother of Horus. Caesar reports that Cleopatra appeared “In th’ habiliments of the goddess Isis” (Act 3, Scene 6), and Plutarch records that the historical Cleopatra appeared in public in a robe sacred to Isis and was addressed as “the new Isis”. Charmian and Cleopatra swear by her.',
    },
    {
      term: 'Hercules, or Alcides',
      definition:
        'The hero from whom, by an old tradition recorded by Plutarch, Antony’s family claimed descent. Cleopatra calls Antony “this Herculean Roman” (Act 1, Scene 3); the soldiers take the music under the earth to mean “the god Hercules, whom Antony loved, / Now leaves him” (Act 4, Scene 3); and Antony calls on “Alcides, thou mine ancestor” (Act 4, Scene 12).',
    },
    {
      term: 'The shirt of Nessus',
      definition:
        'The poisoned shirt that killed Hercules. Antony, believing Cleopatra has betrayed him, cries “The shirt of Nessus is upon me” (Act 4, Scene 12): his rage and pain feel like Hercules’ agony.',
    },
    {
      term: 'Thetis and the Nereides',
      definition:
        'Sea nymphs, the daughters of the sea god Nereus; Thetis was one of them. Cleopatra’s women are “like the Nereides” on the barge (Act 2, Scene 2), and Antony calls Cleopatra “my Thetis” as they go to fight at sea (Act 3, Scene 7).',
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines of ten syllables and five stresses, the main form of the play. The play opens in it: Philo’s first line, “Nay, but this dotage of our general’s”, has ten syllables. Characters drop into prose for jokes and gossip, as Enobarbus often does.',
    },
    {
      term: 'Hyperbole',
      definition:
        'Deliberate exaggeration. It is the lovers’ natural language, from Antony’s “new heaven, new earth” (Act 1, Scene 1) to Cleopatra’s dream of a colossal Antony (Act 5, Scene 2).',
    },
    {
      term: 'Aside and soliloquy',
      definition:
        'An aside is heard by the audience but not the other characters, as when Enobarbus says “Mine honesty and I begin to square” (Act 3, Scene 13); a soliloquy is spoken alone, as when he ends the same scene resolving to “seek / Some way to leave him”.',
    },
    {
      term: 'Metatheatre',
      definition:
        'Moments when a play draws attention to itself as a play. The clearest is Cleopatra’s fear that she will see “Some squeaking Cleopatra boy my greatness” (Act 5, Scene 2), spoken on Shakespeare’s stage by a male actor, most likely a boy.',
    },
  ],

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'Rome’s verdict, Egypt’s reply',
      summary:
        "Antony's follower Philo shows Demetrius their general with Cleopatra and calls his love dotage, a foolish infatuation. Antony refuses to hear the messengers from Rome and declares that the nobleness of life is love like theirs.",
      setting: "Cleopatra's palace in Alexandria",
      who: ['Philo', 'Demetrius', 'Antony', 'Cleopatra'],
      quote: 'Let Rome in Tiber melt, and the wide arch / Of the ranged empire fall!',
      themes: ['Roman Stoicism vs Egyptian Sensuality', 'Love vs Duty'],
      tension: 2,
      significance:
        'The play opens with a Roman judgement and an Egyptian answer, and leaves the audience to weigh them.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'News from Rome',
      summary:
        "A soothsayer reads the fortunes of Cleopatra's women. Messengers bring Antony news of his wife Fulvia's wars against Caesar, of a Parthian advance, and then of Fulvia's death. With Pompey challenging Caesar at sea, Antony resolves to leave Egypt.",
      setting: "Another room in Cleopatra's palace",
      who: ['Soothsayer', 'Charmian', 'Iras', 'Enobarbus', 'Cleopatra', 'Antony'],
      quote: 'These strong Egyptian fetters I must break, / Or lose myself in dotage.',
      themes: ['Love vs Duty'],
      tension: 3,
      significance:
        'Rome pulls Antony back, and the Soothsayer’s promise that Charmian will outlive her mistress comes true, by moments, in the last scene.',
    },
    {
      where: 'Act 1, Scene 3',
      title: 'A parting performed',
      summary:
        'Cleopatra pretends to be sick and scornful, mocks Antony for weeping too little for Fulvia, and tells him to act a scene of grief. At last she drops the game and wishes him victory, and he tells her that his heart remains with her.',
      setting: "Cleopatra's palace",
      who: ['Cleopatra', 'Charmian', 'Antony'],
      quote: 'Eternity was in our lips and eyes',
      themes: ['Theatricality and Performance', 'Love vs Duty'],
      tension: 3,
      significance:
        'Their parting is a quarrel, staged by a queen who treats every feeling as a role.',
    },
    {
      where: 'Act 1, Scene 4',
      title: "Caesar's case against Antony",
      summary:
        "In Rome Caesar complains to Lepidus that Antony wastes his nights in revels, while Pompey grows strong at sea. He remembers Antony's endurance on the hard retreat from Modena, and wishes his shames would drive him back to Rome.",
      setting: "Caesar's house in Rome",
      who: ['Octavius Caesar', 'Lepidus'],
      quote: 'A man who is the abstract of all faults / That all men follow.',
      themes: ['Power and Empire', 'Roman Stoicism vs Egyptian Sensuality'],
      tension: 2,
      significance:
        'The first Roman scene gives Caesar’s view of Antony, a great soldier ruined, which the play will test against Egypt’s.',
    },
    {
      where: 'Act 1, Scene 5',
      title: 'Serpent of old Nile',
      summary:
        'Cleopatra longs for the absent Antony, asks for a drug to sleep away the time, and imagines him on his horse thinking of her. Alexas brings a pearl Antony sent, and she vows to write to him every day.',
      setting: 'The palace in Alexandria',
      who: ['Cleopatra', 'Charmian', 'Mardian', 'Alexas'],
      quote: 'Where’s my serpent of old Nile?',
      themes: ['Love vs Duty', 'Time, Mutability, and Dissolution'],
      tension: 1,
      significance:
        'Alone with her women, Cleopatra’s love sounds real, and she dismisses her earlier love for Julius Caesar as belonging to her salad days.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'A marriage, and a barge',
      summary:
        "Antony and Caesar quarrel, then are reconciled when Agrippa proposes that Antony marry Caesar's sister Octavia. Left with Agrippa and Maecenas, Enobarbus describes Cleopatra's first meeting with Antony on the river Cydnus and insists Antony will never leave her.",
      setting: 'The house of Lepidus in Rome',
      who: ['Antony', 'Octavius Caesar', 'Lepidus', 'Agrippa', 'Maecenas', 'Enobarbus'],
      quote: 'Age cannot wither her, nor custom stale / Her infinite variety.',
      themes: ['Love vs Duty', 'Power and Empire', 'Theatricality and Performance'],
      tension: 3,
      significance:
        'The political marriage and the greatest description of Cleopatra share a scene, and the second makes the first look doomed.',
    },
    {
      where: 'Act 2, Scene 3',
      title: "The Soothsayer's warning",
      summary:
        "Antony promises Octavia that his faults are behind him. Alone with him, the Soothsayer warns that Caesar's fortune will rise higher and that Antony's spirit is overpowered near him. Antony admits Caesar wins every game they play, and decides to return to Egypt.",
      setting: "Caesar's house in Rome",
      who: ['Antony', 'Octavia', 'Octavius Caesar', 'Soothsayer'],
      quote: 'And though I make this marriage for my peace, / I’ th’ East my pleasure lies.',
      themes: ['Love vs Duty', 'Power and Empire'],
      tension: 2,
      significance:
        'A scene after agreeing to the marriage, Antony is already planning his return to Egypt.',
    },
    {
      where: 'Act 2, Scene 5',
      title: 'The messenger',
      summary:
        'A messenger tells Cleopatra that Antony has married Octavia. She strikes him, drags him about and draws a knife, then has him called back to hear it again, and sends Alexas to find out what Octavia looks like, down to her height and the colour of her hair.',
      setting: 'The palace in Alexandria',
      who: ['Cleopatra', 'Charmian', 'Messenger'],
      quote: 'Melt Egypt into Nile, and kindly creatures / Turn all to serpents!',
      themes: ['Betrayal and Loyalty', 'Gender and Political Identity'],
      tension: 4,
      significance:
        'Cleopatra’s rage is violent and comic at once, and the man who brings bad news pays for it.',
    },
    {
      where: 'Act 2, Scene 7',
      title: "Pompey's galley",
      summary:
        'Pompey feasts the triumvirs on his ship after their peace treaty. Menas offers to cut the cable and kill all three rulers, making Pompey lord of the world; Pompey refuses because it would stain his honour, and Menas decides to abandon him. Soon afterwards the drunken Lepidus is carried off.',
      setting: "Pompey's galley near Misenum",
      who: ['Pompey', 'Menas', 'Lepidus', 'Antony', 'Octavius Caesar', 'Enobarbus'],
      quote: '’Tis not my profit that does lead mine honour; / Mine honour it.',
      themes: ['Honour and Reputation', 'Power and Empire'],
      tension: 3,
      significance:
        'The world is offered and refused in a single aside, and the drunken feast shows how fragile the peace is.',
    },
    {
      where: 'Act 3, Scene 6',
      title: 'Enthroned in Alexandria',
      summary:
        'Caesar tells his followers that Antony and Cleopatra have been publicly enthroned in Alexandria, giving kingdoms to Cleopatra and to their sons. Octavia arrives in Rome without ceremony, hoping to make peace, and learns from her brother that Antony has gone back to Cleopatra.',
      setting: "Caesar's house in Rome",
      who: ['Octavius Caesar', 'Agrippa', 'Maecenas', 'Octavia'],
      quote: 'Cleopatra / Hath nodded him to her.',
      themes: ['Power and Empire', 'Betrayal and Loyalty'],
      tension: 3,
      significance:
        'Antony’s return to Egypt gives Caesar his reason for war, and Octavia becomes its injured pretext.',
    },
    {
      where: 'Act 3, Scene 7',
      title: 'By sea, by sea',
      summary:
        'Cleopatra insists on taking part in the war. Antony decides to fight Caesar at sea because Caesar dares him to, although Enobarbus, Canidius and a battle-scarred soldier all urge him to trust his strength on land.',
      setting: "Antony's camp near Actium",
      who: ['Cleopatra', 'Enobarbus', 'Antony', 'Canidius', 'Soldier'],
      quote: 'O noble emperor, do not fight by sea.',
      themes: ['Love vs Duty', 'Honour and Reputation'],
      tension: 4,
      significance:
        'Antony chooses the battle his enemy wants, and chooses it, it seems, out of pride.',
    },
    {
      where: 'Act 3, Scene 10',
      title: 'Actium',
      summary:
        "Enobarbus and Scarus watch the sea battle. In the middle of the fight Cleopatra's ships turn and flee, and Antony follows her, abandoning his fleet. Canidius resolves to surrender his legions to Caesar; Enobarbus, against his reason, stays with Antony.",
      setting: 'A plain near Actium, overlooking the sea battle',
      who: ['Enobarbus', 'Scarus', 'Canidius'],
      quote: 'The greater cantle of the world is lost / With very ignorance.',
      themes: ['Love vs Duty', 'Honour and Reputation', 'Betrayal and Loyalty'],
      tension: 5,
      significance:
        'The turning point: the soldier follows the lover out of the battle, and the world goes to Caesar.',
    },
    {
      where: 'Act 3, Scene 11',
      title: 'Shame, and a kiss',
      summary:
        'Antony, ashamed, tells his followers to take his treasure and make peace with Caesar. He reproaches Cleopatra for leading him away, and she begs his pardon, saying she never thought he would follow. He forgives her for a single kiss.',
      setting: 'The palace in Alexandria',
      who: ['Antony', 'Eros', 'Cleopatra', 'Charmian', 'Iras'],
      quote: 'Fall not a tear, I say; one of them rates / All that is won and lost.',
      themes: ['Love vs Duty', 'Honour and Reputation'],
      tension: 4,
      significance: 'Defeat does not end the love; it shows how much Antony will give up for it.',
    },
    {
      where: 'Act 3, Scene 13',
      title: 'Thidias whipped',
      summary:
        "Caesar's messenger Thidias invites Cleopatra to abandon Antony, and she seems to submit. Antony finds Thidias kissing her hand, has him whipped, and rages at her until she swears her loyalty. They plan one more night of feasting, and Enobarbus decides to leave him.",
      setting: 'The palace in Alexandria',
      who: ['Cleopatra', 'Enobarbus', 'Thidias', 'Antony'],
      quote: 'I will seek / Some way to leave him.',
      themes: ['Betrayal and Loyalty', 'Honour and Reputation'],
      tension: 4,
      significance:
        'Antony’s courage returns as his judgement fails, and his most clear-sighted friend begins to go.',
    },
    {
      where: 'Act 4, Scene 3',
      title: 'Hercules leaves him',
      summary:
        'On the night before the battle, soldiers on watch hear strange music under the earth. One of them says it is the god Hercules, whom Antony loved, deserting him, and they follow the sound to see where it leads.',
      setting: 'Before the palace in Alexandria, at night',
      who: ['Soldiers of the watch'],
      quote: '’Tis the god Hercules, whom Antony loved, / Now leaves him.',
      themes: ['Time, Mutability, and Dissolution', 'Honour and Reputation'],
      tension: 3,
      significance:
        'A short, eerie scene in which the supernatural confirms what the soldiers already fear.',
    },
    {
      where: 'Act 4, Scene 6',
      title: 'The treasure sent after him',
      summary:
        'Enobarbus has deserted to Caesar, and Antony has sent Enobarbus’s treasure after him, with gifts of his own and gentle greetings. A soldier brings the news to Enobarbus in Caesar’s camp. Overcome by his own disloyalty, he resolves to find a ditch to die in.',
      setting: "Caesar's camp at Alexandria",
      who: ['Octavius Caesar', 'Enobarbus', 'Soldier'],
      quote: 'I am alone the villain of the earth',
      themes: ['Betrayal and Loyalty'],
      tension: 4,
      significance: 'Antony’s generosity wounds the deserter more than any punishment could.',
    },
    {
      where: 'Act 4, Scene 8',
      title: 'A day of victory',
      summary:
        "Antony beats Caesar's forces back to their camp and returns to Alexandria victorious. He praises the wounded Scarus to Cleopatra, who gives Scarus a king's armour of gold, and orders a march through the city.",
      setting: 'Under the walls of Alexandria',
      who: ['Antony', 'Scarus', 'Cleopatra'],
      quote: 'O thou day o’ th’ world',
      themes: ['Honour and Reputation', 'Love vs Duty'],
      tension: 2,
      significance:
        'A last glimpse of Antony as the soldier he was, placed just before the final fall.',
    },
    {
      where: 'Act 4, Scene 9',
      title: 'Enobarbus dies',
      summary:
        "At night, near Caesar's camp, Enobarbus calls on the moon to witness his repentance, asks Antony to forgive him, and dies with Antony's name on his lips. The sentries who overheard him carry his body away.",
      setting: "Caesar's camp, at night",
      who: ['Enobarbus', 'Sentries'],
      quote: 'Be witness to me, O thou blessed moon',
      themes: ['Betrayal and Loyalty'],
      tension: 4,
      significance:
        'The play’s realist dies of feeling, not reason, and asks to be remembered as a deserter.',
    },
    {
      where: 'Act 4, Scene 12',
      title: 'All is lost',
      summary:
        "Antony's fleet yields to Caesar and its sailors carouse with the enemy, and he is certain Cleopatra has betrayed him. When she comes to him he threatens her and drives her away, then swears that she will die for it.",
      setting: 'Ground near Alexandria, within sight of the sea',
      who: ['Antony', 'Scarus', 'Cleopatra'],
      quote: 'All is lost! / This foul Egyptian hath betrayed me.',
      themes: ['Betrayal and Loyalty', 'Gender and Political Identity'],
      tension: 5,
      significance:
        'The last defeat turns Antony’s love to hatred, and the play never confirms his suspicion.',
    },
    {
      where: 'Act 4, Scene 14',
      title: 'The shape of a cloud',
      summary:
        "Antony tells Eros he can no longer hold his own shape. Mardian brings Cleopatra's false message that she has died, and Antony asks Eros to kill him; Eros kills himself instead. Antony falls on his sword but does not die, learns from Diomedes that Cleopatra is alive, and asks his guard to carry him to her.",
      setting: 'A room in Alexandria',
      who: ['Antony', 'Eros', 'Mardian', 'Diomedes'],
      quote: 'Here I am Antony, / Yet cannot hold this visible shape',
      themes: [
        'Time, Mutability, and Dissolution',
        'Honour and Reputation',
        'Theatricality and Performance',
      ],
      tension: 5,
      significance:
        'A lie meant to calm him leads to his death, and even his Roman ending goes wrong.',
    },
    {
      where: 'Act 4, Scene 15',
      title: 'Death in the monument',
      summary:
        'Cleopatra, afraid of being captured, will not come down from her monument, so Antony is lifted up to her. He asks to be remembered as the greatest prince of the world, a Roman overcome by a Roman, and dies. She faints, then resolves to die as nobly as he did.',
      setting: "Cleopatra's monument in Alexandria",
      who: ['Cleopatra', 'Charmian', 'Iras', 'Diomedes', 'Antony'],
      quote: 'The crown o’ th’ earth doth melt.',
      themes: ['Love vs Duty', 'Time, Mutability, and Dissolution', 'Honour and Reputation'],
      tension: 5,
      significance: 'Antony dies an act early, leaving the last act of the tragedy to Cleopatra.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Caesar mourns his rival',
      summary:
        "Dercetus brings Caesar Antony's bloodstained sword. Caesar is moved and praises him as his brother and partner in empire, then sends Proculeius to comfort Cleopatra, because he wants her alive for his triumph in Rome.",
      setting: "Caesar's camp before Alexandria",
      who: ['Octavius Caesar', 'Dercetus', 'Agrippa', 'Maecenas', 'Proculeius'],
      quote: 'The breaking of so great a thing should make / A greater crack.',
      themes: ['Power and Empire', 'Honour and Reputation'],
      tension: 3,
      significance: 'Caesar’s grief may be genuine, but it never interrupts his planning.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'The dream of Antony',
      summary:
        'Romans seize Cleopatra in her monument before she can stab herself. She tells Dolabella her dream of a colossal Antony, and he admits Caesar means to lead her in triumph. Caesar visits, and her treasurer Seleucus reveals that she has held back part of her wealth.',
      setting: "Cleopatra's monument",
      who: ['Cleopatra', 'Proculeius', 'Dolabella', 'Octavius Caesar', 'Seleucus'],
      quote: 'I dreamt there was an Emperor Antony.',
      themes: ['Theatricality and Performance', 'Power and Empire'],
      tension: 4,
      significance:
        'Cleopatra makes a legend of Antony while learning exactly what Rome intends for her.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'Again for Cydnus',
      summary:
        'A countryman brings a basket of figs with asps hidden in it. Cleopatra puts on her robe and crown as for her first meeting with Antony. Iras dies first; Cleopatra sets an asp to her breast and dies; Charmian straightens her crown and dies as the guards arrive.',
      setting: "Cleopatra's monument",
      who: ['Cleopatra', 'Clown', 'Iras', 'Charmian'],
      quote: 'Give me my robe. Put on my crown. I have / Immortal longings in me.',
      themes: ['Theatricality and Performance', 'Love vs Duty', 'Gender and Political Identity'],
      tension: 5,
      significance:
        'Cleopatra stages her own death as a queen and a bride, and denies Caesar his triumph.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'A pair so famous',
      summary:
        "Caesar arrives to find the three women dead. He admires Cleopatra's courage, works out how she died, and orders that she be buried beside Antony, with his army attending the funeral before he returns to Rome.",
      setting: "Cleopatra's monument",
      who: ['Octavius Caesar', 'Dolabella'],
      quote: 'No grave upon the earth shall clip in it / A pair so famous.',
      themes: ['Power and Empire', 'Honour and Reputation'],
      tension: 3,
      significance:
        'The winner of the war has the last word, and uses it to honour the lovers who beat him.',
    },
  ],

  relationships: [
    {
      from: 'Antony',
      to: 'Cleopatra',
      kind: 'lovers',
      note: 'Rome calls it dotage; they call it the nobleness of life. Twice Antony accuses her of turning to Caesar, when Thidias kisses her hand and when his fleet yields, and her false report of her death leads to his. In the last scene she calls him husband.',
    },
    {
      from: 'Antony',
      to: 'Octavius Caesar',
      kind: 'fellow triumvirs, then enemies',
      note: 'Partners in ruling the world who cannot share it. They are reconciled by a marriage and divided by Antony’s return to Egypt. After his death Caesar mourns him as “my brother, my competitor”.',
    },
    {
      from: 'Antony',
      to: 'Octavia',
      kind: 'husband and wife',
      note: 'A political marriage to seal peace with Caesar. Octavia tries to reconcile husband and brother, returns to Rome, and learns that Antony has gone back to Cleopatra.',
    },
    {
      from: 'Octavius Caesar',
      to: 'Octavia',
      kind: 'brother and sister',
      note: 'Caesar says no brother ever loved a sister so dearly, yet he gives her in marriage as “the cement of our love”, and her ill treatment becomes part of his case for war.',
    },
    {
      from: 'Antony',
      to: 'Enobarbus',
      kind: 'general and friend',
      note: 'Enobarbus speaks the plain truth to Antony and warns him against fighting at sea. He deserts before the last battles; Antony sends Enobarbus’s treasure after him, and Enobarbus dies ashamed, calling Antony’s name.',
    },
    {
      from: 'Antony',
      to: 'Eros',
      kind: 'master and freed servant',
      note: 'Antony freed Eros, who swore to kill him when the time came. Asked to do it, Eros kills himself instead, and Antony calls him “Thrice nobler than myself”.',
    },
    {
      from: 'Antony',
      to: 'Fulvia',
      kind: 'husband and wife',
      note: 'Fulvia never appears. Her wars against Caesar draw Antony back to Rome, and the news of her death in Act 1, Scene 2 leaves him free to marry Octavia.',
    },
    {
      from: 'Cleopatra',
      to: 'Charmian',
      kind: 'queen and attendant',
      note: 'Her closest companion. Charmian advises her, suggests the monument and the false report of her death, and after Cleopatra dies straightens her crown before dying herself.',
    },
    {
      from: 'Cleopatra',
      to: 'Iras',
      kind: 'queen and attendant',
      note: 'Iras fears being shown in Rome as much as her mistress does. She dies first, after Cleopatra kisses her farewell.',
    },
    {
      from: 'Octavius Caesar',
      to: 'Cleopatra',
      kind: 'conqueror and captive queen',
      note: 'Caesar promises her kindness but wants her alive to be paraded in his triumph. She sees through him with Dolabella’s help and outwits him, and he ends by admiring her as “Bravest at the last”.',
    },
    {
      from: 'Octavius Caesar',
      to: 'Lepidus',
      kind: 'fellow triumvirs',
      note: 'Lepidus tries to keep the peace between his partners. Caesar uses him in the war against Pompey, then accuses and deposes him, as Eros reports in Act 3, Scene 5.',
    },
    {
      from: 'Pompey',
      to: 'Menas',
      kind: 'commander and follower',
      note: 'Menas offers Pompey the world by murdering his guests. Pompey refuses for honour’s sake, and Menas resolves never to follow his fortunes again.',
    },
    {
      from: 'Cleopatra',
      to: 'Dolabella',
      kind: 'captive and guard',
      note: 'Moved by her grief, Dolabella confirms that Caesar will lead her in triumph and later warns her he will send her ahead within three days.',
    },
    {
      from: 'Enobarbus',
      to: 'Cleopatra',
      kind: 'critic and admirer',
      note: 'He mocks her habit of dying away on the slightest cause and opposes her presence at Actium, yet it is Enobarbus who gives the play its most dazzling description of her.',
    },
  ],

  compareWith: [
    {
      title: 'Othello',
      href: '/revision/texts/othello',
      reason:
        'A tragedy on the same Edexcel and Eduqas A-level lists in which a great general is undone by love and by his belief that a woman has betrayed him, and ends by telling others how he wishes to be remembered.',
    },
    {
      title: 'King Lear',
      href: '/revision/texts/king-lear',
      reason:
        "On the same A-level lists: an old ruler loses his power and his followers, and Kent's loyalty to a fallen master, through banishment and disguise, is the exact opposite of Enobarbus's desertion.",
    },
    {
      title: 'Hamlet',
      href: '/revision/texts/hamlet',
      reason:
        'On the same A-level lists: a tragedy fascinated by acting, whose dying hero asks a friend to tell his story truly, much as Cleopatra fears how Rome will stage hers.',
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'intimate_relationships',
    'mental_health',
    'addiction',
    'discrimination',
    'colonialism',
    'mythological_religious',
    'supernatural',
  ],

  quotesFromElsewhere: ['the new Isis'],

  sources: [
    {
      label:
        'Antony and Cleopatra, Project Gutenberg eBook #1534: the modern-spelling edition held as a byte copy in src/data/full-texts/antony-and-cleopatra.ts. Every quotation and all three passages were copied from it, and speakers and scenes checked by reading the whole play in it (42 scenes: 5, 7, 13, 15 and 2 by act)',
      url: 'https://www.gutenberg.org/ebooks/1534',
    },
    {
      label:
        'Folger Shakespeare Library, Antony and Cleopatra: first printed in the 1623 First Folio, which is the source for all later editions',
      url: 'https://www.folger.edu/explore/shakespeares-works/antony-and-cleopatra/',
    },
    {
      label:
        "Wikipedia, Antony and Cleopatra: many scholars date it 1606 to 1607; entered in the Stationers' Register in May 1608; first published in the First Folio; the principal source is Plutarch's Life of Antony in Thomas North's translation, first published 1579; about forty scenes; the act divisions are not Shakespeare's; Cleopatra was played by male actors",
      url: 'https://en.wikipedia.org/wiki/Antony_and_Cleopatra',
    },
    {
      label:
        "Plutarch, Life of Antony (Loeb translation, LacusCurtius): the tradition that the Antonii were descended from Heracles (section 4); Cleopatra's barge on the Cydnus with gilded poop, purple sails, silver oars and flutes (section 26); Cleopatra appearing in a robe sacred to Isis and addressed as the New Isis (section 54)",
      url: 'https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Antony*.html',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475, syllabus for examination in 2027: Antony and Cleopatra is set for Paper 2 (Drama) and Paper 3 (Drama, Open Text); Paper 2 offers a passage-based question or an essay on each text, with passages printed on the paper; questions of the kind “Explore the ways in which”. The 2026 list, also including the play, is recorded in src/lib/board/cambridge-0475.ts',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
    {
      label:
        'The set-text register, src/lib/board/set-texts.ts: this play on edexcel-a-level, eduqas-a-level and cambridge-0475; Othello, King Lear and Hamlet on edexcel-a-level and eduqas-a-level',
    },
    {
      label:
        'Wikipedia, Second Triumvirate: Antony, Lepidus and Octavian, constituted by law on 27 November 43 BC; Lepidus stripped of membership in 36 BC; the Battle of Actium on 2 September 31 BC',
      url: 'https://en.wikipedia.org/wiki/Second_Triumvirate',
    },
    {
      label:
        'Wikipedia, Roman triumph: captive leaders, allies and soldiers walked in the procession, usually in chains',
      url: 'https://en.wikipedia.org/wiki/Roman_triumph',
    },
    {
      label: 'Wikipedia, Isis: wife of Osiris and mother of Horus',
      url: 'https://en.wikipedia.org/wiki/Isis',
    },
    {
      label:
        'Wikipedia, Shirt of Nessus (the poisoned shirt that killed Heracles; Alcides as another name for him), Thetis (a sea nymph, one of the fifty Nereids, daughters of Nereus), Dido (her ghost turns away from Aeneas in the underworld) and Aeneas (commanded by the gods to leave Carthage for Italy, where his people became progenitors of the Romans)',
      url: 'https://en.wikipedia.org/wiki/Shirt_of_Nessus',
    },
    {
      label:
        'Wiktionary, for the glossary: yare (of a ship, easily handled; nimble), cantle (a piece cut off), dislimn (to efface an outline), rack (thin flying clouds; the entry cites this play), garboil (uproar), lictor, mandragora (a sleep-inducing drug), salad days (from this play), varletry (the rabble; cites this play), worm (archaic, a snake), dotage (excessive fondness; the decline of age), vesper (evening), front (the forehead or face), monument (a tomb), asp (the Egyptian cobra) and Gypsy (from Egyptian, through a mistaken belief; some Romani people find it offensive)',
      url: 'https://en.wiktionary.org/wiki/yare',
    },
    {
      label:
        "Held editions of Othello, King Lear and Hamlet in src/data/full-texts: checked for the comparison notes (Othello's last speech on how he should be spoken of; Kent banished and returning disguised; Hamlet's players and his request that his cause be reported aright)",
    },
  ],
}
