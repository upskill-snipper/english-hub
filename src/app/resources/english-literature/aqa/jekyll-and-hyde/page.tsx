import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/aqa/jekyll-and-hyde' },
  title: "Jekyll and Hyde Study Guide - AQA English Literature GCSE",
  description:
    "Complete Jekyll and Hyde revision guide for AQA GCSE English Literature Paper 1 Section B. Key themes, 15+ quotations with analysis, Victorian context (AO3), character analysis, and sample essay plans.",
};

/* ─── Data ──────────────────────────────────────────────────── */

const examInfo = {
  paper: "Paper 1: Shakespeare and the 19th-century novel",
  section: "Section B: The 19th-century novel",
  marks: 30,
  time: "Approximately 45 minutes",
  format:
    "You will NOT be given an extract. You must answer from memory. The question will ask you to write about a theme, character, or idea across the whole novella.",
  assessmentObjectives: [
    {
      code: "AO1",
      description:
        "Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.",
      marks: "12 marks",
      tip: "Embed short quotations into your sentences and offer a personal interpretation. Use phrases like 'Stevenson presents...' or 'The reader is positioned to...'",
    },
    {
      code: "AO2",
      description:
        "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.",
      marks: "12 marks",
      tip: "Zoom in on individual words and techniques. Discuss WHY Stevenson chose specific language. Consider the novella form, narrative structure (multiple narrators, delayed revelation), and the effect on the reader.",
    },
    {
      code: "AO3",
      description:
        "Show understanding of the relationships between texts and the contexts in which they were written.",
      marks: "6 marks",
      tip: "Integrate context naturally into analysis. Link Victorian attitudes, scientific discoveries, and social expectations to the themes of the novella. Do not write separate 'context paragraphs.'",
    },
  ],
};

const chapterSummaries = [
  {
    chapter: "Chapter 1",
    title: "Story of the Door",
    summary:
      "Mr Utterson and his cousin Mr Enfield are on their regular Sunday walk. They pass a mysterious door, and Enfield tells the story of a man named Hyde who trampled a young girl and then paid compensation with a cheque signed by a respectable gentleman. Enfield describes Hyde as giving 'a strong feeling of deformity' without any specific feature being wrong. Utterson is disturbed because he knows the cheque was signed by Dr Jekyll.",
  },
  {
    chapter: "Chapter 2",
    title: "Search for Mr Hyde",
    summary:
      "Utterson reads Jekyll's will, which leaves everything to Edward Hyde. Troubled, he visits Dr Lanyon, who has fallen out with Jekyll over his 'unscientific' experiments. Utterson stakes out the door and finally meets Hyde, who is small, pale, and gives 'an impression of deformity.' Utterson fears Hyde is blackmailing Jekyll. He visits Jekyll, who insists he can be rid of Hyde whenever he chooses.",
  },
  {
    chapter: "Chapter 3",
    title: "Dr Jekyll Was Quite at Ease",
    summary:
      "Jekyll holds a dinner party. Afterwards, Utterson raises his concerns about Hyde and the will. Jekyll becomes evasive and asks Utterson to drop the subject. He insists Utterson promise to carry out the terms of the will and ensure Hyde gets 'his rights.' Jekyll's discomfort suggests he is hiding something significant.",
  },
  {
    chapter: "Chapter 4",
    title: "The Carew Murder Case",
    summary:
      "Nearly a year later, a maid witnesses Hyde brutally murder Sir Danvers Carew, a distinguished MP, beating him to death with a cane. The murder is savage and unprovoked - Hyde stamps on the body with 'ape-like fury.' Utterson identifies the broken cane as one he gave Jekyll. Police find Hyde's rooms ransacked but Hyde has vanished. Jekyll swears he is done with Hyde.",
  },
  {
    chapter: "Chapter 5",
    title: "Incident of the Letter",
    summary:
      "Utterson visits Jekyll, who looks 'deathly sick.' Jekyll shows Utterson a letter apparently from Hyde, saying he has escaped. Utterson's clerk, Mr Guest, notices the handwriting is almost identical to Jekyll's, only slanted differently. Utterson suspects Jekyll forged the letter to protect Hyde.",
  },
  {
    chapter: "Chapter 6",
    title: "Remarkable Incident of Dr Lanyon",
    summary:
      "Hyde has disappeared and Jekyll seems restored - sociable and charitable for two months. Then Jekyll suddenly withdraws again, refusing visitors. Utterson visits Lanyon and finds him on his deathbed, visibly shaken by some terrible shock. Lanyon says: 'I have had a shock... I shall never recover.' He refuses to discuss Jekyll. After Lanyon dies, Utterson receives a letter not to be opened until Jekyll's death or disappearance.",
  },
  {
    chapter: "Chapter 7",
    title: "Incident at the Window",
    summary:
      "Utterson and Enfield pass Jekyll's house and see him at an upstairs window. They exchange pleasantries, but then Jekyll's expression changes to one of 'abject terror and despair.' He slams the window shut. Both men walk away in silence, deeply disturbed. Stevenson withholds the cause of Jekyll's horror, building suspense.",
  },
  {
    chapter: "Chapter 8",
    title: "The Last Night",
    summary:
      "Jekyll's servant Poole begs Utterson for help, convinced his master has been murdered. They hear a strange voice from the laboratory - not Jekyll's. They break down the door and find Hyde's body on the floor, dead by suicide, wearing Jekyll's oversized clothes. Jekyll's confession and Lanyon's letter are found on the desk.",
  },
  {
    chapter: "Chapter 9",
    title: "Dr Lanyon's Narrative",
    summary:
      "Lanyon's letter reveals that Jekyll sent him urgent instructions to collect a drawer of chemicals from his laboratory. Hyde arrived at midnight to mix and drink the potion - and transformed into Jekyll before Lanyon's eyes. The shock of witnessing this transformation destroyed Lanyon's health and ultimately killed him. Science has overstepped its boundaries.",
  },
  {
    chapter: "Chapter 10",
    title: "Henry Jekyll's Full Statement of the Case",
    summary:
      "Jekyll's confession reveals everything. He created a potion to separate his good and evil natures, allowing him to indulge his darker desires without consequence. At first, he controlled the transformations, but gradually Hyde grew stronger and began appearing without the potion. After the murder of Carew, Jekyll tried to stop, but Hyde's hold was too powerful. The supply of a key chemical ran out, and Jekyll could no longer prevent the transformations. He writes his confession knowing Hyde will soon take over permanently.",
  },
];

const characters = [
  {
    name: "Dr Henry Jekyll",
    role: "Protagonist / Dual Nature",
    description:
      "A wealthy, respected London doctor and scientist who creates a potion to separate his good and evil natures. Jekyll represents the outward respectability of Victorian gentlemen who concealed their darker impulses. His experiment is driven by the desire to indulge sin without consequence, but ultimately his darker side consumes him.",
    keyPoints: [
      "Embodies the Victorian obsession with public reputation - he wants to sin without being seen",
      "His experiment reflects the dangerous ambition of unchecked Victorian science",
      "He describes his 'profound duplicity of life' - hypocrisy is central to his character",
      "He initially sees Hyde as a separate entity but gradually accepts Hyde is part of himself",
      "His inability to stop transforming shows that repressed desires grow more powerful, not less",
      "His 'Full Statement' shifts the novella from mystery to psychological confession",
    ],
    keyQuotes: [
      "'Man is not truly one, but truly two'",
      "'I learned to recognise the thorough and primitive duality of man'",
      "'I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse'",
      "'I stood already committed to a profound duplicity of life'",
    ],
  },
  {
    name: "Mr Edward Hyde",
    role: "Jekyll's Dark Alter Ego",
    description:
      "Hyde is the physical embodiment of Jekyll's repressed evil. He is smaller, younger, and deformed-looking because Jekyll's evil side has been suppressed and is less developed. Every character who meets Hyde feels instinctive revulsion, but none can explain exactly why. Hyde grows larger and more powerful as Jekyll gives in to temptation, symbolising how evil strengthens when indulged.",
    keyPoints: [
      "Described using animal imagery: 'ape-like fury,' 'hissing,' suggesting devolution and loss of humanity",
      "His physical deformity is never specified - Stevenson makes the reader's imagination do the work",
      "He is smaller than Jekyll because evil has been repressed and undeveloped",
      "His violence escalates: trampling a girl, then murdering Carew - evil grows bolder with indulgence",
      "He represents the id in Freudian terms (though Freud came later): pure instinct without conscience",
      "Characters feel 'a haunting sense of unexpressed deformity' - evil is sensed, not seen",
    ],
    keyQuotes: [
      "'Something troglodytic... the man seems hardly human'",
      "'Satan's signature upon a face'",
      "'ape-like fury'",
      "'the man trampled calmly over the child's body'",
    ],
  },
  {
    name: "Mr Gabriel Utterson",
    role: "Narrator / Rational Investigator",
    description:
      "A lawyer and Jekyll's loyal friend who serves as the main narrative perspective. Utterson is the embodiment of Victorian restraint: rational, loyal, discreet, and reluctant to judge. He investigates the mystery of Jekyll and Hyde but actively avoids the truth, preferring respectable explanations (blackmail, madness) to the terrifying reality.",
    keyPoints: [
      "His profession (lawyer) makes him a symbol of law, order, and rational society",
      "He is 'the last reputable acquaintance and the last good influence' in Jekyll's life",
      "He actively suppresses truth: he suspects Jekyll forged Hyde's letter but says nothing",
      "His limited perspective creates the novella's mystery - he can only see the outside of events",
      "He represents Victorian society's deliberate blindness to uncomfortable truths",
      "His restraint and discretion enable Jekyll's secrecy - respectability protects wrongdoing",
    ],
    keyQuotes: [
      "'If he be Mr Hyde... I shall be Mr Seek'",
      "'I let my brother go to the devil in his own way'",
      "'inclined to Cain's heresy... I let my brother go to the devil in his own way'",
    ],
  },
  {
    name: "Dr Hastie Lanyon",
    role: "The Rational Scientist",
    description:
      "A conventional doctor and former friend of Jekyll who represents mainstream Victorian science. Lanyon dismissed Jekyll's experiments as 'unscientific balderdash.' When he witnesses Hyde's transformation into Jekyll, the shock is so great that it kills him. Lanyon's death represents the destruction of the rational mind when confronted with truths it cannot accept.",
    keyPoints: [
      "Represents orthodox science - respects boundaries that Jekyll transgresses",
      "His death shows that some truths are too terrible for the rational mind to bear",
      "He is the only character (besides Jekyll) who knows the full truth during the novella",
      "His narrative in Chapter 9 provides the first eyewitness account of the transformation",
      "His falling-out with Jekyll mirrors the wider Victorian tension between traditional and radical science",
    ],
    keyQuotes: [
      "'I have had a shock... and I shall never recover'",
      "'unscientific balderdash'",
      "'my life is shaken to its roots'",
    ],
  },
  {
    name: "Mr Richard Enfield",
    role: "The Man About Town",
    description:
      "Utterson's cousin and walking companion who witnesses Hyde trampling a young girl. Enfield is sociable and well-connected, contrasting with Utterson's reserve. His reluctance to gossip or investigate reflects the Victorian code of gentlemanly discretion.",
    keyPoints: [
      "His account of Hyde trampling the girl opens the novella and establishes the mystery",
      "He and Utterson agree not to discuss the matter further - Victorian suppression of uncomfortable topics",
      "He represents the 'respectable' world that encounters evil but looks away",
    ],
    keyQuotes: [
      "'I never saw a man I so disliked, and yet I scarce know why'",
      "'It was like some damned Juggernaut'",
    ],
  },
  {
    name: "Poole",
    role: "Jekyll's Loyal Butler",
    description:
      "Jekyll's head servant who ultimately seeks Utterson's help when he fears his master has been murdered. Poole represents the loyal, observant servant class who see more than they are meant to but lack the power to act alone.",
    keyPoints: [
      "His loyalty and fear drive the climax of the novella (Chapter 8, 'The Last Night')",
      "He notices Hyde's voice coming from Jekyll's laboratory - the truth is hidden behind a door, as throughout the novella",
      "His willingness to break down the door shows that social propriety collapses in crisis",
    ],
    keyQuotes: [
      "'I've been afraid for about a week... and I can bear it no more'",
    ],
  },
];

const themes = [
  {
    title: "Duality of Human Nature",
    colour: "bg-red-50 border-red-200",
    analysis:
      "The central theme of the novella. Stevenson argues that every person contains both good and evil. Jekyll's experiment to separate these natures fails catastrophically - rather than purifying himself, he unleashes pure evil in Hyde while his 'good' side remains mixed. The novella suggests that duality is natural and that attempting to deny or separate it is dangerous. Victorian society's insistence on moral purity only forces people to hide their darker impulses, making those impulses more destructive.",
    keyPoints: [
      "Jekyll states 'man is not truly one, but truly two' - duality is presented as a universal human truth",
      "The experiment fails because good and evil cannot truly be separated - they are intertwined",
      "Hyde grows stronger over time, suggesting that repressed evil becomes more powerful, not less",
      "The fog-and-light descriptions of London mirror the duality theme: respectability conceals darkness",
      "Every 'respectable' character has secrets: Utterson's past, Enfield's late-night wanderings",
      "AQA focus: link to Victorian hypocrisy and the pressure to maintain a public facade",
    ],
    keyQuotes: [
      "'Man is not truly one, but truly two'",
      "'I learned to recognise the thorough and primitive duality of man'",
      "'all human beings... are commingled out of good and evil'",
    ],
  },
  {
    title: "Repression and Victorian Hypocrisy",
    colour: "bg-purple-50 border-purple-200",
    analysis:
      "Victorian society demanded rigid moral standards, particularly of middle- and upper-class men. Stevenson shows that this repression does not eliminate sinful desires but drives them underground. Jekyll's 'profound duplicity of life' is not unique to him - it is the condition of his entire social class. The novella implies that Victorian respectability is a performance, and that the pressure to appear morally pure creates the very monsters it seeks to prevent.",
    keyPoints: [
      "Jekyll's motivation is not to do evil but to do evil without being caught - reputation matters more than morality",
      "Utterson, Enfield, and Lanyon all practise discretion to the point of wilful blindness",
      "The setting of respectable London with its hidden back-streets mirrors the theme of concealment",
      "Hyde uses the back door of Jekyll's house - literally and symbolically entering through a hidden entrance",
      "Jekyll's confession reveals 'a morbid sense of shame' drove him to create Hyde, not genuine evil",
      "AQA focus: connect to the strict social codes and double standards of the Victorian era",
    ],
    keyQuotes: [
      "'I concealed my pleasures'",
      "'I stood already committed to a profound duplicity of life'",
      "'Though so profound a double-dealer, I was in no sense a hypocrite'",
    ],
  },
  {
    title: "Science and Its Limits",
    colour: "bg-indigo-50 border-indigo-200",
    analysis:
      "The novella explores the dangerous potential of science unchecked by morality. Jekyll's experiment represents the Victorian anxiety about scientific progress overstepping natural or divine boundaries. Darwin's theory of evolution (1859), new chemical discoveries, and rapid industrialisation all raised fears about where science might lead. Stevenson suggests that science without ethical restraint creates monsters - both literal and metaphorical.",
    keyPoints: [
      "Jekyll's experiment crosses the boundary between science and the supernatural",
      "Lanyon represents safe, conventional science and is destroyed when confronted by Jekyll's transgression",
      "The potion is described in terms of alchemy rather than modern chemistry, linking Jekyll to Faustian overreach",
      "Jekyll cannot replicate the original experiment because the original chemical was impure - science cannot be fully controlled",
      "The novella anticipates later works like Frankenstein in warning against 'playing God'",
      "AQA focus: link to Darwin, Victorian fears of degeneration, and the tension between religion and science",
    ],
    keyQuotes: [
      "'unscientific balderdash' (Lanyon on Jekyll's research)",
      "'I hesitated long before I put this theory to the test of practice'",
      "'I began to perceive more deeply... the trembling immateriality... of this seemingly so solid body'",
    ],
  },
  {
    title: "Secrecy and Silence",
    colour: "bg-orange-50 border-orange-200",
    analysis:
      "The novella is structured around secrets: Jekyll's secret identity, hidden doors, locked cabinets, sealed letters, and unspoken suspicions. Characters repeatedly choose silence over investigation. Utterson and Enfield agree not to discuss what they have seen. Utterson suppresses his suspicion about the forged letter. This code of silence protects reputations but enables evil. Stevenson suggests that Victorian discretion is complicity.",
    keyPoints: [
      "The narrative structure withholds the truth until the final two chapters - the reader experiences the same concealment as the characters",
      "Doors and windows are symbols of barriers between public and private: Hyde enters through the back door; Jekyll hides behind his laboratory door",
      "Letters are sealed and withheld: Lanyon's letter, Jekyll's confession - truth is delayed and controlled",
      "Utterson's discretion ('I let my brother go to the devil in his own way') enables Jekyll's secrecy",
      "The novella's form as a mystery mirrors the way Victorian society investigates surface behaviour, not inner truth",
      "AQA focus: consider how Stevenson uses the novella's structure to explore the theme of concealment",
    ],
    keyQuotes: [
      "'I let my brother go to the devil in his own way'",
      "'I make it a rule of mine: the more it looks like Queer Street, the less I ask'",
      "'If I do not ask you the name of the other party, it is because I know it already'",
    ],
  },
  {
    title: "Violence and Evil",
    colour: "bg-green-50 border-green-200",
    analysis:
      "Hyde's violence escalates through the novella: from trampling a child to beating Sir Danvers Carew to death. This escalation suggests that evil, once indulged, cannot be contained. Hyde's violence is gratuitous and pleasurable to him, representing pure malice without conscience. Stevenson presents evil not as an external force but as something within every person, waiting to be unleashed.",
    keyPoints: [
      "The trampling of the girl is callous and casual - evil begins with indifference to others' suffering",
      "The Carew murder is described with savage animal imagery: 'ape-like fury,' 'bones audibly shattered'",
      "Hyde's violence is specifically described as pleasurable: 'a gust of delight' - this is Stevenson's most disturbing claim about human nature",
      "The violence is always committed at night, in hidden or empty spaces - evil thrives in darkness and secrecy",
      "Hyde's victims are vulnerable (a child, an elderly man) - evil preys on the weak",
      "AQA focus: analyse how Stevenson uses escalating violence to convey his message about human nature",
    ],
    keyQuotes: [
      "'the man trampled calmly over the child's body'",
      "'with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows'",
      "'a gust of delight'",
      "'bones were audibly shattered'",
    ],
  },
  {
    title: "Reputation and Social Class",
    colour: "bg-teal-50 border-teal-200",
    analysis:
      "In Victorian society, reputation was everything, especially for professional gentlemen like Jekyll, Utterson, and Lanyon. The novella shows how the obsession with respectability creates a culture of concealment. Jekyll does not create Hyde because he is unusually evil, but because he cannot bear to damage his reputation. The respectable setting of London's West End - with its hidden back-streets and secret doors - symbolises a society built on surfaces.",
    keyPoints: [
      "Jekyll's entire experiment is motivated by protecting his reputation: 'I concealed my pleasures'",
      "Hyde pays off witnesses with money - reputation can literally be bought in this society",
      "The gentlemen's code of discretion prevents investigation and enables wrongdoing",
      "Jekyll's house has a respectable front and a sinister rear entrance - architectural symbolism of duality",
      "Carew's murder threatens to bring scandal to Jekyll's door - the real fear is exposure, not guilt",
      "AQA focus: link to rigid Victorian class structure and the pressure on 'respectable' men to conform",
    ],
    keyQuotes: [
      "'I concealed my pleasures'",
      "'I was the chief of sinners, I was also the chief of sufferers'",
      "'a certain gaiety of disposition... such as I found it hard to reconcile with a wear and austere life'",
    ],
  },
];

const keyQuotations = [
  {
    quote: "Man is not truly one, but truly two",
    speaker: "Jekyll (Chapter 10)",
    analysis:
      "The novella's central thesis. Jekyll presents duality as a universal human condition, not a personal failing. The declarative sentence has the authority of a scientific discovery. Stevenson suggests all people contain good and evil. The word 'truly' appears twice, emphasising that this is a deeper truth than Victorian society wants to acknowledge.",
  },
  {
    quote:
      "I learned to recognise the thorough and primitive duality of man",
    speaker: "Jekyll (Chapter 10)",
    analysis:
      "'Primitive' links human duality to something ancient and pre-civilised, connecting to Victorian anxieties about evolution and degeneration. 'Thorough' suggests duality permeates every aspect of human nature - it cannot be removed. 'Learned to recognise' implies this truth was always there but suppressed.",
  },
  {
    quote:
      "I stood already committed to a profound duplicity of life",
    speaker: "Jekyll (Chapter 10)",
    analysis:
      "Jekyll admits he was living a double life before creating Hyde. 'Profound' suggests this duplicity runs deep. 'Already committed' implies entrapment - he is caught between his public reputation and private desires. Stevenson suggests that Victorian society forces respectable men into hypocrisy.",
  },
  {
    quote: "I concealed my pleasures",
    speaker: "Jekyll (Chapter 10)",
    analysis:
      "A deceptively simple confession that reveals the core of Victorian hypocrisy. Jekyll's 'pleasures' are never specified - Stevenson leaves them to the reader's imagination, making the statement universal. The act of concealment, not the pleasures themselves, is what leads to disaster. Repression creates Hyde.",
  },
  {
    quote:
      "I never saw a man I so disliked, and yet I scarce know why",
    speaker: "Enfield (Chapter 1)",
    analysis:
      "Hyde provokes instinctive, irrational revulsion in everyone who meets him. The contradiction ('disliked... scarce know why') suggests that evil is felt rather than understood. Stevenson creates horror through vagueness - the inability to describe Hyde's wrongness is more unsettling than any specific deformity. Language fails in the presence of pure evil.",
  },
  {
    quote:
      "Something troglodytic... the man seems hardly human",
    speaker: "Utterson (Chapter 2)",
    analysis:
      "'Troglodytic' means cave-dweller, linking Hyde to evolutionary regression. Stevenson draws on Darwin's theory to suggest that evil represents a devolution to a more primitive state. 'Hardly human' places Hyde at the boundary between human and animal, civilised and savage - a terrifying idea for Victorians anxious about their place in the natural order.",
  },
  {
    quote: "Satan's signature upon a face",
    speaker: "Utterson (Chapter 2)",
    analysis:
      "Utterson uses religious language to describe Hyde's evil. 'Satan's signature' implies Hyde is marked by the devil, connecting to the idea that evil has a physical, visible form. This reflects the Victorian pseudoscience of physiognomy - the belief that moral character could be read from facial features. Stevenson both uses and questions this idea.",
  },
  {
    quote: "If he be Mr Hyde... I shall be Mr Seek",
    speaker: "Utterson (Chapter 2)",
    analysis:
      "A rare moment of wordplay from the restrained Utterson. The pun on 'hide/seek' captures the novella's structure: truth is hidden and must be sought. It also foreshadows the detective-story elements of the plot. But ironically, Utterson seeks answers yet repeatedly turns away from uncomfortable truths.",
  },
  {
    quote:
      "the man trampled calmly over the child's body",
    speaker: "Enfield (Chapter 1)",
    analysis:
      "The juxtaposition of 'trampled' and 'calmly' is deeply disturbing. Violence combined with indifference suggests a complete absence of conscience. 'Calmly' is the key word - Hyde does not lose control; he simply does not care. The child victim emphasises innocence being crushed by evil. This is the reader's first encounter with Hyde's nature.",
  },
  {
    quote:
      "with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows",
    speaker: "Narrator (Chapter 4)",
    analysis:
      "'Ape-like' connects Hyde to evolutionary degeneration - he is human reverting to animal. The plosive sounds in 'trampling' and 'hailing down' create a violent, percussive rhythm. 'Storm of blows' uses pathetic fallacy to present Hyde's violence as a force of nature - unstoppable and inhuman. The escalation from trampling a girl to murdering a man shows evil intensifying.",
  },
  {
    quote: "I have had a shock... and I shall never recover",
    speaker: "Lanyon (Chapter 6)",
    analysis:
      "Lanyon represents conventional, rational science. His destruction symbolises the failure of reason to contain or explain the irrational. 'Never recover' is both literal (he dies) and philosophical - once you see the truth about human nature, you cannot unsee it. The ellipsis mirrors his inability to articulate what he has witnessed.",
  },
  {
    quote:
      "all human beings... are commingled out of good and evil",
    speaker: "Jekyll (Chapter 10)",
    analysis:
      "'Commingled' means mixed together inseparably. This is Jekyll's mature realisation: good and evil cannot be separated because they are fundamentally intertwined. This directly contradicts his earlier hope that they could be divided. Stevenson's message is that accepting duality is healthier than trying to eliminate it.",
  },
  {
    quote:
      "I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse",
    speaker: "Jekyll (Chapter 10)",
    analysis:
      "The repetition of 'slowly' conveys the gradual, creeping nature of moral deterioration. 'Losing hold' suggests control slipping away. 'Incorporated' literally means 'made into one body' - Hyde is absorbing Jekyll. The comparative 'better' and 'worse' maintain duality even as the two selves merge. This reflects Stevenson's warning that indulging evil makes it dominant.",
  },
  {
    quote: "It was like some damned Juggernaut",
    speaker: "Enfield (Chapter 1)",
    analysis:
      "A Juggernaut was a Hindu idol under whose wheels devotees were said to throw themselves. The simile presents Hyde as an unstoppable, crushing force. 'Damned' carries both casual and religious meaning - Hyde is literally hellish. The exotic reference also reflects Victorian Orientalism and fear of the 'uncivilised.'",
  },
  {
    quote:
      "a haunting sense of unexpressed deformity",
    speaker: "Narrator describing responses to Hyde",
    analysis:
      "'Unexpressed' is crucial - Hyde's evil cannot be put into words. Multiple characters try and fail to describe what is wrong with him. This 'deformity' is moral, not physical, yet it registers as physical. Stevenson suggests that evil is a presence felt instinctively, beyond rational description. The adjective 'haunting' adds a supernatural quality.",
  },
  {
    quote:
      "I bring the life of that unhappy Henry Jekyll to an end",
    speaker: "Jekyll (Chapter 10)",
    analysis:
      "The final line of Jekyll's confession. Speaking of himself in the third person signals his complete dissociation from his own identity. 'Unhappy' is an understatement that reveals the depth of his suffering. The word 'end' is final and absolute - there is no redemption. Stevenson denies his protagonist any comfort or salvation.",
  },
];

const contextPoints = [
  {
    title: "Victorian Society and Respectability",
    detail:
      "Victorian Britain (1837-1901) placed enormous value on moral respectability, especially for professional middle-class men. Public reputation could make or break a career. This created intense pressure to conceal any behaviour that might be considered immoral - drinking, gambling, sexual impropriety. Stevenson's novella exposes this hypocrisy: Jekyll is not unusually evil; he simply cannot bear to be seen as anything less than perfectly respectable.",
  },
  {
    title: "Charles Darwin and Evolution",
    detail:
      "Darwin's 'On the Origin of Species' (1859) revolutionised thinking about human nature. The idea that humans evolved from animals was deeply unsettling to Victorians who believed humans were created in God's image. Hyde's 'ape-like' behaviour and 'troglodytic' appearance reflect Victorian fears of evolutionary regression (atavism) - the idea that humans could devolve back to a more primitive state. Stevenson taps into this anxiety throughout the novella.",
  },
  {
    title: "Sigmund Freud and the Unconscious Mind",
    detail:
      "Although Freud's major works came after the novella (1886), Stevenson anticipates psychoanalytic ideas. Jekyll's attempt to separate his conscious, moral self from his unconscious, instinctual desires mirrors Freud's later model of the ego, superego, and id. Hyde can be read as the id unleashed - pure instinct without moral restraint. The novella suggests that the unconscious mind is more powerful than reason.",
  },
  {
    title: "Victorian London and Urban Gothic",
    detail:
      "Stevenson sets the novella in London, with its stark contrasts between wealthy, respectable streets and dark, dangerous back-alleys. This geography mirrors the novella's themes: the front of Jekyll's house is grand and respectable; the back entrance (Hyde's door) is sinister and neglected. The fog that frequently obscures London in the novella symbolises moral confusion and the difficulty of seeing the truth.",
  },
  {
    title: "Science vs Religion",
    detail:
      "The Victorian era saw increasing tension between scientific progress and traditional religious belief. Jekyll's experiment represents science transgressing moral and divine boundaries. Lanyon, the conventional scientist, is destroyed by what he sees. The novella can be read as a warning against science without ethics - a 'Faustian bargain' where Jekyll trades his soul for forbidden knowledge. This resonated with Victorian anxieties about where unrestrained scientific progress might lead.",
  },
  {
    title: "Robert Louis Stevenson's Context",
    detail:
      "Stevenson grew up in Edinburgh, a city with a dramatic split between its respectable New Town and its dark, impoverished Old Town. He was also aware of the real-life case of Deacon Brodie - a respectable Edinburgh councillor by day and a burglar by night. These influences shaped the novella's exploration of duality. Stevenson reportedly conceived the story in a nightmare, which itself mirrors the idea of the unconscious mind revealing hidden truths.",
  },
];

const essayQuestions = [
  {
    question:
      "How does Stevenson present the theme of duality in 'The Strange Case of Dr Jekyll and Mr Hyde'?",
    plan: [
      "Introduction: Stevenson presents duality as a universal human condition, using Jekyll and Hyde to argue that all people contain both good and evil. The novella critiques Victorian society's refusal to acknowledge this truth.",
      "Paragraph 1 - Jekyll's confession: 'Man is not truly one, but truly two.' Analyse the declarative sentence as a scientific discovery. 'Truly' repeated for emphasis. Link to the Victorian pressure to present a single, respectable identity. Jekyll's 'profound duplicity of life' shows duality is forced by society.",
      "Paragraph 2 - Hyde's appearance: Characters describe 'a haunting sense of unexpressed deformity' - evil cannot be articulated but is instinctively felt. 'Troglodytic' and 'ape-like' link to Darwin and fears of evolutionary regression. Hyde's physical smallness reflects the repressed, underdeveloped nature of evil.",
      "Paragraph 3 - The setting as duality: Jekyll's house has a respectable front and a sinister back entrance. London's fog and darkness obscure truth. The structure of the novella itself conceals the truth until the final chapters - the reader experiences the same deception as the characters.",
      "Paragraph 4 - The failure of separation: 'All human beings are commingled out of good and evil.' Jekyll's experiment fails because duality cannot be resolved by division. Hyde grows stronger ('I was slowly losing hold of my original and better self'). Stevenson's message: repression strengthens the very thing it tries to eliminate.",
      "Conclusion: Stevenson warns that the Victorian obsession with respectability creates monsters. True moral health requires acknowledging duality, not denying it. The novella remains relevant because the tension between public identity and private self is universal.",
    ],
  },
  {
    question:
      "How does Stevenson present Hyde as a frightening outsider?",
    plan: [
      "Introduction: Stevenson presents Hyde as terrifying precisely because he cannot be described or categorised. He exists outside the boundaries of Victorian social norms, scientific understanding, and even language itself.",
      "Paragraph 1 - Physical description through vagueness: 'I never saw a man I so disliked, and yet I scarce know why.' Multiple characters fail to describe Hyde - their language breaks down. 'Unexpressed deformity' creates horror through absence. Stevenson makes the reader's imagination do the work, which is more frightening than any specific description.",
      "Paragraph 2 - Animal and primitive imagery: 'Ape-like fury,' 'troglodytic,' 'hardly human.' Link to Darwin and Victorian fears of degeneration. Hyde represents regression to a pre-civilised state. He threatens the Victorian belief in human progress and moral evolution. He is frightening because he suggests civilisation is a thin veneer.",
      "Paragraph 3 - Escalating violence: From trampling 'calmly' over a child to murdering Carew with 'a storm of blows.' The adverb 'calmly' is the most disturbing word - it shows absence of conscience, not loss of control. Hyde's violence is pleasurable ('a gust of delight'), suggesting evil is natural, not aberrant.",
      "Paragraph 4 - Social outsider: Hyde has no family, no history, no social connections. He cannot be placed within Victorian society's rigid categories. His existence threatens the social order itself. 'Satan's signature upon a face' - religious language is the only framework that can contain him, and even that fails.",
      "Conclusion: Hyde is frightening because he reveals an uncomfortable truth: evil is not external but internal. He is not a stranger but a part of Jekyll - and, by extension, a part of every respectable Victorian gentleman. The real horror is recognition.",
    ],
  },
  {
    question:
      "How does Stevenson explore the importance of reputation in the novella?",
    plan: [
      "Introduction: Stevenson presents reputation as the driving force behind Jekyll's experiment and the code of silence that enables it. The novella argues that Victorian society's obsession with respectability is both hypocritical and dangerous.",
      "Paragraph 1 - Jekyll's motivation: 'I concealed my pleasures' - the unspecified 'pleasures' show that concealment matters more than the act itself. Jekyll creates Hyde not to be evil but to protect his reputation while being evil. His 'morbid sense of shame' is a product of society's impossible standards.",
      "Paragraph 2 - The gentleman's code: Utterson and Enfield agree not to discuss what they have seen. Utterson 'let[s] my brother go to the devil in his own way.' Discretion is presented as loyalty but actually enables wrongdoing. Stevenson shows that the Victorian code of silence among gentlemen protects criminals.",
      "Paragraph 3 - Physical symbols: Jekyll's house has a grand front and a neglected back entrance. Hyde uses the back door. The architecture of Victorian London mirrors the architecture of Victorian identity - a respectable facade concealing squalor. Fog obscures both streets and truth.",
      "Paragraph 4 - The cost of reputation: Jekyll becomes trapped: 'I was the chief of sinners, I was also the chief of sufferers.' Lanyon dies rather than live with knowledge that would destroy his worldview. Reputation does not just shape behaviour - it kills those who cannot maintain the pretence. The novella's structure (concealment until the final chapters) forces the reader to experience how reputation controls information.",
      "Conclusion: Stevenson suggests that the Victorian cult of respectability does not prevent sin but simply hides it. The novella's enduring power lies in its message that reputation is a mask, and that the pressure to wear it creates the very evils society claims to abhor.",
    ],
  },
  {
    question:
      "How does Stevenson use the character of Jekyll to explore ideas about science and its consequences?",
    plan: [
      "Introduction: Through Jekyll, Stevenson presents science as a powerful but dangerous force that, without moral restraint, leads to catastrophe. Jekyll's experiment is a Victorian Faustian bargain - trading ethics for knowledge.",
      "Paragraph 1 - Jekyll as transgressive scientist: 'I hesitated long before I put this theory to the test of practice.' The hesitation shows Jekyll knows he is crossing a boundary. His experiment blends science with the supernatural - the potion changes the soul, not just the body. Stevenson questions whether science should investigate everything it can.",
      "Paragraph 2 - Lanyon as foil: Lanyon calls Jekyll's work 'unscientific balderdash' and represents conventional, safe science. His death when he witnesses the transformation shows that transgressive knowledge destroys. The contrast between Lanyon and Jekyll mirrors the wider Victorian debate about the limits of scientific inquiry.",
      "Paragraph 3 - Loss of control: Jekyll cannot replicate the original experiment because the first chemical was impure. This is Stevenson's crucial point: science cannot be fully controlled. The transformation begins happening without the potion ('I was slowly losing hold'). Once Jekyll crosses the boundary, he cannot go back.",
      "Paragraph 4 - Darwin and degeneration: Hyde's 'ape-like' appearance links Jekyll's experiment to evolutionary anxieties. If humans evolved from animals, science might reveal the animal still within. Jekyll's experiment literalises this fear. Context: link to Victorian debates about evolution, vivisection, and the ethics of scientific progress.",
      "Conclusion: Stevenson does not condemn science itself but science without conscience. Jekyll's tragedy is that his brilliant mind is unaccompanied by moral wisdom. The novella anticipates modern anxieties about genetic engineering, AI, and other technologies that outpace ethical frameworks.",
    ],
  },
];

/* ─── Component ──────────────────────────────────────────────── */

export default function JekyllAndHydePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-200">
            AQA English Literature &middot; Paper 1 Section B
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Strange Case of Dr Jekyll and Mr Hyde &mdash; Complete
            Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Robert Louis Stevenson &middot; Published 1886 &middot; Gothic
            Novella
          </p>
        </div>
      </section>

      {/* Exam format banner */}
      <section className="bg-amber-50 border-b border-amber-200 px-4 py-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-lg font-bold text-amber-900">
            AQA Exam Format: {examInfo.paper}
          </h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-card p-4 border border-amber-200">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Section &amp; Marks
              </p>
              <p className="mt-1 text-sm font-bold text-foreground">
                {examInfo.section}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {examInfo.marks} marks &middot; {examInfo.time}
              </p>
            </div>
            <div className="rounded-lg bg-card p-4 border border-amber-200 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Key Difference
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {examInfo.format}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
              Assessment Objectives
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {examInfo.assessmentObjectives.map((ao) => (
                <div
                  key={ao.code}
                  className="rounded-lg bg-card p-4 border border-amber-200"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-primary">
                      {ao.code}
                    </span>
                    <span className="text-xs font-medium text-amber-700">
                      {ao.marks}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {ao.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    Tip: {ao.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <nav className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border px-4 py-3 overflow-x-auto">
        <div className="mx-auto flex max-w-5xl gap-2 text-xs font-medium sm:text-sm sm:gap-4 whitespace-nowrap">
          {[
            ["#plot", "Plot"],
            ["#characters", "Characters"],
            ["#themes", "Themes"],
            ["#quotations", "Quotations"],
            ["#context", "Context"],
            ["#essays", "Essay Planning"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-gray-300 px-3 py-1 text-muted-foreground transition hover:bg-primary hover:text-white hover:border-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Plot Summary ─────────────────────────────────────────── */}
      <section id="plot" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Plot Summary: Chapter by Chapter
        </h2>
        <p className="mt-2 text-muted-foreground">
          The novella is structured as a mystery, with the truth about
          Jekyll and Hyde concealed until the final two chapters.
          Stevenson uses multiple narrators and delayed revelation to
          mirror the theme of secrecy.
        </p>

        <div className="mt-8 space-y-4">
          {chapterSummaries.map((ch) => (
            <div
              key={ch.chapter}
              className="rounded-lg border border-border p-4"
            >
              <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                {ch.chapter}
              </p>
              <h3 className="mt-1 text-sm font-bold text-primary">
                {ch.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {ch.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Characters ───────────────────────────────────────────── */}
      <section id="characters" className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Character Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Understanding characters as constructs - Stevenson made deliberate
            choices about how to present each character to convey meaning.
          </p>

          <div className="mt-8 space-y-8">
            {characters.map((char) => (
              <div
                key={char.name}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {char.name}
                  </h3>
                  <span className="text-sm text-accent font-medium">
                    {char.role}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Points for Analysis
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {char.keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Quotations
                  </h4>
                  <div className="mt-2 space-y-1">
                    {char.keyQuotes.map((q) => (
                      <p
                        key={q}
                        className="text-sm italic text-primary-700 bg-primary-50 rounded px-3 py-1.5"
                      >
                        {q}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Themes ───────────────────────────────────────────────── */}
      <section id="themes" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Key Themes (AQA Focus)
        </h2>
        <p className="mt-2 text-muted-foreground">
          Themes are the big ideas Stevenson explores through plot, characters,
          and language. AQA questions will always focus on one of these themes.
        </p>

        <div className="mt-8 space-y-8">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className={`rounded-xl border p-6 ${theme.colour}`}
            >
              <h3 className="text-xl font-bold text-foreground">
                {theme.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {theme.analysis}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Points
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {theme.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Quotations
                </h4>
                <div className="mt-2 space-y-1">
                  {theme.keyQuotes.map((q) => (
                    <p
                      key={q}
                      className="text-sm italic text-muted-foreground bg-card/60 rounded px-3 py-1.5"
                    >
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Key Quotations ───────────────────────────────────────── */}
      <section id="quotations" className="bg-primary-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Key Quotations with Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Learn these quotations and their analysis. In the exam (no extract
            provided), you must quote from memory - embed short phrases rather
            than long passages.
          </p>

          <div className="mt-8 space-y-4">
            {keyQuotations.map((q, i) => (
              <div
                key={i}
                className="rounded-xl bg-card p-5 shadow-md border border-border"
              >
                <p className="text-base font-semibold italic text-primary">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-1 text-xs text-accent font-medium">
                  {q.speaker}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context ──────────────────────────────────────────────── */}
      <section id="context" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Victorian Context (AO3)
        </h2>
        <p className="mt-2 text-muted-foreground">
          Context is worth 6 marks. Integrate it into your analysis rather than
          writing separate &quot;context paragraphs.&quot; The best responses
          use context to deepen their interpretation of language and themes.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {contextPoints.map((ctx) => (
            <div
              key={ctx.title}
              className="rounded-xl border border-border p-5"
            >
              <h3 className="font-bold text-primary">{ctx.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {ctx.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Essay Planning ───────────────────────────────────────── */}
      <section id="essays" className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Essay Planning: Common Questions
          </h2>
          <p className="mt-2 text-muted-foreground">
            Practise planning essays in 5 minutes. Remember: no extract is
            provided for this question, so you must refer to the whole novella
            from memory. These are the most commonly examined topics.
          </p>

          <div className="mt-8 space-y-6">
            {essayQuestions.map((eq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="font-bold text-foreground">
                  Q: {eq.question}
                </h3>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Suggested Paragraph Plan (30 marks)
                  </p>
                  <ol className="mt-3 space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                    {eq.plan.map((p, j) => (
                      <li key={j} className="leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <Link
          href="/resources/english-literature/aqa"
          className="text-sm font-medium text-accent hover:text-accent-600 transition"
        >
          &larr; Back to AQA English Literature
        </Link>
      </section>

    </>
  );
}
