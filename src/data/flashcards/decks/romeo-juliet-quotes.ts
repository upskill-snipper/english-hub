// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'romeo-juliet-quotes',
  title: 'Romeo & Juliet - Key Quotations',
  description: '30 key quotations covering all major characters and themes',
  category: 'Literature',
  board: 'All',
  cards: [
    {
      id: 'rj-1',
      front: '"Two households, both alike in dignity"',
      back: `Speaker: Chorus / Prologue\n\nMeaning: Two equally noble families are locked in a feud. The Prologue reveals the lovers will die, framing the play as inevitable tragedy.\n\nTechniques: Sonnet form, dramatic irony, foreshadowing ("star-cross\'d lovers").\n\nThemes: Fate, conflict, family/honour.\n\nExam point: Shakespeare removes suspense by revealing the ending upfront - the audience watches knowing the lovers are doomed, creating dramatic irony that makes every hopeful moment painful.`,
    },
    {
      id: 'rj-2',
      front: '"O brawling love, O loving hate"',
      back: `Speaker: Romeo (Act 1, Scene 1)\n\nMeaning: Romeo describes the confusing contradictions of love using a string of oxymorons.\n\nTechniques: Oxymoron, antithesis, exclamatory.\n\nThemes: Love, conflict, confusion.\n\nExam point: Romeo\'s oxymorons reflect the play\'s central paradox - love and hate are inseparable in Verona. Shakespeare establishes early that love in this world is bound up with violence, foreshadowing the tragic outcome.`,
    },
    {
      id: 'rj-3',
      front: '"Did my heart love till now?"',
      back: `Speaker: Romeo (Act 1, Scene 5)\n\nMeaning: Upon seeing Juliet for the first time, Romeo questions whether he has ever truly loved before.\n\nTechniques: Rhetorical question, volta (turning point from Rosaline to Juliet).\n\nThemes: Love at first sight, the nature of love.\n\nExam point: Shakespeare uses this rhetorical question to mark Romeo\'s transformation - his love for Rosaline was performative and conventional, but Juliet provokes genuine feeling. However, the speed of this shift also suggests Romeo\'s love is impulsive.`,
    },
    {
      id: 'rj-4',
      front: '"But soft, what light through yonder window breaks?"',
      back: `Speaker: Romeo (Act 2, Scene 2 - the balcony scene)\n\nMeaning: Romeo sees Juliet at her window and compares her to the rising sun.\n\nTechniques: Light imagery, metaphor (Juliet = sun), soliloquy.\n\nThemes: Love, light vs dark, idealism.\n\nExam point: Shakespeare associates Juliet with celestial light throughout the play - she is Romeo\'s source of illumination in a dark world. This imagery also makes her death more devastating: when Juliet dies, Romeo\'s light is extinguished.`,
    },
    {
      id: 'rj-5',
      front: '"What\'s in a name?"',
      back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: Juliet argues that names are arbitrary labels - Romeo is still the same person regardless of being a Montague.\n\nTechniques: Rhetorical question, philosophical argument.\n\nThemes: Identity, family/honour, love vs society.\n\nExam point: Juliet shows more intellectual maturity than Romeo here - she rationally deconstructs the feud\'s logic. Shakespeare uses her to expose the absurdity of the conflict: the hatred is based on a name, not any real difference.`,
    },
    {
      id: 'rj-6',
      front: '"A rose by any other name would smell as sweet"',
      back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: A name does not change the nature of a thing - Romeo would be just as worthy if he were not called Montague.\n\nTechniques: Metaphor, analogy, symbolism (rose = beauty, love).\n\nThemes: Identity, love, the superficiality of the feud.\n\nExam point: Shakespeare uses natural imagery to argue that love is organic and real, while names and feuds are artificial constructs - yet these constructs ultimately destroy the lovers, showing society\'s power over the individual.`,
    },
    {
      id: 'rj-7',
      front: '"These violent delights have violent ends"',
      back: `Speaker: Friar Lawrence (Act 2, Scene 6)\n\nMeaning: Passionate, intense love can lead to destruction - he warns the lovers to be moderate.\n\nTechniques: Foreshadowing, antithesis, proverbial wisdom.\n\nThemes: Fate, love and death, haste.\n\nExam point: Friar Lawrence acts as a choric voice, articulating the play\'s moral. Shakespeare uses him to warn that the lovers\' intensity - their "violent delights" - carries the seeds of its own destruction, linking passion directly to death.`,
    },
    {
      id: 'rj-8',
      front: '"My only love sprung from my only hate"',
      back: `Speaker: Juliet (Act 1, Scene 5)\n\nMeaning: Juliet discovers Romeo is a Montague - the one person she loves belongs to the family she should hate.\n\nTechniques: Antithesis (love/hate), rhyming couplet, dramatic irony.\n\nThemes: Love vs hate, fate, conflict.\n\nExam point: This rhyming couplet crystallises the play\'s central tension - love and hate are born from the same source. Shakespeare makes the audience feel the cruel irony: in any other circumstances, this love would be celebrated.`,
    },
    {
      id: 'rj-9',
      front: '"O, I am fortune\'s fool!"',
      back: `Speaker: Romeo (Act 3, Scene 1)\n\nMeaning: After killing Tybalt, Romeo realises fate has trapped him - his impulsive action has sealed his doom.\n\nTechniques: Exclamatory, personification of fortune, alliteration.\n\nThemes: Fate, impulsiveness, tragedy.\n\nExam point: This is the play\'s turning point - Romeo shifts from lover to killer. Shakespeare leaves it ambiguous whether Romeo is truly fate\'s victim or whether his own impulsiveness is to blame, creating a tension between fate and free will.`,
    },
    {
      id: 'rj-10',
      front: '"A plague o\' both your houses!"',
      back: `Speaker: Mercutio (Act 3, Scene 1)\n\nMeaning: As he dies, Mercutio curses both the Montagues and Capulets for their senseless feud.\n\nTechniques: Curse, repetition (said three times), exclamatory.\n\nThemes: Conflict, consequences, blame.\n\nExam point: Mercutio - who belongs to neither family - is the feud\'s most innocent victim. His repeated curse becomes prophetic: both houses do suffer a "plague" of death. Shakespeare uses him to voice the audience\'s frustration at the pointless violence.`,
    },
    {
      id: 'rj-11',
      front: '"Wisely and slow. They stumble that run fast"',
      back: `Speaker: Friar Lawrence (Act 2, Scene 3)\n\nMeaning: The Friar advises caution - rushing leads to mistakes.\n\nTechniques: Imperative, proverbial wisdom, foreshadowing.\n\nThemes: Haste, fate, youth vs age.\n\nExam point: Friar Lawrence\'s advice is ignored by every young character - Romeo, Juliet, and Tybalt all act on impulse. Shakespeare contrasts the Friar\'s wisdom with the lovers\' recklessness to show that youth\'s intensity, while beautiful, is also fatally dangerous.`,
    },
    {
      id: 'rj-12',
      front: '"It is the east, and Juliet is the sun"',
      back: `Speaker: Romeo (Act 2, Scene 2)\n\nMeaning: Romeo compares Juliet to the sun - she outshines everything else.\n\nTechniques: Metaphor, celestial imagery, hyperbole.\n\nThemes: Love, light vs dark, idealism.\n\nExam point: Shakespeare elevates Juliet to a cosmic force - she is not merely beautiful but life-giving. This idealisation is romantic but also reveals Romeo\'s tendency to worship from afar, replacing one unattainable ideal (Rosaline) with another.`,
    },
    {
      id: 'rj-13',
      front: '"Then I defy you, stars!"',
      back: `Speaker: Romeo (Act 5, Scene 1)\n\nMeaning: Upon hearing of Juliet\'s "death," Romeo declares he will fight against fate itself.\n\nTechniques: Exclamatory, apostrophe, defiance, dramatic irony.\n\nThemes: Fate, free will, impulsiveness.\n\nExam point: Romeo\'s defiance of fate is tragically futile - by rushing to die beside Juliet, he fulfils the very fate he tries to resist. Shakespeare shows that the attempt to escape destiny is itself part of the destined pattern.`,
    },
    {
      id: 'rj-14',
      front: '"For never was a story of more woe"',
      back: `Speaker: Prince Escalus (Act 5, Scene 3)\n\nMeaning: The Prince delivers the final judgement - this is the saddest story ever told, caused by hatred.\n\nTechniques: Rhyming couplet, superlative, elegiac tone.\n\nThemes: Tragedy, consequences of conflict, loss.\n\nExam point: The Prince speaks for the audience and for Verona - Shakespeare uses this closing couplet to ensure the play ends not with romantic sentiment but with a clear moral: the feud caused these deaths, and the whole community bears responsibility.`,
    },
    {
      id: 'rj-15',
      front: '"O, she doth teach the torches to burn bright"',
      back: `Speaker: Romeo (Act 1, Scene 5)\n\nMeaning: Juliet\'s beauty outshines every torch in the room - she makes light itself look dim.\n\nTechniques: Hyperbole, personification, alliteration, light imagery.\n\nThemes: Love at first sight, beauty, light vs dark.\n\nExam point: Shakespeare uses this moment to show love as an overwhelming, instantaneous force. The light imagery that will follow Romeo and Juliet throughout the play begins here - they are bright flames in a dark world, beautiful but destined to burn out.`,
    },
    {
      id: 'rj-16',
      front: '"My bounty is as boundless as the sea"',
      back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: Her love is infinite - the more she gives, the more she has.\n\nTechniques: Simile, hyperbole, sibilance.\n\nThemes: Love, generosity, passion.\n\nExam point: Juliet\'s language here is mature and generous - she sees love as expansive, not possessive. Shakespeare gives Juliet some of the play\'s most profound lines about love, positioning her as more emotionally intelligent than Romeo despite being younger.`,
    },
    {
      id: 'rj-17',
      front: '"Women may fall when there\'s no strength in men"',
      back: `Speaker: Friar Lawrence (Act 2, Scene 3)\n\nMeaning: The Friar criticises Romeo\'s fickleness - moving from Rosaline to Juliet so quickly.\n\nTechniques: Proverbial, accusatory, gender commentary.\n\nThemes: Love, fickleness, youth, gender.\n\nExam point: Shakespeare uses the Friar to question the sincerity of Romeo\'s love - is this genuine transformation or another infatuation? This ambiguity enriches the play: the audience must decide whether Romeo\'s love has truly matured or simply found a new object.`,
    },
    {
      id: 'rj-18',
      front: '"Tempt not a desperate man"',
      back: `Speaker: Romeo (Act 5, Scene 3)\n\nMeaning: Romeo warns Paris not to provoke him - he has nothing left to lose.\n\nTechniques: Imperative, foreshadowing, threatening tone.\n\nThemes: Desperation, fate, violence.\n\nExam point: Shakespeare shows Romeo at his most dangerous - grief has stripped away his gentleness. This line reveals how love and violence are intertwined in Verona: Romeo kills Paris out of the same passion that drives his love for Juliet.`,
    },
    {
      id: 'rj-19',
      front: '"O happy dagger!"',
      back: `Speaker: Juliet (Act 5, Scene 3)\n\nMeaning: Juliet finds Romeo\'s dagger and calls it "happy" because it will reunite her with him through death.\n\nTechniques: Oxymoron (happy/dagger), personification, dramatic irony.\n\nThemes: Love and death, fate, sacrifice.\n\nExam point: The oxymoron "happy dagger" encapsulates the play\'s fusion of love and death - the instrument of violence becomes an instrument of love. Shakespeare shows that in Verona\'s toxic world, death is the only space where the lovers can be together.`,
    },
    {
      id: 'rj-20',
      front: '"Give me my Romeo, and when I shall die, take him and cut him out in little stars"',
      back: `Speaker: Juliet (Act 3, Scene 2)\n\nMeaning: Juliet imagines Romeo\'s beauty scattered across the night sky as stars after death.\n\nTechniques: Celestial imagery, foreshadowing death, epithalamium (wedding-night speech).\n\nThemes: Love, death, light vs dark, immortality.\n\nExam point: Shakespeare foreshadows Romeo\'s death even in Juliet\'s most romantic speech - she can only imagine preserving his beauty through death. Love and death are fused in her language, anticipating the final scene where she joins him in death.`,
    },
    {
      id: 'rj-21',
      front: '"Parting is such sweet sorrow"',
      back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: Saying goodbye is painful yet also sweet because it means they will meet again.\n\nTechniques: Oxymoron, sibilance.\n\nThemes: Love, contradiction, bittersweet emotion.\n\nExam point: This famous oxymoron captures the play\'s essence - every sweet moment carries sorrow. Shakespeare shows that even at their happiest, the lovers\' joy is inseparable from pain, mirroring the play\'s structure where every moment of hope precedes disaster.`,
    },
    {
      id: 'rj-22',
      front: '"I would the fool were married to her grave"',
      back: `Speaker: Lady Capulet (Act 3, Scene 5)\n\nMeaning: Lady Capulet wishes Juliet were dead rather than disobedient.\n\nTechniques: Dramatic irony (Juliet does end up in a grave), foreshadowing, hyperbole.\n\nThemes: Family, patriarchal authority, fate.\n\nExam point: Shakespeare makes Lady Capulet unwittingly prophesy her daughter\'s death - this chilling dramatic irony shows how the parents\' rigidity and cruelty drive the tragedy. Their inability to listen becomes a death sentence.`,
    },
    {
      id: 'rj-23',
      front: '"Hang thee, young baggage! Disobedient wretch!"',
      back: `Speaker: Lord Capulet (Act 3, Scene 5)\n\nMeaning: Capulet rages at Juliet for refusing to marry Paris, threatening to disown her.\n\nTechniques: Exclamatory, insults, imperatives, plosive sounds.\n\nThemes: Patriarchal authority, family, gender, power.\n\nExam point: Capulet\'s verbal violence reveals the patriarchal tyranny beneath his earlier affection - Shakespeare shows that Juliet is property to be disposed of, not a person with agency. His rage pushes Juliet toward the desperate plan that kills her.`,
    },
    {
      id: 'rj-24',
      front: '"Peace? I hate the word"',
      back: `Speaker: Tybalt (Act 1, Scene 1)\n\nMeaning: Tybalt rejects any possibility of peace - he lives for the feud.\n\nTechniques: Minor sentence, declarative, aggressive tone.\n\nThemes: Conflict, honour, masculinity.\n\nExam point: Shakespeare establishes Tybalt as the embodiment of the feud\'s violence - his hatred is not rational but instinctive. He represents the toxic honour culture that makes peace impossible and ultimately kills the lovers.`,
    },
    {
      id: 'rj-25',
      front: '"Thus with a kiss I die"',
      back: `Speaker: Romeo (Act 5, Scene 3)\n\nMeaning: Romeo kisses Juliet one final time before drinking the poison.\n\nTechniques: Dramatic irony (Juliet is alive), juxtaposition (kiss/death), simple language.\n\nThemes: Love and death, fate, tragedy.\n\nExam point: Shakespeare unites love and death in a single action - the kiss is both an act of love and a farewell to life. The simplicity of the language makes it devastating; Romeo needs no elaborate poetry, only this final gesture.`,
    },
    {
      id: 'rj-26',
      front: '"Death, that hath suck\'d the honey of thy breath"',
      back: `Speaker: Romeo (Act 5, Scene 3)\n\nMeaning: Romeo notices Juliet still looks beautiful in "death" - death has taken her life but not her beauty.\n\nTechniques: Personification of death, sensory imagery, dramatic irony (she is alive).\n\nThemes: Love, death, beauty, fate.\n\nExam point: The dramatic irony is excruciating - Romeo observes signs of life (her beauty, her colour) but interprets them through the lens of death. Shakespeare shows how close he comes to the truth, making the tragedy feel preventable and therefore more painful.`,
    },
    {
      id: 'rj-27',
      front: '"All are punish\'d"',
      back: `Speaker: Prince Escalus (Act 5, Scene 3)\n\nMeaning: Everyone has suffered because of the feud - no one escapes punishment.\n\nTechniques: Declarative, universal judgement, passive voice.\n\nThemes: Consequences, justice, collective responsibility.\n\nExam point: The Prince includes himself in the blame - his failure to enforce peace enabled the deaths. Shakespeare shows tragedy is never caused by one person; it is the product of an entire society\'s failures, from parents to rulers to bystanders.`,
    },
    {
      id: 'rj-28',
      front: '"From forth the fatal loins of these two foes"',
      back: `Speaker: Chorus / Prologue\n\nMeaning: From these two enemy families, the doomed lovers are born.\n\nTechniques: Alliteration ("forth," "fatal," "foes"), foreshadowing, sonnet form.\n\nThemes: Fate, family, death.\n\nExam point: The alliterative "f" sounds create a driving, relentless rhythm that mirrors fate\'s inescapable force. Shakespeare connects birth ("loins") with death ("fatal"), suggesting the lovers\' doom is literally genetic - they are born into a conflict that will kill them.`,
    },
    {
      id: 'rj-29',
      front: '"O, swear not by the moon, th\' inconstant moon"',
      back: `Speaker: Juliet (Act 2, Scene 2)\n\nMeaning: Juliet warns Romeo not to swear by the moon because it changes - she wants constant, reliable love.\n\nTechniques: Imperative, symbolism (moon = changeability), foreshadowing.\n\nThemes: Love, constancy vs fickleness, youth.\n\nExam point: Juliet is more practical and clear-sighted than Romeo - she sees through romantic gestures to demand real commitment. Shakespeare gives her the intellectual authority in their relationship, challenging the convention that women are passive objects of love.`,
    },
    {
      id: 'rj-30',
      front: '"A pair of star-cross\'d lovers take their life"',
      back: `Speaker: Chorus / Prologue\n\nMeaning: Two lovers, fated by the stars to fail, will kill themselves.\n\nTechniques: Compound adjective ("star-cross\'d"), foreshadowing, double meaning ("take their life" = live and die).\n\nThemes: Fate, love, death, tragedy.\n\nExam point: "Star-cross\'d" is Shakespeare\'s most famous image of doomed love - the stars (fate) have crossed out their happiness. The phrase also invokes astrology, which Elizabethans took seriously, suggesting the lovers never had a chance. The ambiguity of "take their life" - meaning both to begin life together and to end it - encapsulates the play\'s fusion of love and death.`,
    },
  ],
}

export default deck
