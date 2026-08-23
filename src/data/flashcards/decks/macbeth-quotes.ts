// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'macbeth-quotes',
  title: 'Macbeth - Key Quotations',
  description: '30 key quotations covering all major characters and themes',
  category: 'Literature',
  board: 'All',
  cards: [
    {
      id: 'mq-1',
      front: '"Fair is foul, and foul is fair"',
      back: `Speaker: The Witches (Act 1, Scene 1)\n\nMeaning: What appears good is actually evil and vice versa. Sets the moral confusion of the entire play.\n\nTechniques: Chiasmus, paradox, antithesis.\n\nThemes: Appearance vs reality, the supernatural, moral disorder.\n\nExam point: This opening line establishes the play\'s central motif - that nothing in Macbeth\'s world can be trusted at face value, and Shakespeare uses the Witches to collapse the boundary between good and evil from the very first scene.`,
    },
    {
      id: 'mq-2',
      front: '"Stars, hide your fires"',
      back: `Speaker: Macbeth (Act 1, Scene 4)\n\nMeaning: Macbeth wants darkness to conceal his murderous ambitions from the world and from himself.\n\nTechniques: Apostrophe (addressing the stars), imperative, symbolism (stars = morality/divine order; darkness = evil).\n\nThemes: Ambition, appearance vs reality, light vs dark.\n\nExam point: Macbeth actively invites darkness, showing that his ambition is already corrupting him before any supernatural intervention - he chooses to hide from his own conscience.`,
    },
    {
      id: 'mq-3',
      front: '"Look like th\'innocent flower, but be the serpent under\'t"',
      back: `Speaker: Lady Macbeth to Macbeth (Act 1, Scene 5)\n\nMeaning: She instructs him to appear innocent while concealing murderous intent.\n\nTechniques: Simile, juxtaposition (flower vs serpent), biblical allusion (serpent = Satan in Eden).\n\nThemes: Appearance vs reality, deception, gender roles.\n\nExam point: Lady Macbeth takes the role of tempter, echoing the serpent of Genesis; Shakespeare positions her as the driving force behind Duncan\'s murder, subverting Jacobean expectations of feminine passivity.`,
    },
    {
      id: 'mq-4',
      front: '"Unsex me here"',
      back: `Speaker: Lady Macbeth (Act 1, Scene 5)\n\nMeaning: She calls on dark spirits to strip away her femininity so she can be ruthless enough to help murder Duncan.\n\nTechniques: Imperative, invocation, soliloquy.\n\nThemes: Gender roles, the supernatural, ambition, power.\n\nExam point: Shakespeare uses Lady Macbeth to challenge Jacobean gender norms - she believes cruelty is inherently masculine, and must reject her womanhood to act. This also foreshadows her psychological collapse, as the guilt she suppresses here later destroys her.`,
    },
    {
      id: 'mq-5',
      front: '"Is this a dagger which I see before me"',
      back: `Speaker: Macbeth (Act 2, Scene 1)\n\nMeaning: Macbeth hallucinates a dagger leading him toward Duncan\'s chamber, questioning his own sanity.\n\nTechniques: Rhetorical question, soliloquy, hallucination/symbolism.\n\nThemes: Guilt, the supernatural, ambition, psychological torment.\n\nExam point: The dagger symbolises Macbeth\'s wavering conscience - he cannot tell reality from illusion, suggesting guilt is already fracturing his mind before the murder is even committed.`,
    },
    {
      id: 'mq-6',
      front: '"Will all great Neptune\'s ocean wash this blood clean from my hand?"',
      back: `Speaker: Macbeth (Act 2, Scene 2)\n\nMeaning: Macbeth believes no amount of water can cleanse his guilt after killing Duncan.\n\nTechniques: Rhetorical question, hyperbole, allusion (Neptune = Roman god of the sea).\n\nThemes: Guilt, violence, moral corruption.\n\nExam point: The blood imagery recurs throughout the play as an ever-deepening symbol of guilt; here Macbeth recognises his sin is permanent, yet he continues to kill - showing ambition overpowers even unbearable remorse.`,
    },
    {
      id: 'mq-7',
      front: '"A little water clears us of this deed"',
      back: `Speaker: Lady Macbeth (Act 2, Scene 2)\n\nMeaning: She dismisses the murder as something easily concealed, contrasting sharply with Macbeth\'s despair.\n\nTechniques: Juxtaposition with Macbeth\'s "Neptune\'s ocean" line, understatement, irony.\n\nThemes: Guilt, appearance vs reality, gender roles.\n\nExam point: This line is deeply ironic given her later sleepwalking scene where she obsessively washes her hands - Shakespeare shows guilt cannot be suppressed forever, and her rational facade crumbles completely by Act 5.`,
    },
    {
      id: 'mq-8',
      front: '"O, full of scorpions is my mind"',
      back: `Speaker: Macbeth (Act 3, Scene 2)\n\nMeaning: Macbeth reveals his tormented psychological state - paranoia and guilt consume him.\n\nTechniques: Metaphor, exclamatory, imagery of poison/danger.\n\nThemes: Guilt, psychological torment, consequences of ambition.\n\nExam point: The scorpion metaphor suggests Macbeth\'s thoughts are venomous and self-destructive - his mind has become a prison of his own making, and the crown he fought for brings only suffering, not satisfaction.`,
    },
    {
      id: 'mq-9',
      front: '"Blood will have blood"',
      back: `Speaker: Macbeth (Act 3, Scene 4)\n\nMeaning: Violence begets more violence - murder demands retribution.\n\nTechniques: Proverbial language, repetition, foreshadowing.\n\nThemes: Violence, guilt, fate, the natural order.\n\nExam point: Macbeth recognises the cycle of violence he has entered but feels powerless to stop it; Shakespeare presents tyranny as self-perpetuating - each murder necessitates the next, trapping Macbeth in escalating bloodshed.`,
    },
    {
      id: 'mq-10',
      front: '"I am in blood stepp\'d in so far"',
      back: `Speaker: Macbeth (Act 3, Scene 4)\n\nMeaning: He has committed so many murders that turning back is as difficult as continuing.\n\nTechniques: Extended metaphor (wading through a river of blood), imagery.\n\nThemes: Guilt, moral corruption, the point of no return.\n\nExam point: This is Macbeth\'s moral nadir - he no longer agonises over right and wrong but calculates effort. Shakespeare shows how repeated sin erodes conscience until evil becomes the path of least resistance.`,
    },
    {
      id: 'mq-11',
      front: '"Double, double toil and trouble"',
      back: `Speaker: The Witches (Act 4, Scene 1)\n\nMeaning: The Witches chant as they brew their potion, summoning chaos and destruction.\n\nTechniques: Rhyming couplets, incantation, trochaic tetrameter (disrupts iambic pentameter).\n\nThemes: The supernatural, chaos, fate.\n\nExam point: Shakespeare gives the Witches a distinct, abnormal metre to set them apart from the human world - their broken rhythm reflects the disorder they bring, and would have terrified a Jacobean audience who believed in witchcraft.`,
    },
    {
      id: 'mq-12',
      front: '"Out, damned spot!"',
      back: `Speaker: Lady Macbeth (Act 5, Scene 1)\n\nMeaning: While sleepwalking, she hallucinates blood on her hands that she cannot wash away.\n\nTechniques: Exclamatory, symbolism (blood = guilt), dramatic irony (recalls "a little water" in Act 2).\n\nThemes: Guilt, madness, consequences of ambition.\n\nExam point: Shakespeare\'s dramatic irony is devastating - the woman who dismissed guilt so easily is now destroyed by it. Her sleepwalking reveals the subconscious truth she tried to repress, showing guilt is inescapable.`,
    },
    {
      id: 'mq-13',
      front: '"What\'s done cannot be undone"',
      back: `Speaker: Lady Macbeth (Act 5, Scene 1)\n\nMeaning: In her madness, she acknowledges the irreversibility of their crimes.\n\nTechniques: Dramatic irony (echoes her earlier "what\'s done is done" from Act 3), proverbial language.\n\nThemes: Guilt, fate, consequences.\n\nExam point: The shift from "what\'s done is done" (dismissive) to "what\'s done cannot be undone" (despairing) tracks Lady Macbeth\'s complete psychological collapse - Shakespeare shows guilt transforming certainty into hopelessness.`,
    },
    {
      id: 'mq-14',
      front: '"By the pricking of my thumbs, something wicked this way comes"',
      back: `Speaker: Second Witch (Act 4, Scene 1)\n\nMeaning: The Witches sense Macbeth approaching - even they call him "wicked."\n\nTechniques: Rhyming couplet, foreshadowing, dramatic irony.\n\nThemes: The supernatural, moral corruption, evil.\n\nExam point: When even the agents of darkness call Macbeth "wicked," Shakespeare signals his complete moral fall - he has surpassed his corrupters, becoming more evil than the supernatural forces that tempted him.`,
    },
    {
      id: 'mq-15',
      front: '"Yet do I fear thy nature; it is too full o\' th\' milk of human kindness"',
      back: `Speaker: Lady Macbeth (Act 1, Scene 5)\n\nMeaning: She fears Macbeth is too compassionate to seize the crown through murder.\n\nTechniques: Metaphor (milk = nurture, innocence), soliloquy.\n\nThemes: Gender roles, ambition, masculinity.\n\nExam point: Lady Macbeth equates kindness with weakness and masculinity with violence - Shakespeare exposes the toxic expectations she places on Macbeth, which ultimately drive both characters to destruction.`,
    },
    {
      id: 'mq-16',
      front: '"So foul and fair a day I have not seen"',
      back: `Speaker: Macbeth (Act 1, Scene 3)\n\nMeaning: Macbeth unknowingly echoes the Witches\' words, linking himself to their dark influence.\n\nTechniques: Dramatic irony, paradox, echoing.\n\nThemes: The supernatural, fate vs free will, appearance vs reality.\n\nExam point: Shakespeare connects Macbeth to the Witches before they even meet on stage, suggesting he is already predisposed to evil - raising the question of whether the Witches create his ambition or merely awaken what already exists.`,
    },
    {
      id: 'mq-17',
      front: '"There\'s no art to find the mind\'s construction in the face"',
      back: `Speaker: King Duncan (Act 1, Scene 4)\n\nMeaning: You cannot tell what someone is thinking by looking at their face.\n\nTechniques: Dramatic irony (he is about to trust Macbeth, who will murder him), proverbial.\n\nThemes: Appearance vs reality, trust, kingship.\n\nExam point: Duncan\'s inability to read treachery makes him a poor judge of character - Shakespeare uses this to show that goodness alone is insufficient for a king; Duncan\'s trusting nature is a fatal flaw in a world of deception.`,
    },
    {
      id: 'mq-18',
      front: '"When you durst do it, then you were a man"',
      back: `Speaker: Lady Macbeth to Macbeth (Act 1, Scene 7)\n\nMeaning: She questions his masculinity to manipulate him into committing the murder.\n\nTechniques: Manipulation, conditional clause, challenging tone.\n\nThemes: Gender roles, masculinity, power, ambition.\n\nExam point: Lady Macbeth weaponises Jacobean ideas of manhood to control Macbeth - Shakespeare shows how toxic masculinity becomes a tool of manipulation, and Macbeth\'s need to prove himself "a man" leads directly to regicide.`,
    },
    {
      id: 'mq-19',
      front: '"Macbeth does murder sleep"',
      back: `Speaker: Macbeth (Act 2, Scene 2)\n\nMeaning: After killing Duncan, Macbeth hears a voice declaring he has murdered sleep itself - he will never rest peacefully again.\n\nTechniques: Personification, symbolism (sleep = innocence, peace, natural order).\n\nThemes: Guilt, the natural order, consequences.\n\nExam point: Sleep represents the innocent conscience Macbeth has destroyed; Shakespeare uses insomnia as a physical manifestation of guilt that haunts both Macbeths - he cannot sleep, she sleepwalks.`,
    },
    {
      id: 'mq-20',
      front: '"Thou canst not say I did it. Never shake thy gory locks at me"',
      back: `Speaker: Macbeth to Banquo\'s ghost (Act 3, Scene 4)\n\nMeaning: Macbeth is terrified by Banquo\'s ghost at the banquet and tries to deny responsibility.\n\nTechniques: Dramatic irony (the guests cannot see the ghost), imperative, apostrophe.\n\nThemes: Guilt, the supernatural, consequences of violence.\n\nExam point: The ghost may be a supernatural visitation or a projection of Macbeth\'s guilt - either way, Shakespeare shows that Macbeth\'s crimes cannot be hidden; his public breakdown reveals the tyrant\'s inner collapse.`,
    },
    {
      id: 'mq-21',
      front: '"Life\'s but a walking shadow, a poor player"',
      back: `Speaker: Macbeth (Act 5, Scene 5)\n\nMeaning: Upon hearing of Lady Macbeth\'s death, Macbeth declares life is meaningless - like a bad actor on stage.\n\nTechniques: Metaphor, nihilism, meta-theatrical imagery.\n\nThemes: Fate, mortality, meaninglessness, despair.\n\nExam point: Shakespeare gives Macbeth a moment of tragic self-awareness - he recognises that his ambition has led to nothing. The theatre metaphor is especially powerful as the audience watches an actor playing a man who compares life to acting.`,
    },
    {
      id: 'mq-22',
      front: '"It is a tale told by an idiot, full of sound and fury, signifying nothing"',
      back: `Speaker: Macbeth (Act 5, Scene 5)\n\nMeaning: Life is a meaningless story - full of noise but ultimately empty.\n\nTechniques: Metaphor, nihilistic tone, plosive sounds ("told," "tale," "fury").\n\nThemes: Meaninglessness, despair, mortality.\n\nExam point: This is Macbeth\'s darkest conclusion - his pursuit of power has drained life of all meaning. Shakespeare presents this as the inevitable end of unchecked ambition: not glory, but existential emptiness.`,
    },
    {
      id: 'mq-23',
      front: '"I have no spur to prick the sides of my intent"',
      back: `Speaker: Macbeth (Act 1, Scene 7)\n\nMeaning: Macbeth admits the only thing driving him to murder is "vaulting ambition" - he has no moral justification.\n\nTechniques: Extended metaphor (horse-riding), soliloquy.\n\nThemes: Ambition, moral conflict, free will.\n\nExam point: This soliloquy is crucial because Macbeth rationally lists every reason NOT to kill Duncan and finds only ambition as a motive - Shakespeare shows the murder is a conscious, unjustifiable choice, not fate.`,
    },
    {
      id: 'mq-24',
      front: '"Nought\'s had, all\'s spent, where our desire is got without content"',
      back: `Speaker: Lady Macbeth (Act 3, Scene 2)\n\nMeaning: They have gained everything they wanted but find no happiness - it was all for nothing.\n\nTechniques: Antithesis ("had" / "spent"), rhyming couplet, paradox.\n\nThemes: Ambition, dissatisfaction, consequences.\n\nExam point: Lady Macbeth articulates the play\'s central moral - ambition achieved through evil brings no fulfilment. Shakespeare uses her private admission to contrast with her public confidence, showing the cracks forming early.`,
    },
    {
      id: 'mq-25',
      front: '"He\'s here in double trust"',
      back: `Speaker: Macbeth (Act 1, Scene 7)\n\nMeaning: Macbeth acknowledges Duncan trusts him as both his kinsman and his host - making the murder doubly treacherous.\n\nTechniques: Dramatic irony, soliloquy.\n\nThemes: Loyalty, betrayal, kingship, the natural order.\n\nExam point: Macbeth\'s awareness of Duncan\'s trust makes his crime even more horrific - Shakespeare emphasises that this is not ignorant evil but deliberate betrayal of sacred bonds of kinship and hospitality.`,
    },
    {
      id: 'mq-26',
      front: '"The instruments of darkness tell us truths"',
      back: `Speaker: Banquo (Act 1, Scene 3)\n\nMeaning: Banquo warns that evil forces use partial truths to lead people to destruction.\n\nTechniques: Metaphor ("instruments of darkness"), foreshadowing.\n\nThemes: The supernatural, appearance vs reality, fate vs free will.\n\nExam point: Banquo serves as Macbeth\'s moral foil - he hears the same prophecy but chooses caution over action. Shakespeare uses Banquo to show that the Witches\' power lies in manipulation, not compulsion.`,
    },
    {
      id: 'mq-27',
      front: '"I dare do all that may become a man"',
      back: `Speaker: Macbeth to Lady Macbeth (Act 1, Scene 7)\n\nMeaning: Macbeth argues that true manhood means knowing the limits of acceptable behaviour.\n\nTechniques: Declarative, defining statement.\n\nThemes: Masculinity, honour, moral boundaries.\n\nExam point: Macbeth briefly offers a healthier vision of masculinity - one defined by restraint, not violence. Shakespeare shows this moral clarity is quickly overwhelmed by Lady Macbeth\'s manipulation, suggesting societal pressure overrides individual conscience.`,
    },
    {
      id: 'mq-28',
      front: '"O, O, O!"',
      back: `Speaker: Lady Macbeth (Act 5, Scene 1)\n\nMeaning: Lady Macbeth\'s anguished cries during her sleepwalking - language has failed her.\n\nTechniques: Exclamatory, fragmentation, non-verbal expression.\n\nThemes: Guilt, madness, the collapse of control.\n\nExam point: The woman who commanded language so powerfully in Act 1 is reduced to incoherent moaning - Shakespeare shows guilt has stripped her of the eloquence that was her greatest weapon, mirroring her total psychological disintegration.`,
    },
    {
      id: 'mq-29',
      front: '"This dead butcher and his fiend-like queen"',
      back: `Speaker: Malcolm (Act 5, Scene 8)\n\nMeaning: Malcolm dismisses Macbeth as a mere butcher and Lady Macbeth as a devil.\n\nTechniques: Epithet, reductive language, political rhetoric.\n\nThemes: Kingship, legacy, justice.\n\nExam point: Malcolm\'s verdict is politically convenient but reductive - Shakespeare invites the audience to question this summary. We have seen Macbeth\'s conscience and Lady Macbeth\'s suffering; they are more complex than "butcher" and "fiend," making this a statement about how history simplifies.`,
    },
    {
      id: 'mq-30',
      front: '"Screw your courage to the sticking-place"',
      back: `Speaker: Lady Macbeth (Act 1, Scene 7)\n\nMeaning: She tells Macbeth to tighten his resolve - commit fully to the murder.\n\nTechniques: Metaphor (from crossbow mechanics - winding to full tension), imperative.\n\nThemes: Ambition, manipulation, gender roles.\n\nExam point: Lady Macbeth uses a mechanical metaphor to reduce murder to a practical task - Shakespeare shows her ability to strip moral weight from violence, making the unthinkable feel like simple determination.`,
    },
  ],
}

export default deck
