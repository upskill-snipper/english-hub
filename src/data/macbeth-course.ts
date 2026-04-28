// @ts-nocheck
import type { CourseData } from './courses'

const macbethCourse: CourseData = {
  id: 'macbeth-full',
  title: 'Macbeth — GCSE Complete Course',
  subtitle:
    "Master Shakespeare's darkest tragedy: characters, themes, context, and exam technique.",
  tier: 'GCSE',
  board: 'AQA',
  price: 0,
  duration: '12-15 hours',
  level: 'GCSE (Years 10-11)',
  description:
    "The ultimate guide to Shakespeare's Macbeth. From Jacobean history and witchcraft beliefs to character development, ambition, guilt, and the supernatural — this course builds your understanding from ground level to Grade 9 analysis. Packed with 70+ quotations, character trackers, theme webs, exam-style questions, and model answers.",
  color: '#7c3aed',
  moduleList: [
    {
      id: 'mb-m1',
      title: 'Module 1: Jacobean Context & Historical Background',
      duration: '90 mins',
      content: `<h2>Jacobean Context: Why Macbeth Matters in 1606</h2>
<p>Shakespeare wrote Macbeth around 1606 for King James I of England (James VI of Scotland). To understand the play's power, you need to know the world it was written in — a world obsessed with witchcraft, regicide, and the divine right of kings.</p>
<h3>James I: The Paranoid King</h3>
<p>James I had survived multiple assassination attempts, including the Gunpowder Plot of 1605 — a Catholic conspiracy to blow up Parliament and kill the king. He was deeply afraid of witchcraft and wrote a book called <em>Daemonologie</em> (1597) arguing that witches were real and dangerous. When Shakespeare's three witches appear at the start of Macbeth, a Jacobean audience would have trembled. These weren't fantasy creatures — they were a terrifying reality.</p>
<div class="key-term"><strong>Key Term: Divine Right of Kings</strong> — The belief that a king's authority comes directly from God, and that to murder a king is not just treason but a cosmic crime that angers heaven itself.</div>
<p>This explains why Duncan's murder is so catastrophic in the play. Duncan is not just a man — he is God's anointed. When Macbeth kills him, he violates the natural and divine order. The consequences ripple through nature: there are storms, darkness at noon, and horses eat each other. For James I's audience, this would have been chilling — Shakespeare is showing that regicide destroys everything.</p>
<h3>The Gunpowder Plot Connection</h3>
<p>The Gunpowder Plot of 1605 made regicide and assassination the most terrifying topic in England. In <strong>Act 2 Scene 3</strong>, the drunken Porter jokes about being "porter of hell gate" and imagines people knocking to enter hell. This is a direct echo of the Gunpowder Plot — Catholics who tried to destroy the king are imagined as demons seeking entry to hell. Shakespeare is flattering James I by showing that those who harm kings are damned.</p>
<div class="quote-bank">
<h4>Quotation Bank: Regicide and Divine Order</h4>
<ul>
<li><strong>"There's no art / To find the mind's construction in the face"</strong> (Duncan, Act 1 Scene 4) — Duncan cannot read betrayal. A king assumes loyalty. Effect: Shows Duncan's fatal naïveté; foreshadows that Macbeth will betray him. Grade 9: Ironic — Duncan sees Macbeth as trustworthy just before he's killed, suggesting that appearance masks dark ambition.</li>
<li><strong>"Blood will have blood"</strong> (Macbeth, Act 3 Scene 4) — Once murder enters the kingdom, more murder follows. Effect: The law of divine revenge — kill a king, and God demands payment. Grade 9: Macbeth recognises he's trapped in a cycle of violence triggered by breaking the cosmic order.</li>
<li><strong>"None of woman born / Shall harm Macbeth"</strong> (Witches, Act 4 Scene 1) — A false promise that plays on Macbeth's complacency. Effect: Creates false hope; later Macduff, "from his mother's womb / Untimely ripped," breaks the prophecy. Grade 9: The witches exploit Macbeth's literal thinking; language is technically true but misleading — a metaphor for how ambition blinds us.</li>
</ul>
</div>
<h3>Witchcraft Beliefs in Jacobean England</h3>
<p>In 1606, belief in witchcraft was not superstition — it was law. Witches could be tried and executed. The Witchcraft Act of 1542 made it illegal to practice witchcraft, and people accused of witchcraft were regularly hanged. King James I was especially paranoid about witches. In <em>Daemonologie</em>, he argued that witches were servants of Satan who could predict the future and cause harm through supernatural means.</p>
<p>Shakespeare's three witches would have terrified a Jacobean audience in a way that modern audiences can barely grasp. They are not portrayed as ugly hags — they are described as supernatural beings with beards, existing outside nature. They speak in a language that sounds like prophecy. For James I and his courtiers, these creatures represented genuine spiritual danger.</p>
<h3>Practice Question 1: Extract from Act 1 Scene 2</h3>
<p><strong>Model Answer (Grade 9):</strong> Duncan's opening lines establish him as a king surrounded by rebellion and disloyalty. The word "disloyal" emphasizes the violation of feudal bonds — in a Jacobean context where the divine right of kings was paramount, disloyalty to the monarch was not merely political betrayal but spiritual corruption. Duncan's calm authority as he receives news of battle suggests a secure, legitimate ruler — the opposite of Macbeth, who will later become paranoid and tyrannical. Shakespeare uses this contrast to show that legitimate authority brings peace, while illegitimate rule (Macbeth's regicide) brings chaos. For James I's audience, this was a powerful affirmation of divinely ordained kingship.</p>
<h3>Key Takeaways</h3>
<ul>
<li>Shakespeare wrote Macbeth for James I, a king obsessed with witchcraft and assassination.</li>
<li>The Gunpowder Plot of 1605 made regicide the most horrifying crime imaginable.</li>
<li>The divine right of kings meant that murdering a king was cosmic blasphemy, not just treason.</li>
<li>Witches were not fantasy creatures to a Jacobean audience — they were real and damnable.</li>
<li>Understanding this context makes the play's horror and power unmistakable.</li>
</ul>`,
      quiz: [
        {
          id: 'mb-m1-q1',
          question: 'Why was King James I particularly interested in the topic of witchcraft?',
          options: [
            'He wanted to write a play about witches',
            'He believed witches were real servants of Satan and wrote a book called Daemonologie',
            'The English church required him to study witchcraft',
            'He had been attacked by a witch',
          ],
          correct: 1,
          explanation:
            "James I wrote Daemonologie (1597) arguing that witches were real and dangerous. He was paranoid about witchcraft and assassination, making Shakespeare's witches genuinely terrifying to a Jacobean audience rather than theatrical fantasy.",
        },
      ],
    },
    {
      id: 'mb-m2',
      title: "Module 2: Macbeth's Ambition & the Tragic Hero",
      duration: '100 mins',
      content: `<h2>Macbeth: The Anatomy of Ambition</h2>
<p>Macbeth is Shakespeare's most claustrophobic tragedy. Unlike Hamlet or Othello, which sprawl across courts and islands, Macbeth is a tight, intense study of a single man destroyed by a single vice: ambition. By understanding Macbeth's arc, you unlock the play.</p>
<h3>The Tragic Hero Framework</h3>
<p>A tragic hero is a character of high status who possesses a fatal flaw (called a <em>hamartia</em>) that leads inevitably to their downfall. Macbeth fits this pattern perfectly:</p>
<ul>
<li><strong>High Status:</strong> He is a general, a thane, a man of honour.</li>
<li><strong>Fatal Flaw (Hamartia):</strong> Unbridled ambition.</li>
<li><strong>Fall:</strong> From loyal warrior to tyrant to dead man on a battlefield.</li>
<li><strong>Catastrophe:</strong> His wife dies, his power crumbles, his head is cut off.</li>
</ul>
<h3>Ambition Across the Play (Grade 9 Quotations)</h3>
<div class="quote-bank">
<ul>
<li><strong>"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on th'other."</strong> (Macbeth, Act 1 Scene 7) — Extended metaphor (horse-riding). Macbeth compares ambition to a rider who leaps so high on a horse that he falls off the other side. Effect: Suggests ambition is an uncontrollable force that destroys itself. Grade 9: Macbeth consciously recognises his fatal flaw — he knows ambition will destroy him, yet he acts anyway. This makes him a tragic hero, not a villain. He chooses damnation with eyes open.</li>
<li><strong>"We have scotch'd the snake, not kill'd it"</strong> (Macbeth, Act 3 Scene 2) — Metaphor (fear as a snake). Effect: Macbeth fears Banquo's prophecy; killing Banquo has not solved the problem. Grade 9: Shows that Macbeth's crimes are futile — no amount of murder can change fate or the witches' prophecy. He is trapped.</li>
<li><strong>"Blood will have blood."</strong> (Macbeth, Act 3 Scene 4) — Monosyllabic, blunt statement. Effect: A law of cosmic retribution. Grade 9: Connects to the divine order — breaking it by regicide triggers an endless chain of consequences.</li>
<li><strong>"I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er."</strong> (Macbeth, Act 3 Scene 4) — Extended metaphor (wading through blood). Effect: Macbeth has committed so many murders that turning back seems harder than continuing. Grade 9: Illustrates the psychological mechanism of corruption — after the first crime, the path forward seems easier than redemption.</li>
<li><strong>"Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more."</strong> (Macbeth, Act 5 Scene 5) — Extended metaphor (life as theatre). Effect: Complete nihilism. Grade 9: The tragedy's climax. Macbeth's ambition has not brought him satisfaction or security, only emptiness and despair.</li>
</ul>
</div>
<h3>Key Takeaways</h3>
<ul>
<li>Macbeth is a tragic hero: high-status, with a fatal flaw (ambition), leading to inevitable downfall.</li>
<li>Ambition corrupts progressively — each crime makes the next easier.</li>
<li>Macbeth chooses his path; he is not a puppet of fate. This makes his fall genuinely tragic.</li>
<li>The play argues that ambition without morality is monstrous and ultimately empty.</li>
</ul>`,
      quiz: [
        {
          id: 'mb-m2-q1',
          question:
            "What is Macbeth's hamartia (tragic flaw), and how does it lead to his downfall?",
          options: [
            'His love for Lady Macbeth causes him to kill Duncan',
            'His vaulting ambition drives him to murder the king and commit increasingly terrible crimes',
            "His belief in the witches' prophecies makes him lazy and paranoid",
            'His cowardice causes him to hire murderers instead of fighting himself',
          ],
          correct: 1,
          explanation:
            'Macbeth himself identifies "vaulting ambition" as his only motivation for killing Duncan. This unchecked ambition drives him to further crimes (murdering Banquo, massacring Macduff\'s family) until he becomes the paranoid tyrant he kills at the end.',
        },
      ],
    },
    {
      id: 'mb-m3',
      title: 'Module 3: Lady Macbeth & Gender in Power',
      duration: '100 mins',
      content: `<h2>Lady Macbeth: Shakespeare's Most Powerful Female Character</h2>
<p>Lady Macbeth begins the play as Macbeth's driving force — more ambitious, more ruthless, more committed to evil than her husband. Yet she ends the play broken, sleepwalking, destroyed by guilt.</p>
<h3>Act 1: The Ambitious Partner</h3>
<div class="quote-bank">
<ul>
<li><strong>"Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty."</strong> (Lady Macbeth, Act 1 Scene 5) — Invocation; metaphor of filling a vessel. Lady Macbeth rejects femininity to access power. She asks spirits to fill her with cruelty. Grade 9: Shakespeare is exploring a profound problem: in a patriarchal society, power is coded as masculine. To seize power, Lady Macbeth must reject her femininity. This suggests the play explores how gender restricts both men and women.</li>
<li><strong>"My hands are of your colour; but I shame / To wear a heart so white."</strong> (Lady Macbeth, Act 2 Scene 2) — Color imagery (white = cowardice, red = blood). Lady Macbeth has Duncan's blood on her hands but feels no shame. Grade 9: At this point, Lady Macbeth appears emotionally invulnerable. She believes she can commit evil without consequences. This makes her later breakdown devastating.</li>
<li><strong>"A little water clears us of this deed."</strong> (Lady Macbeth, Act 2 Scene 2) — Dismissive simplicity. Lady Macbeth minimises the murder. Grade 9: Dramatic irony. By Act 5, she is scrubbing imaginary blood, unable to wash away guilt. Shakespeare shows guilt cannot be dismissed.</li>
</ul>
</div>
<h3>Act 5: The Sleepwalking Scene — Guilt Incarnate</h3>
<div class="quote-bank">
<ul>
<li><strong>"Out, damned spot! Out, I say!"</strong> (Lady Macbeth, Act 5 Scene 1) — Repetition; apostrophe. Lady Macbeth haunted by imaginary bloodstain. Grade 9: Poetic justice. The woman who said "A little water clears us" is now unable to be cleansed.</li>
<li><strong>"What, will these hands ne'er be clean?"</strong> (Lady Macbeth, Act 5 Scene 1) — Rhetorical question; synecdoche. Grade 9: Her hands, once symbols of power, now represent guilt. She has lost everything.</li>
</ul>
</div>
<h3>Key Takeaways</h3>
<ul>
<li>Lady Macbeth is Macbeth's driving force in Acts 1-2, pushing him toward Duncan's murder.</li>
<li>She "unsexes" herself, rejecting femininity to access power.</li>
<li>Her claim that guilt can be easily dismissed is contradicted by her sleepwalking obsession.</li>
<li>Her downfall is as tragic as Macbeth's — destroyed by guilt and marginalised from power.</li>
</ul>`,
      quiz: [
        {
          id: 'mb-m3-q1',
          question: 'Why does Lady Macbeth ask the spirits to "unsex" her?',
          options: [
            'She wants to become a man so she can be king',
            'She believes that femininity (compassion, morality) will prevent her from committing murder',
            'The witches have cursed her to lose her femininity',
            'Macbeth has asked her to disguise herself as a man',
          ],
          correct: 1,
          explanation:
            'Lady Macbeth fears that her own compassion will prevent her from pushing Macbeth to murder Duncan. She asks spirits to remove feminine qualities she sees as obstacles to power.',
        },
      ],
    },
    {
      id: 'mb-m4',
      title: 'Module 4: The Witches & the Supernatural',
      duration: '90 mins',
      content: `<h2>The Witches: Fate or Temptation?</h2>
<p>The three witches are among Shakespeare's most fascinating creations. They are not human — they are supernatural beings. The play is deliberately ambiguous about whether they cause Macbeth's downfall or simply predict it.</p>
<h3>Who Are the Witches?</h3>
<div class="quote-bank">
<ul>
<li><strong>"Fair is foul, and foul is fair."</strong> (Witches, Act 1 Scene 1) — Oxymoron (contradiction). Sets the play's moral confusion. Good and evil are inverted. Grade 9: This line encapsulates the play's central moral problem. Macbeth will come to believe that murder is glorious. The witches embody this inversion of values.</li>
<li><strong>"What are these creatures? / That look not like the inhabitants of the earth?"</strong> (Banquo, Act 1 Scene 3) — Description. The witches are explicitly unnatural, not human. Grade 9: They exist outside nature and morality. This is important for understanding them as genuine supernatural beings.</li>
</ul>
</div>
<h3>The Witches' Equivocation</h3>
<p>The witches make prophecies that are technically true but misleading. "None of woman born / Shall harm Macbeth" seems to promise safety, but Macduff, "from his mother's womb / Untimely ripped" (caesarean birth), technically was not "of woman born." He defeats Macbeth. Grade 9: The witches use language ambiguously. They are not lying, but they are misleading. This raises the question: are they agents of fate, or are they simply revealing a truth that Macbeth's own ambition will realise?</p>
<h3>Key Takeaways</h3>
<ul>
<li>The witches are supernatural beings who exist outside nature and morality.</li>
<li>They speak equivocal prophecies that are technically true but misleading.</li>
<li>They are catalysts, not causes — Macbeth chooses to act on their words.</li>
<li>The play is ambiguous about fate vs. free will, reflecting Jacobean uncertainty.</li>
</ul>`,
      quiz: [
        {
          id: 'mb-m4-q1',
          question:
            'Why is the witches\' prophecy that "None of woman born / Shall harm Macbeth" deceptive?',
          options: [
            'It is a direct lie',
            'Macbeth misunderstands it because he is stupid',
            'Macduff was born via caesarean section, so technically he was not "of woman born" in the usual sense',
            'The witches never actually say this prophecy',
          ],
          correct: 2,
          explanation:
            'The witches use equivocal (double-meaning) language. Macduff was "from his mother\'s womb / Untimely ripped," meaning caesarean delivery. Technically, he was not "of woman born," so the prophecy is fulfilled in an unexpected way.',
        },
      ],
    },
    {
      id: 'mb-m5',
      title: 'Module 5: Major Themes Deep-Dive',
      duration: '110 mins',
      content: `<h2>The Architecture of Macbeth's Themes</h2>
<p>Macbeth is tightly woven where every theme reinforces every other. Ambition drives Macbeth to murder Duncan, which violates the natural and divine order, triggering supernatural chaos and psychological guilt.</p>
<h3>Theme 1: Ambition — The Motor of Evil</h3>
<p>Ambition is the engine that drives the entire tragedy. Yet the play is sophisticated: ambition is not inherently evil. In military context, it is admirable. But ambition unchecked by conscience is monstrous.</p>
<p><strong>Key insight:</strong> The play argues that ambition becomes evil when divorced from morality. Macbeth knows murdering Duncan is wrong and does it anyway. Every subsequent crime becomes easier because the psychological barrier to evil has been broken.</p>
<h3>Theme 2: Guilt — The Conscience Cannot Be Suppressed</h3>
<p>Both Macbeth and Lady Macbeth underestimate guilt's power. Lady Macbeth dismisses it: "A little water clears us of this deed." Yet both are destroyed by it.</p>
<p><strong>Key insight:</strong> Guilt is a cosmic and psychological force that cannot be rationalised away. It manifests as hallucinations, insomnia, and obsessive behaviour.</p>
<h3>Theme 3: The Supernatural — Externalising Internal Conflict</h3>
<p>Shakespeare uses the supernatural to externalise Macbeth's inner turmoil. The witches do not force him; they voice his own desires. Banquo's ghost does not bring external danger; it manifests his guilt. The floating dagger visualises his murderous intention.</p>
<h3>Theme 4: Masculinity — Gender and Power</h3>
<p>Both Macbeth and Lady Macbeth are driven by ambition, but navigate it differently because of gender. Masculinity is associated with aggression; femininity with compassion and weakness. Lady Macbeth must "unsex" herself to access power; Macbeth is shamed into murder by appeals to his manhood.</p>
<p><strong>Grade 9 insight:</strong> Shakespeare suggests that patriarchy corrupts everyone. Men are pressured to prove manhood through violence. Women are denied legitimate power and forced to manipulate or reject their nature.</p>
<h3>Theme 5: Fate vs. Free Will — The Philosophical Heart</h3>
<p>Do the witches determine Macbeth's future, or does Macbeth choose his path? The play is deliberately ambiguous. The witches predict, but Macbeth chooses to believe and act. The play suggests both fate and free will coexist — the witches predict a future that Macbeth's own ambition realises.</p>
<h3>Key Takeaways</h3>
<ul>
<li>Ambition, guilt, and the supernatural are interconnected themes.</li>
<li>Ambition unchecked by morality becomes monstrous.</li>
<li>Guilt cannot be rationalised away — it destroys those who commit evil.</li>
<li>The supernatural externalises Macbeth's internal conflict.</li>
<li>The play explores how gender shapes ambition and power.</li>
<li>Fate and free will coexist ambiguously.</li>
</ul>`,
      quiz: [
        {
          id: 'mb-m5-q1',
          question:
            'How does Shakespeare use the natural world to reflect moral disorder in Macbeth?',
          options: [
            'The weather is always bad because Scotland has a cold climate',
            'Macbeth violates the divine order by murdering the king, triggering chaos in nature (horses eating each other, darkness at noon)',
            'The supernatural beings cause storms and darkness',
            'Nature is unrelated to the moral themes of the play',
          ],
          correct: 1,
          explanation:
            "Duncan's murder is not just a crime — it is cosmic blasphemy that violates the divine order. This violation is reflected in chaos throughout nature: unnatural darkness, animals behaving chaotically. For a Jacobean audience, this was not mere poetic imagery but spiritual reality.",
        },
      ],
    },
    {
      id: 'mb-m6',
      title: 'Module 6: Language, Imagery & Techniques',
      duration: '100 mins',
      content: `<h2>How Shakespeare Uses Language to Build Macbeth's World</h2>
<p>Shakespeare's language in Macbeth is intense and deliberate. Every image carries thematic weight. Blood, darkness, sleep, masculinity — these images recur throughout, creating a web of meaning.</p>
<h3>Imagery: Blood — Guilt, Violence, and Power</h3>
<div class="quote-bank">
<ul>
<li><strong>"Will all great Neptune's ocean wash this blood / Clean from my hand?"</strong> (Macbeth, Act 2 Scene 2) — Hyperbole; metaphor. Even Neptune (god of the ocean) cannot wash away guilt. Grade 9: The blood becomes permanent, like the stain on Macbeth's conscience.</li>
<li><strong>"Blood will have blood."</strong> (Macbeth, Act 3 Scene 4) — Repetition; monosyllabic bluntness. A law of cosmic retribution. Grade 9: Connects to divine justice — the universe demands repayment for regicide.</li>
<li><strong>"Out, damned spot! Out, I say!"</strong> (Lady Macbeth, Act 5 Scene 1) — Apostrophe; repetition. Grade 9: The woman who claimed "a little water clears us" is now unable to be cleansed. Guilt has become a physical obsession.</li>
</ul>
</div>
<h3>Imagery: Darkness — Moral Corruption</h3>
<div class="quote-bank">
<ul>
<li><strong>"Stars, hide your fires; / Let not light see my black and deep desires."</strong> (Macbeth, Act 1 Scene 4) — Apostrophe; juxtaposition (stars/desires). Macbeth wants darkness to hide his murderous intentions. Grade 9: Light is goodness; darkness is evil. Macbeth recognises his desire to murder is shameful — it must be hidden.</li>
<li><strong>"Now o'er the one half-world / Nature seems dead."</strong> (Macbeth, Act 2 Scene 1) — Personification. After deciding to murder, Macbeth perceives the world as dead and dark. Grade 9: Darkness is both literal (night) and psychological (evil). His moral corruption affects his perception.</li>
</ul>
</div>
<h3>Imagery: Sleep — Peace, Innocence, and Loss</h3>
<div class="quote-bank">
<ul>
<li><strong>"Macbeth does murder sleep."</strong> (Voice, Act 2 Scene 2) — Synecdoche; direct accusation. By murdering Duncan in sleep, Macbeth destroys sleep itself. Grade 9: He will never rest. Sleep represents innocence; to lose sleep is to lose peace and conscience.</li>
</ul>
</div>
<h3>Key Takeaways</h3>
<ul>
<li>Blood imagery moves from honour to guilt to cosmic punishment.</li>
<li>Darkness represents moral corruption and evil.</li>
<li>Sleep symbolises peace and innocence, lost when Macbeth murders Duncan.</li>
<li>Manhood language is manipulated to justify evil.</li>
<li>The witches' fragmented language marks them as non-human.</li>
<li>Soliloquies reveal characters' inner psychological states.</li>
</ul>`,
      quiz: [
        {
          id: 'mb-m6-q1',
          question:
            'What does blood imagery represent in Macbeth, and how does its meaning change?',
          options: [
            'Blood always represents honour and courage',
            'Blood begins as warrior honour but becomes a symbol of guilt and irreversible evil',
            'Blood is only used in supernatural scenes',
            "Blood imagery is not important to the play's themes",
          ],
          correct: 1,
          explanation:
            'Blood imagery is central. Early in the play, Macbeth\'s blood (from battle) is honourable. After murdering Duncan, blood becomes a symbol of guilt that cannot be washed away. "Blood will have blood" expresses cosmic retribution.',
        },
      ],
    },
    {
      id: 'mb-m7',
      title: 'Module 7: Character Comparison & Development',
      duration: '100 mins',
      content: `<h2>Character Trackers: Development Across the Play</h2>
<p>Tracking character development is essential for strong exam essays. The best candidates analyse how and why characters change, and what this reveals about the play's themes.</p>
<h3>Macbeth's Transformation: From Hero to Tyrant</h3>
<p><strong>Act 1:</strong> Macbeth is celebrated as "brave Macbeth." He is ambitious but morally conflicted about murdering Duncan.</p>
<p><strong>Act 2:</strong> After murdering Duncan, he is immediately wracked with guilt. He hears a voice cry "Sleep no more!"</p>
<p><strong>Act 3:</strong> Now king, he becomes paranoid. He hires murderers to kill Banquo. Later, he orders the massacre of Macduff's wife and children.</p>
<p><strong>Act 4-5:</strong> He becomes increasingly isolated and paranoid, fighting to the death rather than surrender.</p>
<h3>Comparing Macbeth and Lady Macbeth</h3>
<p><strong>Act 1-2:</strong> Lady Macbeth is confident and in control; Macbeth is hesitant and guilty. She drives the plot; he follows.</p>
<p><strong>Act 3 onwards:</strong> The inversion reverses. Macbeth becomes the active agent, planning murders without consulting Lady Macbeth. She is marginalised. He is driven by his own paranoia and ambition.</p>
<p><strong>Psychological toll:</strong> Both are destroyed, but differently. Macbeth becomes paranoid and nihilistic. Lady Macbeth becomes obsessed with washing imaginary blood, ultimately (implied) committing suicide.</p>
<p><strong>Grade 9 insight:</strong> The play suggests no one escapes the consequences of evil. Whether you are the prime actor or reluctant participant, guilt destroys you.</p>
<h3>Banquo: The Foil to Macbeth</h3>
<p>Banquo hears the witches' prophecies alongside Macbeth but responds differently. He resists temptation. By showing that Banquo can resist, Shakespeare argues that Macbeth's fall is not determined by fate — it is the result of his choice.</p>
<h3>Key Takeaways</h3>
<ul>
<li>Macbeth transforms from conflicted warrior to paranoid tyrant.</li>
<li>Each crime makes the next crime easier, showing how evil perpetuates itself.</li>
<li>Lady Macbeth and Macbeth's states invert: she becomes marginalised; he becomes increasingly amoral.</li>
<li>Banquo is a foil to Macbeth — he resists temptation, proving Macbeth's fall is a choice.</li>
</ul>`,
      quiz: [
        {
          id: 'mb-m7-q1',
          question: "How does Macbeth's character change from Act 1 to Act 5?",
          options: [
            'He becomes more confident and happy',
            'He transforms from a conflicted warrior to a paranoid, nihilistic tyrant',
            'He becomes more noble and virtuous',
            'His character does not change significantly',
          ],
          correct: 1,
          explanation:
            'Macbeth begins as a celebrated general who recognises ambition as his flaw. After murdering Duncan, he becomes increasingly paranoid and amoral. By Act 5, he is nihilistic. The transformation shows how ambition and crime corrupt absolutely.',
        },
      ],
    },
    {
      id: 'mb-m8',
      title: 'Module 8: Exam Technique & Practice Questions',
      duration: '120 mins',
      content: `<h2>AQA GCSE English Literature Macbeth: Exam Technique</h2>
<p>The AQA GCSE English Literature exam for Macbeth is worth 30% of your final grade (96 marks total). You will have 2 hours to answer questions on all three texts. Expect 1-2 questions on Macbeth.</p>
<h3>Question Types and Mark Bands</h3>
<p><strong>Grade 9-8 (11-12 marks for 12-mark questions):</strong> Sophisticated analysis of characterisation with perceptive interpretation. Links character to themes and context. Selects specific evidence. Explores multiple interpretations.</p>
<p><strong>Grade 7-6 (9-10 marks):</strong> Clear analysis with good textual support. Links to themes. Uses appropriate terminology.</p>
<p><strong>Grade 5-4 (7-8 marks):</strong> Sound analysis with accurate quotes. Begins to link to broader meaning.</p>
<h3>Grade 9 Structure for a 12-Mark Question</h3>
<p><strong>Sample Question:</strong> "How does Shakespeare explore guilt in Macbeth?"</p>
<p><strong>Grade 9 Response Structure:</strong></p>
<p><strong>Paragraph 1: Introduction (Thesis)</strong> — Shakespeare presents guilt as a cosmic and psychological force that cannot be rationalised away. Both Macbeth and Lady Macbeth underestimate guilt, believing they can dismiss moral consequences through rationality. Yet the play demonstrates guilt is inescapable and destroys those who commit evil. Through imagery of blood, sleep, and supernatural manifestations, Shakespeare argues conscience is a law of nature that cannot be broken.</p>
<p><strong>Paragraph 2-3: Evidence from Macbeth and Lady Macbeth with analysis of technique.</strong></p>
<p><strong>Paragraph 4: Imagery and technique analysis.</strong></p>
<p><strong>Paragraph 5: Context and meaning.</strong> For a Jacobean audience, the play's exploration of guilt had theological weight. They believed in divine justice — that God punishes sin and that conscience is God's voice within us. Murdering a king (divinely appointed) is to break cosmic law. The guilt that follows is spiritual punishment.</p>
<p><strong>Paragraph 6: Conclusion (Synthesis)</strong> — Through the parallel downfalls of Macbeth and Lady Macbeth, Shakespeare demonstrates guilt is inevitable and inescapable. Those committing evil believing they can rationalise consequences are deluded. Conscience cannot be ignored. Guilt is not weakness but a fundamental feature of human consciousness.</p>
<h3>Exam Tips</h3>
<ul>
<li><strong>Plan your answer:</strong> Spend 2 minutes planning before writing. Know your key points and evidence.</li>
<li><strong>Use the text:</strong> Every major point should be supported by a quote or specific reference.</li>
<li><strong>Analyse, don't summarise:</strong> Don't just tell the story. Explain HOW Shakespeare's techniques create meaning.</li>
<li><strong>Link to themes and context:</strong> Show how character and technique link to broader themes (ambition, guilt, fate, gender, the supernatural). Mention Jacobean context where relevant.</li>
<li><strong>Explore multiple interpretations:</strong> High-level candidates explore how the text can be read in different ways.</li>
<li><strong>Use subject terminology accurately:</strong> Metaphor, imagery, soliloquy, personification, oxymoron, etc. Terminology should serve analysis.</li>
<li><strong>Write in formal, academic English:</strong> Avoid slang. Your writing should be as sophisticated as the analysis.</li>
</ul>
<h3>Common Mistakes to Avoid</h3>
<ul>
<li><strong>Mistake 1: Retelling the story.</strong> Don't write "Macbeth kills Duncan because Lady Macbeth pressures him." Instead: "Lady Macbeth manipulates Macbeth by equating hesitation with cowardice, revealing how patriarchal values weaponise masculine insecurity."</li>
<li><strong>Mistake 2: Ignoring context.</strong> Context is essential. A Jacobean audience believed in witchcraft and divine right.</li>
<li><strong>Mistake 3: Choosing weak quotes.</strong> Every quote should be significant and analysable.</li>
<li><strong>Mistake 4: Running out of time.</strong> Allocate time wisely. For a 12-mark question, aim for 15-20 minutes.</li>
<li><strong>Mistake 5: Not addressing the question.</strong> Always refer back to the question.</li>
</ul>
<h3>Key Takeaways</h3>
<ul>
<li>Understand the exam structure: 2 hours, 3 texts, 1-2 questions on Macbeth.</li>
<li>Master the essay structure: introduction, evidence-based paragraphs, analysis, interpretation, conclusion.</li>
<li>Use textual evidence to support every major point.</li>
<li>Analyse techniques, don't just identify them.</li>
<li>Link character and theme to Jacobean context.</li>
<li>Explore multiple interpretations.</li>
<li>Write in formal, academic English.</li>
<li>Manage your time — allocate based on mark value.</li>
</ul>`,
      quiz: [
        {
          id: 'mb-m8-q1',
          question:
            'What is the key difference between a Grade 9 and a Grade 5 answer on an AQA GCSE Literature question?',
          options: [
            'Grade 9 answers are longer',
            'Grade 9 answers include sophisticated analysis linking character/theme to technique and context, explore multiple interpretations, and synthesise ideas',
            'Grade 9 answers include more quotes',
            'Grade 9 answers use more complex vocabulary',
          ],
          correct: 1,
          explanation:
            "Grade 9 answers are distinguished by sophisticated interpretation, perceptive exploration of multiple meanings, strong textual support, and clear connection between technique, character, theme, and context. It's about depth and synthesis.",
        },
      ],
    },
  ],
}

export default macbethCourse
