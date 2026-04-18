'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Quote, Lightbulb, BookOpen } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

// ── Character data ────────────────────────────────────────────────────────────

type CharacterStudy = {
  name: string
  role: string
  analysis: string
  keyQuotes: { quote: string; context: string; analysis: string }[]
  arc: string
  themeLinks: string[]
  examTip: string
}

const CHARACTERS: CharacterStudy[] = [
  {
    name: 'Macbeth',
    role: 'Protagonist; Thane of Glamis, later King of Scotland',
    analysis:
      'Macbeth begins the play as a courageous and loyal warrior, praised as "brave Macbeth" and "Bellona\'s bridegroom." However, the witches\' prophecy awakens a latent ambition that, once ignited by Lady Macbeth\'s persuasion, consumes him entirely. His soliloquies reveal a man acutely aware of the moral horror of his actions yet unable to stop himself. He transitions from reluctant murderer to paranoid tyrant, ordering the deaths of Banquo, Lady Macduff, and her children without the agonised hesitation he showed before killing Duncan. Shakespeare uses Macbeth as a tragic hero whose fatal flaw of "vaulting ambition" leads to his inevitable destruction.',
    keyQuotes: [
      {
        quote: 'I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself / And falls on the other.',
        context: 'Act 1, Scene 7 -- soliloquy before Duncan\'s murder',
        analysis:
          'The horse-riding metaphor imagines ambition as a rider who leaps too far and falls. Macbeth diagnoses his own destruction but proceeds anyway, revealing the self-aware nature of his tragedy.',
      },
      {
        quote: 'Is this a dagger which I see before me, / The handle toward my hand?',
        context: 'Act 2, Scene 1 -- the dagger soliloquy',
        analysis:
          'The hallucinated dagger dramatises Macbeth\'s psychological conflict. Its handle points towards him, suggesting temptation offering itself willingly. The ambiguity -- supernatural vision or guilty projection? -- mirrors the play\'s central uncertainty.',
      },
      {
        quote: 'I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er.',
        context: 'Act 3, Scene 4 -- after Banquo\'s ghost appears',
        analysis:
          'The river-of-blood metaphor suggests Macbeth has crossed a moral point of no return. The word "tedious" is chillingly understated: repentance has become merely inconvenient rather than morally desirable.',
      },
      {
        quote: 'Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day / To the last syllable of recorded time.',
        context: 'Act 5, Scene 5 -- on hearing of Lady Macbeth\'s death',
        analysis:
          'Repetition and monosyllabic diction create unbearable monotony. The nihilistic soliloquy reveals a man stripped of all meaning, the tragic culmination of his journey from ambitious warrior to hollowed-out tyrant.',
      },
      {
        quote: 'Stars, hide your fires; / Let not light see my black and deep desires.',
        context: 'Act 1, Scene 4 -- aside after Malcolm is named heir',
        analysis:
          'Light represents divine goodness; darkness conceals evil. Macbeth symbolically asks heaven to look away, aligning himself with the forces of darkness. The rhyming couplet gives the aside a spell-like decisiveness.',
      },
    ],
    arc: 'Macbeth\'s arc traces a clear descent: loyal warrior to tempted subject to reluctant murderer to paranoid tyrant to nihilistic ruin. Each stage strips away more of his humanity. In Act 1 he agonises over killing Duncan; by Act 4 he orders the slaughter of an entire family without hesitation. His final soliloquy ("Tomorrow, and tomorrow") shows a man who has not merely lost power but lost the capacity to feel anything at all.',
    themeLinks: ['Ambition', 'Guilt & Conscience', 'Masculinity & Power', 'Appearance vs Reality'],
    examTip:
      'Always track Macbeth\'s moral awareness. He knows what he is doing is wrong at every stage -- this is what makes him a tragic hero rather than a simple villain. Quote his soliloquies to show this self-knowledge, then argue that his tragedy lies in understanding his own destruction but being unable to prevent it.',
  },
  {
    name: 'Lady Macbeth',
    role: 'Macbeth\'s wife and co-conspirator in Duncan\'s murder',
    analysis:
      'Lady Macbeth is one of Shakespeare\'s most complex female characters. On hearing of the witches\' prophecy, she calls on dark spirits to "unsex me here" and fill her with cruelty, explicitly rejecting femininity in favour of ruthless ambition. She is the driving force behind Duncan\'s murder, orchestrating the practical details while Macbeth falters. However, her iron resolve crumbles as guilt takes hold. By Act 5 she is sleepwalking, obsessively washing imaginary blood from her hands. Her offstage death, likely by suicide, completes her arc from fierce ambition to psychological destruction.',
    keyQuotes: [
      {
        quote: 'Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty.',
        context: 'Act 1, Scene 5 -- invocation to dark spirits',
        analysis:
          'Lady Macbeth demands the removal of femininity so she can participate in murder. The request to be filled "from the crown to the toe" with cruelty parallels demonic possession. Crucially, her need to invoke spirits reveals that cruelty does not come naturally to her.',
      },
      {
        quote: 'Look like th\' innocent flower, / But be the serpent under\'t.',
        context: 'Act 1, Scene 5 -- instructing Macbeth',
        analysis:
          'The biblical allusion to the serpent in Eden aligns their plot with original sin. Lady Macbeth masters the gap between appearance and reality that will ultimately destroy them both.',
      },
      {
        quote: 'When you durst do it, then you were a man.',
        context: 'Act 1, Scene 7 -- persuading Macbeth to murder',
        analysis:
          'Lady Macbeth weaponises gender expectations, equating manhood with willingness to kill. This manipulation of toxic masculinity is central to the play\'s exploration of gender.',
      },
      {
        quote: 'Out, damned spot! Out, I say!',
        context: 'Act 5, Scene 1 -- the sleepwalking scene',
        analysis:
          'The blood that she once dismissed as easily washed away has become a permanent psychological stain. Her fragmented prose contrasts with her earlier commanding verse, reflecting her mental disintegration.',
      },
      {
        quote: 'Here\'s the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand.',
        context: 'Act 5, Scene 1 -- sleepwalking scene',
        analysis:
          'This directly inverts Macbeth\'s "Neptune\'s ocean" image. The word "little" is poignant: she is no longer the towering figure who summoned evil spirits but a diminished woman destroyed by remorse.',
      },
    ],
    arc: 'Lady Macbeth\'s arc is an inversion of her husband\'s. She begins as the stronger, more decisive partner and ends as the weaker, more tormented one. In Act 1 she commands; in Act 3 she pleads ("Nought\'s had, all\'s spent"); in Act 5 she is powerless against her own guilt. Shakespeare demonstrates that suppressing conscience does not eliminate it -- guilt erupts unconsciously through sleepwalking, hallucination, and madness.',
    themeLinks: ['Masculinity & Power', 'Guilt & Conscience', 'Ambition', 'Supernatural & Fate'],
    examTip:
      'Avoid the simplistic reading of Lady Macbeth as "evil." Her need to call on spirits to remove her femininity proves she recognises the unnaturalness of what she is doing. Her breakdown in Act 5 proves that guilt cannot be permanently suppressed. She is not a monster but a person who tried to become one and was destroyed by the attempt.',
  },
  {
    name: 'Banquo',
    role: 'Macbeth\'s fellow general and friend; father of Fleance',
    analysis:
      'Banquo serves as a moral foil to Macbeth. He hears the same prophecy but responds with caution rather than ambition, warning that "the instruments of darkness tell us truths, / Win us with honest trifles, to betray\'s / In deepest consequence." Where Macbeth acts on the witches\' words, Banquo resists temptation. His murder shows how far Macbeth has fallen, and his ghost\'s appearance at the banquet serves as a physical manifestation of Macbeth\'s guilt.',
    keyQuotes: [
      {
        quote: 'The instruments of darkness tell us truths, / Win us with honest trifles, to betray\'s / In deepest consequence.',
        context: 'Act 1, Scene 3 -- after the witches\' prophecy',
        analysis:
          'Banquo recognises the witches\' strategy of using small truths as bait for greater deceptions. His moral clarity and Macbeth\'s failure to heed this warning establish Banquo as the voice of reason.',
      },
      {
        quote: 'Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play\'dst most foully for\'t.',
        context: 'Act 3, Scene 1 -- Banquo\'s suspicions',
        analysis:
          'Banquo suspects Macbeth but does not act on his suspicion. The word "foully" echoes the witches\' "fair is foul," connecting Macbeth\'s crime to the moral disorder established in the opening scene.',
      },
      {
        quote: 'Fly, good Fleance, fly, fly, fly!',
        context: 'Act 3, Scene 3 -- Banquo\'s murder',
        analysis:
          'Banquo\'s final words prioritise his son\'s survival over his own life. The desperate repetition of "fly" reveals parental love and self-sacrifice, contrasting with Macbeth\'s increasingly selfish violence.',
      },
      {
        quote: 'Thou canst not say I did it; never shake / Thy gory locks at me.',
        context: 'Act 3, Scene 4 -- Macbeth to Banquo\'s ghost',
        analysis:
          'Though spoken by Macbeth, this reveals Banquo\'s continued power. The ghost\'s silent accusation is more devastating than any words, and Macbeth\'s denial ("I did it") is a confession disguised as a protest.',
      },
    ],
    arc: 'Banquo\'s arc is deliberately limited by his murder in Act 3, but his ghost\'s appearances extend his influence beyond death. Alive, he represents the moral path Macbeth rejected; dead, he becomes the guilt that Macbeth cannot escape. His descendant line leading to James I gives him a symbolic victory over Macbeth\'s childless tyranny.',
    themeLinks: ['Loyalty & Betrayal', 'Supernatural & Fate', 'Ambition'],
    examTip:
      'Banquo is most effective as a comparison character. In any essay about Macbeth\'s choices, use Banquo to prove that the witches did not force Macbeth to act -- Banquo heard the same prophecy and chose differently. This supports the argument that Macbeth bears personal responsibility for his actions.',
  },
  {
    name: 'Macduff',
    role: 'Thane of Fife; leads the opposition and kills Macbeth',
    analysis:
      'Macduff represents justice, honour, and righteous vengeance. He is the first to discover Duncan\'s body and is notably absent from Macbeth\'s coronation, signalling early suspicion. His decision to flee to England, leaving his family unprotected, leads to their slaughter. His grief at hearing of their deaths provides the play\'s most emotionally devastating moment and its most positive definition of masculinity.',
    keyQuotes: [
      {
        quote: 'O horror, horror, horror! Tongue nor heart / Cannot conceive nor name thee!',
        context: 'Act 2, Scene 3 -- discovering Duncan\'s body',
        analysis:
          'The triple repetition of "horror" and the claim that language itself fails conveys the enormity of regicide. Macduff\'s genuine shock contrasts with Macbeth\'s performed outrage.',
      },
      {
        quote: 'I shall do so; / But I must also feel it as a man.',
        context: 'Act 4, Scene 3 -- grieving his murdered family',
        analysis:
          'When told to "dispute it like a man," Macduff insists that genuine masculinity includes emotional depth. This directly challenges Lady Macbeth\'s reductive definition of manhood as violent action.',
      },
      {
        quote: 'Macduff was from his mother\'s womb / Untimely ripp\'d.',
        context: 'Act 5, Scene 8 -- the final confrontation',
        analysis:
          'The caesarean birth fulfils the witches\' equivocating prophecy. Macduff is technically not "born" of woman, exposing the witches\' deceptive literalism and ending Macbeth\'s false sense of invincibility.',
      },
      {
        quote: 'All my pretty ones? / Did you say all? O hell-kite! All?',
        context: 'Act 4, Scene 3 -- learning of his family\'s murder',
        analysis:
          'The repetition of "all" and the animal imagery ("hell-kite") reveal raw, uncontrolled grief. The tenderness of "pretty ones" humanises Macduff and makes Macbeth\'s crime all the more monstrous.',
      },
    ],
    arc: 'Macduff moves from loyal subject to fugitive to grief-stricken avenger. His journey mirrors Macbeth\'s in reverse: as Macbeth descends into tyranny, Macduff rises to become the instrument of justice. His emotional vulnerability makes him the play\'s most sympathetic male character.',
    themeLinks: ['Masculinity & Power', 'Loyalty & Betrayal', 'Kingship & Tyranny', 'Violence & Blood'],
    examTip:
      'Macduff\'s "feel it as a man" line is essential for any essay on gender in Macbeth. Use it as a counterpoint to Lady Macbeth\'s definition of masculinity -- Macduff proves that strength and sensitivity can coexist, offering the play\'s most positive model of manhood.',
  },
  {
    name: 'King Duncan',
    role: 'King of Scotland; murdered by Macbeth in Act 2',
    analysis:
      'Duncan is presented as a gracious, trusting, and generous king who represents divinely ordained order. He praises loyalty lavishly and rewards service with titles. However, his fatal flaw is excessive trust -- he admits there is "no art / To find the mind\'s construction in the face" yet immediately places that same trust in Macbeth. His murder is presented as an act against nature itself, disrupting the divine order and plunging Scotland into chaos.',
    keyQuotes: [
      {
        quote: 'There\'s no art / To find the mind\'s construction in the face.',
        context: 'Act 1, Scene 4 -- reflecting on Cawdor\'s treason',
        analysis:
          'The dramatic irony is devastating: Duncan observes that appearances are deceptive at the exact moment he places his trust in the man who will murder him. He has learned nothing from the previous Cawdor\'s betrayal.',
      },
      {
        quote: 'This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself.',
        context: 'Act 1, Scene 6 -- arriving at Inverness',
        analysis:
          'Duncan finds the air "sweet" at the place where he will be murdered. The tranquil sensory language creates a false sense of safety that heightens the horror of what follows.',
      },
      {
        quote: 'He was a gentleman on whom I built / An absolute trust.',
        context: 'Act 1, Scene 4 -- about the treacherous Cawdor',
        analysis:
          'The word "absolute" emphasises how completely Duncan fails to learn from betrayal. This line foreshadows his misplaced faith in the new Thane of Cawdor.',
      },
      {
        quote: 'What he hath lost, noble Macbeth hath won.',
        context: 'Act 1, Scene 2 -- transferring the Cawdor title',
        analysis:
          'The echo of the witches\' "lost and won" links Duncan\'s court to the supernatural realm. The word "noble" creates bitter irony given Macbeth\'s already-forming murderous thoughts.',
      },
    ],
    arc: 'Duncan\'s arc is deliberately brief -- he exists to be murdered. His goodness makes the crime more horrifying and establishes the moral standard against which Macbeth\'s rule is measured. His death unleashes cosmic disorder: horses eat each other, an owl kills a falcon, and darkness covers the land.',
    themeLinks: ['Kingship & Tyranny', 'Appearance vs Reality', 'Loyalty & Betrayal', 'Nature & the Unnatural'],
    examTip:
      'Duncan is most useful as a benchmark for good kingship. Compare his qualities ("king-becoming graces") with Macbeth\'s tyranny. His murder is not just a political crime but a sin against the divine order, which explains the supernatural disturbances that follow.',
  },
  {
    name: 'Malcolm',
    role: 'Duncan\'s eldest son; rightful heir restored as King',
    analysis:
      'Malcolm initially appears passive, fleeing after his father\'s murder. However, he matures into a shrewd and cautious leader. In the extended testing scene with Macduff (Act 4, Scene 3), he pretends to be riddled with vices to test Macduff\'s loyalty, demonstrating political wisdom his father lacked. His final speech restores order and legitimate kingship.',
    keyQuotes: [
      {
        quote: 'This tyrant, whose sole name blisters our tongues, / Was once thought honest.',
        context: 'Act 4, Scene 3 -- Malcolm on Macbeth',
        analysis:
          'Malcolm acknowledges the gap between appearance and reality that enabled Macbeth\'s rise. The visceral image of blistered tongues makes Macbeth\'s name itself toxic.',
      },
      {
        quote: 'The king-becoming graces: / As justice, verity, temperance, stableness.',
        context: 'Act 4, Scene 3 -- Malcolm\'s test of Macduff',
        analysis:
          'Malcolm lists the virtues a true king should possess, providing a direct checklist against which Macbeth\'s rule fails on every count. This passage defines Shakespeare\'s ideal of legitimate monarchy.',
      },
      {
        quote: 'What I am truly, / Is thine and my poor country\'s to command.',
        context: 'Act 4, Scene 3 -- revealing his true nature to Macduff',
        analysis:
          'Malcolm defines kingship as service rather than power. The word "command" is ironic -- by placing himself at his country\'s disposal, he demonstrates the humility Macbeth utterly lacks.',
      },
      {
        quote: 'We shall not spend a large expense of time / Before we reckon with your several loves.',
        context: 'Act 5, Scene 9 -- Malcolm\'s final speech',
        analysis:
          'Malcolm\'s first act as king is to reward loyalty, mirroring his father\'s generosity but adding the political shrewdness Duncan lacked. The orderly couplet form signals the restoration of harmony.',
      },
    ],
    arc: 'Malcolm\'s arc represents the restoration of legitimate order. He begins as a passive youth, matures through exile, and returns as a ruler who combines his father\'s virtue with political intelligence. His coronation at Scone brings the play full circle.',
    themeLinks: ['Kingship & Tyranny', 'Appearance vs Reality', 'Loyalty & Betrayal'],
    examTip:
      'Malcolm is essential for essays on kingship. He represents the synthesis of Duncan\'s goodness and the political caution that Duncan lacked. Use his "king-becoming graces" speech as a structural framework for comparing different models of rule in the play.',
  },
  {
    name: 'The Witches (Weird Sisters)',
    role: 'Supernatural agents who prophesy Macbeth\'s rise and fall',
    analysis:
      'The three witches open the play with "Fair is foul, and foul is fair," establishing the theme of moral inversion. Shakespeare never clarifies whether they cause Macbeth\'s downfall or merely predict it, creating deliberate ambiguity about fate and free will. Their prophecies are technically true but deeply misleading, exploiting equivocation to give Macbeth a false sense of invincibility. They speak in trochaic tetrameter, setting them apart from the iambic pentameter of the court.',
    keyQuotes: [
      {
        quote: 'Fair is foul, and foul is fair, / Hover through the fog and filthy air.',
        context: 'Act 1, Scene 1 -- the opening chant',
        analysis:
          'The chiasmus mirrors moral inversion. The alliterative "f" sounds create a hissing, sinister tone. This single couplet establishes the play\'s central thematic tension: nothing is what it seems.',
      },
      {
        quote: 'Double, double toil and trouble; / Fire burn and cauldron bubble.',
        context: 'Act 4, Scene 1 -- the cauldron scene',
        analysis:
          'Trochaic tetrameter sets the witches apart from normal speech rhythms. "Double" reinforces the motif of duplicity and equivocation. The incantation has become one of the most recognisable passages in English literature.',
      },
      {
        quote: 'By the pricking of my thumbs, / Something wicked this way comes.',
        context: 'Act 4, Scene 1 -- sensing Macbeth\'s approach',
        analysis:
          'The witch calls Macbeth "something wicked" rather than "someone," stripping him of humanity. Even agents of evil now recognise Macbeth as corrupt, marking his total moral degradation.',
      },
      {
        quote: 'All hail, Macbeth, that shalt be king hereafter!',
        context: 'Act 1, Scene 3 -- the prophecy',
        analysis:
          'The prophecy is the inciting incident of the entire plot. "Shalt be" implies inevitability but leaves open whether Macbeth must act to make it happen. This ambiguity is the source of the play\'s central tension.',
      },
    ],
    arc: 'The witches appear in Acts 1 and 4, framing the play\'s descent into chaos. They do not develop as characters but function as catalysts, their equivocating prophecies driving the plot while raising unanswerable questions about predestination and agency.',
    themeLinks: ['Supernatural & Fate', 'Appearance vs Reality', 'Ambition'],
    examTip:
      'The key debate is whether the witches cause Macbeth\'s actions or merely reveal what was already inside him. Banquo hears the same prophecy and does not act on it -- use this to argue that the witches are tempters, not controllers. This supports a reading of Macbeth as personally responsible.',
  },
  {
    name: 'Lady Macduff',
    role: 'Macduff\'s wife; murdered with her children on Macbeth\'s orders',
    analysis:
      'Lady Macduff appears in only one scene (Act 4, Scene 2) but serves several important functions. Her domesticity and maternal love contrast sharply with Lady Macbeth\'s rejection of femininity. Her murder demonstrates Macbeth\'s descent into indiscriminate violence -- she and her children pose no political threat whatsoever. Her accusation that her husband has abandoned them raises uncomfortable questions about Macduff\'s decision to leave his family unprotected.',
    keyQuotes: [
      {
        quote: 'He loves us not; / He wants the natural touch.',
        context: 'Act 4, Scene 2 -- criticising Macduff\'s absence',
        analysis:
          'Lady Macduff accuses her husband of lacking natural paternal instinct. "Natural touch" connects to the play\'s wider theme of nature disrupted by unnatural acts.',
      },
      {
        quote: 'Whither should I fly? / I have done no harm.',
        context: 'Act 4, Scene 2 -- just before her murder',
        analysis:
          'Her bewildered innocence makes the murder more horrifying. The rhetorical question highlights the senselessness of Macbeth\'s tyranny -- in his Scotland, innocence is no protection.',
      },
    ],
    arc: 'Lady Macduff\'s brief appearance serves to humanise the victims of Macbeth\'s tyranny. Her loving relationship with her son provides a glimpse of the normal domestic world that Macbeth\'s violence has destroyed.',
    themeLinks: ['Violence & Blood', 'Nature & the Unnatural', 'Masculinity & Power'],
    examTip:
      'Use Lady Macduff as a contrast to Lady Macbeth. Where Lady Macbeth rejects maternal feeling, Lady Macduff embodies it. This contrast illuminates the play\'s argument that Lady Macbeth\'s ambition is a perversion of natural order.',
  },
  {
    name: 'The Porter',
    role: 'Comic gatekeeper at Macbeth\'s castle',
    analysis:
      'The Porter appears in only one scene (Act 2, Scene 3) but provides crucial comic relief and thematic commentary. His drunken monologue imagines himself as the gatekeeper of hell, unknowingly describing Macbeth\'s castle accurately. His references to an "equivocator" allude directly to the Gunpowder Plot trials, anchoring the play in Jacobean political anxiety.',
    keyQuotes: [
      {
        quote: 'Here\'s a farmer that hanged himself on th\' expectation of plenty.',
        context: 'Act 2, Scene 3 -- the Porter\'s monologue',
        analysis:
          'The farmer who kills himself expecting abundance mirrors Macbeth, who gains the crown but finds it empty. The Porter\'s comedy contains serious thematic parallels.',
      },
      {
        quote: 'Faith, here\'s an equivocator, that could swear in both the scales against either scale.',
        context: 'Act 2, Scene 3 -- on equivocation',
        analysis:
          'The reference to equivocation links to the Gunpowder Plot and the Jesuit Henry Garnet\'s trial. It also describes the witches\' method of telling truths that deceive, connecting comic relief to the play\'s deepest themes.',
      },
    ],
    arc: 'The Porter has no character arc. He functions as a choric voice, providing comic distance from the horror while simultaneously deepening the play\'s themes of equivocation and hell.',
    themeLinks: ['Appearance vs Reality', 'Supernatural & Fate'],
    examTip:
      'The Porter scene is excellent for discussing Shakespeare\'s structural choices. Why insert comedy immediately after a murder? It increases tension through contrast, allows the audience to process shock, and provides thematic commentary through the hell-gate metaphor.',
  },
  {
    name: 'Ross',
    role: 'Scottish nobleman; messenger and political survivor',
    analysis:
      'Ross appears throughout the play as a bearer of news, both good and bad. He announces Macbeth\'s new Cawdor title, reports the murder of Lady Macduff and her children, and supports Malcolm\'s restoration. His political adaptability -- he serves Duncan, then Macbeth, then Malcolm -- reflects the survival instinct of the Scottish nobility under tyranny.',
    keyQuotes: [
      {
        quote: 'Your castle is surprised; your wife and babes / Savagely slaughter\'d.',
        context: 'Act 4, Scene 3 -- telling Macduff of his family\'s murder',
        analysis:
          'Ross delivers the play\'s most devastating news with blunt directness. "Savagely" emphasises the barbarity of Macbeth\'s orders and the complete absence of political necessity behind the act.',
      },
      {
        quote: 'Alas, poor country, / Almost afraid to know itself!',
        context: 'Act 4, Scene 3 -- describing Scotland under Macbeth',
        analysis:
          'The personification of Scotland as fearful and self-alienated captures the psychological damage of tyranny. The entire nation has been corrupted by Macbeth\'s rule.',
      },
    ],
    arc: 'Ross functions as a witness to the play\'s events. His changing allegiances reflect the political reality of living under a tyrant -- loyalty becomes a matter of survival rather than principle.',
    themeLinks: ['Kingship & Tyranny', 'Loyalty & Betrayal'],
    examTip:
      'Ross is useful in essays about how tyranny affects ordinary people. His careful navigation between regimes shows that Macbeth\'s rule forces the nobility into moral compromise.',
  },
  {
    name: 'Lennox',
    role: 'Scottish nobleman; gradually turns against Macbeth',
    analysis:
      'Lennox represents the growing opposition to Macbeth among the Scottish nobility. In Act 3, Scene 6, he delivers a bitterly ironic speech that appears to praise Macbeth while actually condemning him, demonstrating how tyranny forces subjects to communicate through coded language and equivocation.',
    keyQuotes: [
      {
        quote: 'And the right valiant Banquo walk\'d too late; / Whom, you may say, if\'t please you, Fleance kill\'d, / For Fleance fled.',
        context: 'Act 3, Scene 6 -- ironic commentary',
        analysis:
          'Lennox\'s mock acceptance of Macbeth\'s version of events is dripping with sarcasm. The suggestion that Fleance killed Banquo because he "fled" exposes the absurdity of the official narrative, showing how tyranny requires subjects to pretend to believe obvious lies.',
      },
      {
        quote: 'May soon return to this our suffering country / Under a hand accursed!',
        context: 'Act 3, Scene 6 -- hoping for liberation',
        analysis:
          'Lennox openly calls Macbeth\'s rule "accursed," signalling the shift from private discontent to active opposition. "Suffering country" personifies Scotland as a victim of Macbeth\'s tyranny.',
      },
    ],
    arc: 'Lennox\'s movement from apparent loyalty to open opposition tracks the growing resistance that will culminate in Macbeth\'s overthrow. He represents the tipping point at which fear gives way to defiance.',
    themeLinks: ['Kingship & Tyranny', 'Appearance vs Reality', 'Loyalty & Betrayal'],
    examTip:
      'Lennox\'s ironic speech in Act 3, Scene 6 is excellent evidence for how tyranny corrupts language itself. Under Macbeth\'s rule, truth can only be spoken through sarcasm and double meanings -- an ironic echo of the witches\' own equivocation.',
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function MacbethCharactersPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />

        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="relative">
            <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/macbeth" />}>
              <ArrowLeft className="size-3.5" />
              Back to Macbeth overview
            </Button>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary"><Users className="mr-1 size-3 text-violet-400" />Character Analysis</Badge>
              <Badge variant="outline">11 characters</Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Macbeth — Character Analysis</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Full character studies for every significant figure in Macbeth, with key quotes, character arcs, theme links, and exam tips for GCSE and IGCSE English Literature.
            </p>
          </div>
        </section>

        {/* Character cards */}
        {CHARACTERS.map((c) => (
          <Card key={c.name} id={c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-5 text-violet-400" />
                {c.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{c.role}</p>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Analysis */}
              <div>
                <h4 className="mb-1 font-semibold">Analysis</h4>
                <p className="text-muted-foreground leading-relaxed">{c.analysis}</p>
              </div>

              {/* Key quotes */}
              <div>
                <h4 className="mb-2 flex items-center gap-1.5 font-semibold">
                  <Quote className="size-4 text-amber-500" /> Key Quotes
                </h4>
                <div className="space-y-3">
                  {c.keyQuotes.map((q, i) => (
                    <div key={i} className="rounded-lg border border-border/60 p-3">
                      <p className="font-medium">&ldquo;{q.quote}&rdquo;</p>
                      <p className="mt-0.5 text-xs text-muted-foreground/70">{q.context}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Analysis: </span>
                        {q.analysis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Character arc */}
              <div>
                <h4 className="mb-1 font-semibold">Character Arc</h4>
                <p className="text-muted-foreground leading-relaxed">{c.arc}</p>
              </div>

              {/* Theme links */}
              <div>
                <h4 className="mb-2 font-semibold">Links to Themes</h4>
                <div className="flex flex-wrap gap-2">
                  {c.themeLinks.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
              </div>

              {/* Exam tip */}
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-4">
                <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-amber-600 dark:text-amber-400">
                  <Lightbulb className="size-4" /> Exam Tip
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.examTip}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-8">
          <Button variant="outline" render={<Link href="/revision/texts/macbeth" />}>
            <ArrowLeft className="size-4 mr-1" /> Overview
          </Button>
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/themes" />}>
            Themes <BookOpen className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
