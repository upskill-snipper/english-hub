import type { FlashcardDeck } from './flashcard-data';

export const poetryFlashcardDecks: FlashcardDeck[] = [
  // ─── POWER & CONFLICT POETRY ───────────────────────────────────────
  {
    id: 'aqa-power-conflict-quotes',
    title: 'AQA Power & Conflict Poetry — Key Quotes',
    description: '30 key quotes from the 15 Power & Conflict poems (2 per poem)',
    category: 'Poetry',
    board: 'AQA',
    cards: [
      // 1. Ozymandias — Percy Bysshe Shelley
      {
        id: 'pc-1',
        front: '"King of Kings" — Ozymandias',
        back: 'Poet: Percy Bysshe Shelley\n\nTechnique: Allusion / ironic title\n\nMeaning: Ozymandias gave himself a grandiose title, yet his empire is now dust. The title is ironic because nothing of his power remains.\n\nTheme: The transience of power; pride and hubris.\n\nComparison: Compare with "My Last Duchess" — both speakers assert power, but Shelley shows power fading while Browning shows it being abused.',
      },
      {
        id: 'pc-2',
        front: '"Look on my Works… and despair!" — Ozymandias',
        back: 'Poet: Percy Bysshe Shelley\n\nTechnique: Dramatic irony / imperative\n\nMeaning: The command was meant to intimidate rivals, but now the "Works" are gone. The reader despairs at the futility of power, not its greatness.\n\nTheme: Power of nature over human power; impermanence.\n\nComparison: Compare with "Storm on the Island" — both show nature overpowering human constructs.',
      },
      // 2. London — William Blake
      {
        id: 'pc-3',
        front: '"mind-forg\'d manacles" — London',
        back: 'Poet: William Blake\n\nTechnique: Metaphor\n\nMeaning: People are mentally imprisoned — their suffering is not just physical but psychological, created by institutions and social conditioning.\n\nTheme: Power of institutions; oppression; loss of freedom.\n\nComparison: Compare with "Tissue" — both explore invisible systems that control people.',
      },
      {
        id: 'pc-4',
        front: '"Marks of weakness, marks of woe" — London',
        back: 'Poet: William Blake\n\nTechnique: Repetition / emotive language\n\nMeaning: Every person Blake sees bears visible signs of suffering. "Marks" suggests branding — people are physically stamped by poverty and oppression.\n\nTheme: Suffering caused by power; social inequality.\n\nComparison: Compare with "The Emigrée" — both present a city, but Blake sees corruption while the speaker in "The Emigrée" clings to an idealised memory.',
      },
      // 3. The Prelude (extract) — William Wordsworth
      {
        id: 'pc-5',
        front: '"a huge peak, black and huge" — The Prelude',
        back: 'Poet: William Wordsworth\n\nTechnique: Repetition / personification\n\nMeaning: The mountain appears alive and threatening, shattering the boy\'s confidence. The repetition of "huge" conveys overwhelming, terrifying scale.\n\nTheme: Power of nature; sublime; humility.\n\nComparison: Compare with "Storm on the Island" — both present nature as a powerful, intimidating force.',
      },
      {
        id: 'pc-6',
        front: '"troubled pleasure" — The Prelude',
        back: 'Poet: William Wordsworth\n\nTechnique: Oxymoron\n\nMeaning: The boy feels both excitement and guilt about stealing the boat. The conflicting emotions foreshadow nature\'s punishment of his arrogance.\n\nTheme: Power of nature over the individual; guilt.\n\nComparison: Compare with "Bayonet Charge" — both depict a sudden shift from confidence to fear.',
      },
      // 4. My Last Duchess — Robert Browning
      {
        id: 'pc-7',
        front: '"I gave commands; Then all smiles stopped" — My Last Duchess',
        back: 'Poet: Robert Browning\n\nTechnique: Euphemism / dramatic monologue\n\nMeaning: The Duke casually implies he had his wife killed. The chilling understatement reveals his controlling, possessive nature.\n\nTheme: Abuse of power; control; jealousy.\n\nComparison: Compare with "Ozymandias" — both feature powerful men who demand total control, but Browning\'s Duke still holds power while Ozymandias has lost his.',
      },
      {
        id: 'pc-8',
        front: '"That\'s my last Duchess painted on the wall" — My Last Duchess',
        back: 'Poet: Robert Browning\n\nTechnique: Possessive pronoun / dramatic monologue\n\nMeaning: "My" shows ownership — the Duke treats his wife as a possession. She is reduced to an object on his wall, controlled even in death.\n\nTheme: Patriarchal power; objectification.\n\nComparison: Compare with "Checking Out Me History" — both explore how powerful figures control narratives about others.',
      },
      // 5. Charge of the Light Brigade — Alfred Lord Tennyson
      {
        id: 'pc-9',
        front: '"Into the valley of Death" — Charge of the Light Brigade',
        back: 'Poet: Alfred Lord Tennyson\n\nTechnique: Biblical allusion / metaphor\n\nMeaning: Alludes to Psalm 23 ("the valley of the shadow of death") but here there is no divine protection — only certain death. Capitalising "Death" personifies it.\n\nTheme: Honour in conflict; futility of war.\n\nComparison: Compare with "Bayonet Charge" — both depict soldiers advancing towards death, but Tennyson glorifies it while Hughes questions it.',
      },
      {
        id: 'pc-10',
        front: '"Theirs not to reason why" — Charge of the Light Brigade',
        back: 'Poet: Alfred Lord Tennyson\n\nTechnique: Declarative / rhythm\n\nMeaning: The soldiers had no choice but to obey, even knowing the order was a mistake. This highlights the rigid hierarchy of military power.\n\nTheme: Duty; obedience; power of authority.\n\nComparison: Compare with "Remains" — Armitage\'s soldier also follows orders but is haunted by the consequences, unlike Tennyson\'s glorified soldiers.',
      },
      // 6. Exposure — Wilfred Owen
      {
        id: 'pc-11',
        front: '"merciless iced east winds that knive us" — Exposure',
        back: 'Poet: Wilfred Owen\n\nTechnique: Personification / verb "knive"\n\nMeaning: The weather is the real enemy, attacking soldiers like a blade. Owen turns "knife" into a verb to make the wind\'s assault visceral and violent.\n\nTheme: Power of nature; suffering in war; futility.\n\nComparison: Compare with "Storm on the Island" — both personify nature as an attacker, but Owen\'s soldiers are actually dying.',
      },
      {
        id: 'pc-12',
        front: '"But nothing happens" — Exposure',
        back: 'Poet: Wilfred Owen\n\nTechnique: Refrain / anticlimax\n\nMeaning: Repeated at the end of stanzas, this phrase captures the agonising boredom and futility of trench warfare — soldiers suffer and die without achieving anything.\n\nTheme: Futility of war; suffering without purpose.\n\nComparison: Compare with "Bayonet Charge" — Hughes shows frantic action while Owen shows agonising stillness, but both convey war\'s pointlessness.',
      },
      // 7. Storm on the Island — Seamus Heaney
      {
        id: 'pc-13',
        front: '"spits like a tame cat turned savage" — Storm on the Island',
        back: 'Poet: Seamus Heaney\n\nTechnique: Simile / semantic shift\n\nMeaning: The familiar becomes threatening — what was "tame" turns "savage." This mirrors how nature can suddenly become dangerous and uncontrollable.\n\nTheme: Power of nature; fear; vulnerability.\n\nComparison: Compare with "The Prelude" — both show nature transforming from something manageable into something terrifying.',
      },
      {
        id: 'pc-14',
        front: '"It is a huge nothing that we fear" — Storm on the Island',
        back: 'Poet: Seamus Heaney\n\nTechnique: Paradox / oxymoron\n\nMeaning: The storm is invisible — wind and air are "nothing," yet they are devastating. Fear of the unseen is the most powerful fear.\n\nTheme: Fear; power of nature; the unknown.\n\nComparison: Compare with "Exposure" — both present an invisible, atmospheric enemy rather than a human one.',
      },
      // 8. Bayonet Charge — Ted Hughes
      {
        id: 'pc-15',
        front: '"raw-seamed hot khaki" — Bayonet Charge',
        back: 'Poet: Ted Hughes\n\nTechnique: Sensory imagery / adjective cluster\n\nMeaning: The rough, uncomfortable uniform is felt on the soldier\'s skin. The physical discomfort strips away any romantic notion of war, grounding it in bodily reality.\n\nTheme: Reality of conflict; individual suffering.\n\nComparison: Compare with "Charge of the Light Brigade" — Tennyson glorifies the charge while Hughes focuses on the painful, terrifying physical experience.',
      },
      {
        id: 'pc-16',
        front: '"King, honour, human dignity, etcetera" — Bayonet Charge',
        back: 'Poet: Ted Hughes\n\nTechnique: Bathos / list\n\nMeaning: "Etcetera" dismisses the grand ideals that justify war, reducing them to meaningless filler. In the moment of battle, patriotism becomes irrelevant.\n\nTheme: Futility of war; questioning authority.\n\nComparison: Compare with "Charge of the Light Brigade" — Tennyson celebrates duty while Hughes mocks it as hollow.',
      },
      // 9. Remains — Simon Armitage
      {
        id: 'pc-17',
        front: '"his blood-Loss shadow stays on the street" — Remains',
        back: 'Poet: Simon Armitage\n\nTechnique: Metaphor / haunting imagery\n\nMeaning: The dead man\'s bloodstain becomes a permanent mark, symbolising the guilt that will never leave the soldier. The memory is literally stained into the world.\n\nTheme: Guilt; psychological effects of conflict.\n\nComparison: Compare with "War Photographer" — both explore how images of death haunt people long after conflict ends.',
      },
      {
        id: 'pc-18',
        front: '"probably armed, possibly not" — Remains',
        back: 'Poet: Simon Armitage\n\nTechnique: Colloquial hedging / ambiguity\n\nMeaning: The uncertainty — "probably," "possibly" — is devastating. The soldier may have killed an innocent man. This doubt is the source of his lasting trauma.\n\nTheme: Moral ambiguity in conflict; guilt; PTSD.\n\nComparison: Compare with "Bayonet Charge" — both soldiers act on instinct rather than reason, but Armitage\'s speaker is haunted afterwards.',
      },
      // 10. Poppies — Jane Weir
      {
        id: 'pc-19',
        front: '"released a song bird from its cage" — Poppies',
        back: 'Poet: Jane Weir\n\nTechnique: Metaphor\n\nMeaning: The mother lets her son go, like setting a bird free. It captures both the love in letting go and the pain of knowing he may not return.\n\nTheme: Loss; parent-child relationship in conflict.\n\nComparison: Compare with "War Photographer" — both present the civilian perspective of war\'s emotional cost.',
      },
      {
        id: 'pc-20',
        front: '"the world overflowing like a treasure chest" — Poppies',
        back: 'Poet: Jane Weir\n\nTechnique: Simile\n\nMeaning: The son saw the world as full of possibility and adventure. The mother remembers his youthful optimism, which makes his potential loss even more painful.\n\nTheme: Loss of innocence; memory; grief.\n\nComparison: Compare with "Remains" — both show the lasting emotional impact of conflict, but from different perspectives (mother vs. soldier).',
      },
      // 11. War Photographer — Carol Ann Duffy
      {
        id: 'pc-21',
        front: '"a hundred agonies in black-and-white" — War Photographer',
        back: 'Poet: Carol Ann Duffy\n\nTechnique: Synecdoche / imagery\n\nMeaning: Each photograph contains immense human suffering, reduced to a monochrome image. "A hundred agonies" quantifies pain but also shows how photos compress suffering.\n\nTheme: Effects of conflict; desensitisation; guilt.\n\nComparison: Compare with "Remains" — both explore how witnessing death creates lasting psychological damage.',
      },
      {
        id: 'pc-22',
        front: '"running children in a nightmare heat" — War Photographer',
        back: 'Poet: Carol Ann Duffy\n\nTechnique: Imagery / noun phrase\n\nMeaning: The image recalls the iconic Vietnam napalm photograph. "Nightmare heat" fuses reality and horror — the heat is real (fire) and psychological (trauma).\n\nTheme: Suffering in conflict; the gap between war zones and comfortable England.\n\nComparison: Compare with "Poppies" — both highlight the distance between those who experience war and those who observe it from safety.',
      },
      // 12. Tissue — Imtiaz Dharker
      {
        id: 'pc-23',
        front: '"Paper that lets the light shine through" — Tissue',
        back: 'Poet: Imtiaz Dharker\n\nTechnique: Extended metaphor / symbolism\n\nMeaning: Paper represents the fragile human-made structures (borders, money, records) that control our lives. Letting light through suggests transparency and impermanence.\n\nTheme: Power of nature over human structures; fragility.\n\nComparison: Compare with "Ozymandias" — both show that human-made power structures are ultimately temporary and fragile.',
      },
      {
        id: 'pc-24',
        front: '"turned into your skin" — Tissue',
        back: 'Poet: Imtiaz Dharker\n\nTechnique: Metaphor / volta\n\nMeaning: The poem shifts from paper to human skin — the most important "tissue." Humans are more important than the systems built on paper. Skin is both fragile and beautiful.\n\nTheme: Human identity vs. structures of power.\n\nComparison: Compare with "London" — both critique the systems humans create, but Dharker offers a hopeful alternative while Blake presents despair.',
      },
      // 13. The Emigrée — Carol Rumens
      {
        id: 'pc-25',
        front: '"sunlight-clear" — The Emigrée',
        back: 'Poet: Carol Rumens\n\nTechnique: Compound adjective / semantic field of light\n\nMeaning: The speaker\'s childhood memory of her homeland is bathed in light and positivity, despite the city now being a place of conflict. Memory resists the reality of oppression.\n\nTheme: Memory; identity; conflict between past and present.\n\nComparison: Compare with "London" — Blake sees a real city\'s suffering while The Emigrée\'s speaker preserves an idealised version through memory.',
      },
      {
        id: 'pc-26',
        front: '"They accuse me of being dark" — The Emigrée',
        back: 'Poet: Carol Rumens\n\nTechnique: Ambiguity / sinister tone\n\nMeaning: "They" is deliberately vague — government, society, racists. "Dark" could mean foreign, suspicious, or literally dark-skinned. The speaker faces prejudice in her new country.\n\nTheme: Identity; displacement; prejudice.\n\nComparison: Compare with "Checking Out Me History" — both speakers resist having their identity defined by others.',
      },
      // 14. Kamikaze — Beatrice Garland
      {
        id: 'pc-27',
        front: '"a dark shoal of fishes" — Kamikaze',
        back: 'Poet: Beatrice Garland\n\nTechnique: Imagery / symbolism\n\nMeaning: The beauty of the natural world reminds the pilot of life\'s value, contrasting with his suicide mission. Nature offers a counter-argument to the state\'s demand for his death.\n\nTheme: Power of nature; conflict between duty and individual will.\n\nComparison: Compare with "Storm on the Island" — both show nature\'s power, but in "Kamikaze" nature saves rather than threatens.',
      },
      {
        id: 'pc-28',
        front: '"no longer the father we loved" — Kamikaze',
        back: 'Poet: Beatrice Garland\n\nTechnique: Shift in narrative voice\n\nMeaning: By choosing to live, the pilot is shunned by his family and society. He becomes a ghost in his own home — alive but socially dead. Surviving brings its own destruction.\n\nTheme: Honour; shame; the cost of defying power.\n\nComparison: Compare with "Remains" — both soldiers survive but are destroyed by the aftermath, one by guilt and one by shame.',
      },
      // 15. Checking Out Me History — John Agard
      {
        id: 'pc-29',
        front: '"Dem tell me bout 1066 and all dat" — Checking Out Me History',
        back: 'Poet: John Agard\n\nTechnique: Phonetic dialect / repetition\n\nMeaning: "Dem" represents the British colonial education system that imposed white European history. The dismissive "all dat" shows the speaker rejecting this one-sided narrative.\n\nTheme: Power of identity; colonial oppression; reclaiming history.\n\nComparison: Compare with "The Emigrée" — both speakers assert their identity against a dominant power that tries to erase or redefine them.',
      },
      {
        id: 'pc-30',
        front: '"I carving out me identity" — Checking Out Me History',
        back: 'Poet: John Agard\n\nTechnique: Metaphor / defiant tone\n\nMeaning: "Carving" implies active, difficult, permanent work — the speaker is sculpting their own identity from the raw material of suppressed history. It is an act of resistance.\n\nTheme: Identity; resistance to power; pride.\n\nComparison: Compare with "My Last Duchess" — the Duke controls narratives about others, while Agard fights to control his own narrative.',
      },
    ],
  },

  // ─── LOVE & RELATIONSHIPS POETRY ───────────────────────────────────
  {
    id: 'aqa-love-relationships-quotes',
    title: 'AQA Love & Relationships Poetry — Key Quotes',
    description: '30 key quotes from the 15 Love & Relationships poems (2 per poem)',
    category: 'Poetry',
    board: 'AQA',
    cards: [
      // 1. When We Two Parted — Lord Byron
      {
        id: 'lr-1',
        front: '"In silence and tears" — When We Two Parted',
        back: 'Poet: Lord Byron\n\nTechnique: Monosyllabic language / cyclical structure\n\nMeaning: The relationship ended in grief and secrecy. The simple, stark words convey raw emotional pain. This phrase opens and closes the poem, trapping the speaker in unresolved sorrow.\n\nTheme: Loss; secrecy; pain of ended love.\n\nComparison: Compare with "Neutral Tones" — both present love as a source of pain rather than joy, with bleak, muted imagery.',
      },
      {
        id: 'lr-2',
        front: '"A knell to mine ear" — When We Two Parted',
        back: 'Poet: Lord Byron\n\nTechnique: Metaphor / auditory imagery\n\nMeaning: A knell is a funeral bell — hearing his former lover\'s name feels like a death. The love is dead, and each mention of her is a painful reminder.\n\nTheme: Loss; grief for a living person.\n\nComparison: Compare with "Walking Away" — both speakers suffer from separation, but Byron\'s is romantic loss while Day Lewis\'s is parental.',
      },
      // 2. Love's Philosophy — Percy Bysshe Shelley
      {
        id: 'lr-3',
        front: '"Nothing in the world is single" — Love\'s Philosophy',
        back: 'Poet: Percy Bysshe Shelley\n\nTechnique: Declarative / argument from nature\n\nMeaning: The speaker argues that everything in nature exists in pairs, so it is unnatural for the lovers to be apart. He uses the natural world to justify his desire.\n\nTheme: Desire; unrequited love; nature and love.\n\nComparison: Compare with "Sonnet 29" — both speakers long for their beloved, but Shelley uses persuasion while Barrett Browning celebrates reunion.',
      },
      {
        id: 'lr-4',
        front: '"What are all these kissings worth" — Love\'s Philosophy',
        back: 'Poet: Percy Bysshe Shelley\n\nTechnique: Rhetorical question / volta\n\nMeaning: After all his arguments about nature\'s unity, the speaker asks: what is the point if you won\'t kiss me? The question reveals frustration and implies rejection.\n\nTheme: Unrequited desire; persuasion.\n\nComparison: Compare with "When We Two Parted" — both explore unfulfilled love, but Shelley\'s tone is playful while Byron\'s is grieving.',
      },
      // 3. Porphyria's Lover — Robert Browning
      {
        id: 'lr-5',
        front: '"I wound three times her little throat around" — Porphyria\'s Lover',
        back: 'Poet: Robert Browning\n\nTechnique: Dramatic monologue / disturbing matter-of-fact tone\n\nMeaning: The speaker strangles Porphyria with her own hair, described in chillingly calm, methodical language. The lack of emotion reveals his psychopathy.\n\nTheme: Obsessive love; power and control; madness.\n\nComparison: Compare with "My Last Duchess" (same poet) — both Browning monologues feature men who destroy the women they claim to love.',
      },
      {
        id: 'lr-6',
        front: '"And yet God has not said a word!" — Porphyria\'s Lover',
        back: 'Poet: Robert Browning\n\nTechnique: Exclamatory / dramatic irony\n\nMeaning: The speaker interprets God\'s silence as approval of the murder. This final line reveals his complete moral detachment and delusional self-justification.\n\nTheme: Power; morality; madness.\n\nComparison: Compare with "Farmer\'s Bride" — both feature men whose desire becomes dangerous, but Mew\'s farmer has not yet acted on his impulses.',
      },
      // 4. Sonnet 29 — Elizabeth Barrett Browning
      {
        id: 'lr-7',
        front: '"I think of thee!" — Sonnet 29',
        back: 'Poet: Elizabeth Barrett Browning\n\nTechnique: Exclamatory / direct address\n\nMeaning: The poem opens with passionate intensity — the speaker\'s thoughts of her beloved are all-consuming, like vines growing over a tree. The exclamation mark conveys urgency.\n\nTheme: Desire; passionate love; longing.\n\nComparison: Compare with "Love\'s Philosophy" — both speakers are consumed by desire, but Barrett Browning writes from mutual love while Shelley faces rejection.',
      },
      {
        id: 'lr-8',
        front: '"Renew thy presence" — Sonnet 29',
        back: 'Poet: Elizabeth Barrett Browning\n\nTechnique: Imperative / volta\n\nMeaning: The speaker commands her beloved to come to her in reality, not just in thought. She wants the real person, not a fantasy — reality is better than imagination.\n\nTheme: Desire for presence; reality vs. imagination in love.\n\nComparison: Compare with "Letters from Yorkshire" — both explore the tension between physical absence and emotional connection.',
      },
      // 5. Neutral Tones — Thomas Hardy
      {
        id: 'lr-9',
        front: '"a few leaves lay on the starving sod" — Neutral Tones',
        back: 'Poet: Thomas Hardy\n\nTechnique: Pathetic fallacy / personification\n\nMeaning: The dead leaves and "starving" ground mirror the dying relationship. Nature reflects the emotional barrenness between the two lovers.\n\nTheme: End of love; despair; emotional numbness.\n\nComparison: Compare with "When We Two Parted" — both use bleak natural imagery to reflect the pain of love ending.',
      },
      {
        id: 'lr-10',
        front: '"The smile on your mouth was the deadest thing" — Neutral Tones',
        back: 'Poet: Thomas Hardy\n\nTechnique: Superlative / oxymoron (smile = life, deadest = death)\n\nMeaning: A smile should convey warmth, but hers is lifeless — the relationship is so dead that even positive expressions become hollow.\n\nTheme: Loss of love; bitterness; disillusionment.\n\nComparison: Compare with "Porphyria\'s Lover" — both present love as something that dies, but Hardy\'s death is emotional while Browning\'s is literal.',
      },
      // 6. Letters from Yorkshire — Maura Dooley
      {
        id: 'lr-11',
        front: '"his knuckles singing" — Letters from Yorkshire',
        back: 'Poet: Maura Dooley\n\nTechnique: Synaesthesia / personification\n\nMeaning: His hands "sing" from the cold — the pain is transformed into something almost musical. It suggests the man finds joy and meaning in physical outdoor labour.\n\nTheme: Connection despite distance; different ways of living.\n\nComparison: Compare with "Sonnet 29" — both explore the relationship between physical absence and emotional presence.',
      },
      {
        id: 'lr-12',
        front: '"Is his life more real because he digs the earth?" — Letters from Yorkshire',
        back: 'Poet: Maura Dooley\n\nTechnique: Rhetorical question\n\nMeaning: The speaker questions whether her indoor, intellectual life is less authentic than his physical, rural existence. She feels a gap between their worlds but the letters bridge it.\n\nTheme: Connection; communication; distance.\n\nComparison: Compare with "Walking Away" — both reflect on the nature of human bonds that survive physical separation.',
      },
      // 7. The Farmer's Bride — Charlotte Mew
      {
        id: 'lr-13',
        front: '"like a mouse… a leveret… a fay" — The Farmer\'s Bride',
        back: 'Poet: Charlotte Mew\n\nTechnique: Simile cluster / semantic field of nature\n\nMeaning: The farmer describes his wife through animal imagery — she is wild, frightened, not fully human in his eyes. The comparisons reveal his inability to understand her as a person.\n\nTheme: Failed love; objectification; miscommunication.\n\nComparison: Compare with "Porphyria\'s Lover" — both men view women as objects rather than equals, leading to destructive relationships.',
      },
      {
        id: 'lr-14',
        front: '"her eyes, her hair, her hair!" — The Farmer\'s Bride',
        back: 'Poet: Charlotte Mew\n\nTechnique: Repetition / fragmented syntax\n\nMeaning: The farmer\'s obsessive repetition of "her hair" reveals his growing, barely-contained desire. The fragmented ending suggests he is losing rational control.\n\nTheme: Desire; obsession; the danger of repression.\n\nComparison: Compare with "Porphyria\'s Lover" — both end with men fixated on women\'s physical features, suggesting desire tipping into danger.',
      },
      // 8. Walking Away — Cecil Day Lewis
      {
        id: 'lr-15',
        front: '"like a satellite wrenched from its orbit" — Walking Away',
        back: 'Poet: Cecil Day Lewis\n\nTechnique: Simile / cosmic imagery\n\nMeaning: The child leaving feels like a violent, cosmic separation — something torn from its natural place. The father feels the loss as a physical rupture.\n\nTheme: Parental love; letting go; pain of separation.\n\nComparison: Compare with "Follower" — both explore parent-child relationships, but Day Lewis writes from the parent\'s perspective while Heaney writes from the child\'s.',
      },
      {
        id: 'lr-16',
        front: '"love is proved in the letting go" — Walking Away',
        back: 'Poet: Cecil Day Lewis\n\nTechnique: Epigram / paradox\n\nMeaning: True love means allowing the other person freedom, even though it hurts. The poem\'s final line resolves the father\'s pain with wisdom — holding on is not love.\n\nTheme: Selfless love; parental sacrifice.\n\nComparison: Compare with "Mother, any distance" — both explore the tension between holding on and releasing a child into independence.',
      },
      // 9. Eden Rock — Charles Causley
      {
        id: 'lr-17',
        front: '"slowly unpack the picnic" — Eden Rock',
        back: 'Poet: Charles Causley\n\nTechnique: Present tense / mundane detail\n\nMeaning: The ordinary, domestic scene is described as if happening now, blurring the line between memory, dream, and the afterlife. The calm detail makes the supernatural feel natural.\n\nTheme: Memory; family love; death and the afterlife.\n\nComparison: Compare with "Walking Away" — both recall specific childhood memories that carry deep emotional significance for the adult speaker.',
      },
      {
        id: 'lr-18',
        front: '"Crossing is not as hard as you might think" — Eden Rock',
        back: 'Poet: Charles Causley\n\nTechnique: Direct address / ambiguity\n\nMeaning: "Crossing" could mean crossing the stream or crossing into death. The parents reassure their son that death — joining them — is not to be feared.\n\nTheme: Death; reunion; comfort in mortality.\n\nComparison: Compare with "Follower" — both reflect on the relationship between parent and child across time, with a sense of inevitable role reversal.',
      },
      // 10. Follower — Seamus Heaney
      {
        id: 'lr-19',
        front: '"An expert. He would set the wing" — Follower',
        back: 'Poet: Seamus Heaney\n\nTechnique: Short sentence / technical vocabulary\n\nMeaning: The father is presented as masterful and skilled — a figure of admiration. The precise farming language ("wing," "sock," "headrig") shows the boy\'s awe at his father\'s expertise.\n\nTheme: Admiration; family; parent-child relationships.\n\nComparison: Compare with "Walking Away" — both present a parent through the eyes of a child, though Heaney\'s perspective is from the child looking up.',
      },
      {
        id: 'lr-20',
        front: '"It is my father who keeps stumbling behind me" — Follower',
        back: 'Poet: Seamus Heaney\n\nTechnique: Role reversal / volta\n\nMeaning: The final lines reverse the poem — now the ageing father follows the son. The word "stumbling" mirrors the child\'s clumsiness earlier, creating a painful symmetry.\n\nTheme: Ageing; guilt; shifting family roles.\n\nComparison: Compare with "Eden Rock" — both explore the parent-child bond across time, with Heaney showing guilt while Causley shows peace.',
      },
      // 11. Mother, any distance — Simon Armitage
      {
        id: 'lr-21',
        front: '"the line still feeding out" — Mother, any distance',
        back: 'Poet: Simon Armitage\n\nTechnique: Extended metaphor (tape measure = umbilical cord)\n\nMeaning: The tape measure his mother holds represents their bond — still connected but stretching as the son moves away. The "feeding" suggests nourishment, like an umbilical cord.\n\nTheme: Parent-child bond; independence; growing up.\n\nComparison: Compare with "Walking Away" — both use extended metaphors for the stretching bond between parent and child.',
      },
      {
        id: 'lr-22',
        front: '"to fall or fly" — Mother, any distance',
        back: 'Poet: Simon Armitage\n\nTechnique: Alliteration / binary opposition\n\nMeaning: The son reaches a point where he must risk independence — he might fail ("fall") or succeed ("fly"). The alliterative pair captures the terrifying excitement of leaving home.\n\nTheme: Independence; risk; growing up.\n\nComparison: Compare with "Walking Away" — Day Lewis\'s "letting go" mirrors Armitage\'s "fall or fly" — both frame independence as a necessary risk.',
      },
      // 12. Before You Were Mine — Carol Ann Duffy
      {
        id: 'lr-23',
        front: '"I\'m not here yet" — Before You Were Mine',
        back: 'Poet: Carol Ann Duffy\n\nTechnique: Temporal shift / possessive tone\n\nMeaning: The speaker imagines her mother\'s life before she was born, almost jealous of that freedom. "Not here yet" is both factual and poignant — the mother\'s carefree life will end when the child arrives.\n\nTheme: Memory; possessiveness; mother-daughter bond.\n\nComparison: Compare with "Follower" — both children look at their parents with a mixture of admiration and possessiveness.',
      },
      {
        id: 'lr-24',
        front: '"the decade ahead of my loud, possessive yell" — Before You Were Mine',
        back: 'Poet: Carol Ann Duffy\n\nTechnique: Adjectives / self-awareness\n\nMeaning: The speaker acknowledges that she — as a baby and child — claimed ownership of her mother. "Possessive yell" suggests the child\'s demands ended the mother\'s independence.\n\nTheme: Guilt; love as possession; sacrifice of parenthood.\n\nComparison: Compare with "Walking Away" — both explore how parenthood transforms identity, but Duffy writes from the child\'s guilty perspective.',
      },
      // 13. Winter Swans — Owen Sheers
      {
        id: 'lr-25',
        front: '"like boats righting in the harbour" — Winter Swans',
        back: 'Poet: Owen Sheers\n\nTechnique: Simile\n\nMeaning: The couple\'s hands finding each other are like boats steadying after a storm. The relationship has been turbulent but is now returning to stability.\n\nTheme: Reconciliation; enduring love; nature as healer.\n\nComparison: Compare with "Neutral Tones" — both feature couples by water, but Sheers\'s couple reconnect while Hardy\'s remain emotionally dead.',
      },
      {
        id: 'lr-26',
        front: '"they mate for life" — Winter Swans',
        back: 'Poet: Owen Sheers\n\nTechnique: Symbolism / natural metaphor\n\nMeaning: The swans\' lifelong fidelity serves as a model — and a quiet rebuke — for the struggling couple. Nature teaches them that commitment survives difficulty.\n\nTheme: Lasting love; nature and relationships.\n\nComparison: Compare with "Love\'s Philosophy" — both use nature to comment on human love, but Shelley uses it to persuade while Sheers uses it to reassure.',
      },
      // 14. Singh Song! — Daljit Nagra
      {
        id: 'lr-27',
        front: '"my bride she effing at my mum" — Singh Song!',
        back: 'Poet: Daljit Nagra\n\nTechnique: Humour / colloquial language / phonetic voice\n\nMeaning: The bride is rebellious, rude, and hilarious — she clashes with traditional expectations. The humour celebrates love that defies cultural norms and family pressure.\n\nTheme: Love across cultures; joy; rebellion.\n\nComparison: Compare with "The Farmer\'s Bride" — both feature marriages with tension, but Nagra\'s is joyful and Mew\'s is tragic.',
      },
      {
        id: 'lr-28',
        front: '"the moon on the cashpoint" — Singh Song!',
        back: 'Poet: Daljit Nagra\n\nTechnique: Juxtaposition / romance meets mundanity\n\nMeaning: Romance exists in ordinary, unglamorous places — even a shop counter under moonlight. Love transforms the mundane into the magical.\n\nTheme: Everyday love; beauty in the ordinary.\n\nComparison: Compare with "Letters from Yorkshire" — both find deep connection in ordinary, unglamorous settings rather than grand romantic gestures.',
      },
      // 15. Climbing My Grandfather — Andrew Waterhouse
      {
        id: 'lr-29',
        front: '"without a rope or net" — Climbing My Grandfather',
        back: 'Poet: Andrew Waterhouse\n\nTechnique: Extended metaphor (grandfather = mountain)\n\nMeaning: The speaker explores his grandfather\'s body as if climbing a mountain — "without a rope" means without the safety of the grandfather still being alive. The memory is all he has.\n\nTheme: Family love; memory; admiration.\n\nComparison: Compare with "Follower" — both present grandfathers/fathers as large, physical figures explored through the child\'s perspective.',
      },
      {
        id: 'lr-30',
        front: '"knowing the slow pulse of his good heart" — Climbing My Grandfather',
        back: 'Poet: Andrew Waterhouse\n\nTechnique: Sibilance / tender tone\n\nMeaning: Reaching the summit (the heart) reveals the grandfather\'s essential goodness. "Slow pulse" is calm, steady, and reassuring — the core of who he was.\n\nTheme: Family love; intimacy; understanding through memory.\n\nComparison: Compare with "Eden Rock" — both use calm, gentle imagery to express deep love for family members who may have passed away.',
      },
    ],
  },

  // ─── POETRY ANALYSIS TECHNIQUES ────────────────────────────────────
  {
    id: 'poetry-analysis-techniques',
    title: 'Poetry Analysis Techniques',
    description: '20 essential poetry-specific techniques for GCSE analysis',
    category: 'Poetry',
    board: 'All',
    cards: [
      {
        id: 'pt-1',
        front: 'Volta',
        back: 'Definition: A turning point or shift in a poem — in mood, argument, tone, or focus.\n\nExample: In "Neutral Tones," the final stanza shifts from past memory to present reflection, deepening the bitterness.\n\nEffect on reader: Creates surprise, contrast, or a new perspective. Forces the reader to reassess what came before.\n\nWhen to mention in essays: Whenever a poem changes direction — especially in sonnets (line 9 or 13). Say: "The volta at line X signals a shift from… to…"',
      },
      {
        id: 'pt-2',
        front: 'Enjambment',
        back: 'Definition: When a sentence or phrase runs over from one line to the next without end-stopping (no punctuation at the line break).\n\nExample: "I could not / stop for Death" — the thought flows across the line break.\n\nEffect on reader: Creates momentum, urgency, or a sense of overflow. Can mirror uncontrollable emotions or continuous movement.\n\nWhen to mention in essays: Link it to meaning — e.g., "The enjambment mirrors the speaker\'s inability to contain their grief."',
      },
      {
        id: 'pt-3',
        front: 'Caesura',
        back: 'Definition: A pause in the middle of a line of poetry, usually created by punctuation (full stop, comma, dash, ellipsis).\n\nExample: "I wandered lonely. As a cloud." — the full stop creates a definitive pause.\n\nEffect on reader: Disrupts rhythm, creates emphasis, forces the reader to stop and reflect. Can mirror hesitation, shock, or a change in thought.\n\nWhen to mention in essays: Always name the punctuation mark — e.g., "The caesura created by the dash forces the reader to pause, reflecting the speaker\'s hesitation."',
      },
      {
        id: 'pt-4',
        front: 'Dramatic Monologue',
        back: 'Definition: A poem spoken by a single character to a silent listener, revealing the speaker\'s personality — often unintentionally.\n\nExample: "My Last Duchess" — the Duke reveals his controlling, murderous nature while trying to impress an envoy.\n\nEffect on reader: We learn about the speaker through what they say and how they say it. Creates dramatic irony when the speaker reveals more than they intend.\n\nWhen to mention in essays: Discuss what the speaker reveals about themselves — e.g., "Through the dramatic monologue form, Browning exposes the Duke\'s possessiveness."',
      },
      {
        id: 'pt-5',
        front: 'Sonnet Form',
        back: 'Definition: A 14-line poem, traditionally about love. Two main types:\n• Petrarchan: octave (8) + sestet (6), volta at line 9. Rhyme: ABBAABBA + CDECDE.\n• Shakespearean: 3 quatrains + couplet, volta at line 13. Rhyme: ABAB CDCD EFEF GG.\n\nExample: "Sonnet 29" by Barrett Browning uses the Petrarchan form.\n\nEffect on reader: The strict form can mirror discipline, tradition, or the constraints of love. Subverting sonnet form can challenge conventions.\n\nWhen to mention in essays: Comment on WHY the poet chose this form — e.g., "Barrett Browning uses the sonnet form to place her love within the tradition of great love poetry."',
      },
      {
        id: 'pt-6',
        front: 'Free Verse',
        back: 'Definition: Poetry without a regular rhyme scheme, metre, or line length. The poet chooses when to break lines and how to structure stanzas.\n\nExample: "Tissue" by Imtiaz Dharker — the irregular form mirrors the fragility and impermanence of paper.\n\nEffect on reader: Can feel natural, conversational, or liberated. The lack of structure can mirror freedom, chaos, or rejection of tradition.\n\nWhen to mention in essays: Always link form to meaning — e.g., "The free verse reflects the speaker\'s rejection of rigid structures, mirroring the poem\'s theme of freedom."',
      },
      {
        id: 'pt-7',
        front: 'Iambic Pentameter',
        back: 'Definition: A line of poetry with 5 pairs of syllables (10 total), each pair following an unstressed-STRESSED pattern (da-DUM da-DUM da-DUM da-DUM da-DUM).\n\nExample: "Shall I compare thee to a summer\'s day?" — Shakespeare.\n\nEffect on reader: Mimics the natural rhythm of English speech and the human heartbeat. Creates a formal, measured tone. When disrupted, the irregularity draws attention to that moment.\n\nWhen to mention in essays: Note when iambic pentameter is broken — e.g., "The disruption to the iambic pentameter at line X reflects the speaker\'s emotional turmoil."',
      },
      {
        id: 'pt-8',
        front: 'Rhyme Scheme',
        back: 'Definition: The pattern of rhyming words at the end of each line, labelled with letters (ABAB, AABB, ABCABC, etc.).\n\nExample: "Charge of the Light Brigade" uses a driving AAABBB scheme to create momentum.\n\nEffect on reader: Regular rhyme creates rhythm, harmony, and expectation. Irregular or broken rhyme creates unease, surprise, or reflects disorder.\n\nWhen to mention in essays: Name the specific pattern and link it to meaning — e.g., "The ABAB rhyme scheme creates a sense of order that contrasts with the chaotic content."',
      },
      {
        id: 'pt-9',
        front: 'Stanza Structure',
        back: 'Definition: How a poem is divided into groups of lines (stanzas). Stanza length, regularity, and breaks all carry meaning.\n\nExample: "Remains" has no regular stanza pattern — the irregular structure mirrors the soldier\'s fragmented mental state.\n\nEffect on reader: Regular stanzas suggest control and order. Irregular stanzas suggest chaos, instability, or shifting emotions. A single isolated line creates emphasis.\n\nWhen to mention in essays: Comment on whether stanzas are regular or irregular and WHY — e.g., "The single-line final stanza isolates the thought, forcing the reader to confront it alone."',
      },
      {
        id: 'pt-10',
        front: 'End-Stopping',
        back: 'Definition: When a line of poetry ends with punctuation (full stop, comma, semicolon), creating a pause at the line break. The opposite of enjambment.\n\nExample: "Half a league, half a league, / Half a league onward," — each phrase is complete.\n\nEffect on reader: Creates a measured, controlled pace. Can feel final, definitive, or contained. Heavy end-stopping can feel restrictive or trap the reader.\n\nWhen to mention in essays: Contrast with enjambment — e.g., "The shift from end-stopped lines to enjambment mirrors the speaker\'s loss of emotional control."',
      },
      {
        id: 'pt-11',
        front: 'Refrain',
        back: 'Definition: A line or phrase that is repeated at regular intervals throughout a poem, often at the end of each stanza.\n\nExample: "But nothing happens" in "Exposure" — repeated to hammer home the futility of war.\n\nEffect on reader: Creates rhythm, emphasis, and a sense of inescapability. The repeated phrase gains deeper meaning each time it appears.\n\nWhen to mention in essays: Track how the refrain\'s meaning shifts — e.g., "Each repetition of \'But nothing happens\' deepens the reader\'s sense of futility."',
      },
      {
        id: 'pt-12',
        front: 'Anaphora (in poetry)',
        back: 'Definition: The repetition of a word or phrase at the beginning of successive lines or stanzas.\n\nExample: "Dem tell me" repeated in "Checking Out Me History" — each repetition reinforces the speaker\'s frustration.\n\nEffect on reader: Builds rhythm, emphasis, and emotional intensity. Creates a cumulative, almost chant-like effect that can feel powerful or relentless.\n\nWhen to mention in essays: Count the repetitions and explain the building effect — e.g., "The anaphora of \'Dem tell me\' builds cumulative anger, as each repetition adds another grievance."',
      },
      {
        id: 'pt-13',
        front: 'Dramatic Irony (in poetry)',
        back: 'Definition: When the reader understands something that the speaker or character does not, creating a gap between the speaker\'s words and the truth.\n\nExample: In "My Last Duchess," the Duke does not realise he is revealing himself as a murderer — but the reader does.\n\nEffect on reader: Creates tension, unease, or dark humour. Makes the reader feel complicit in understanding the hidden truth.\n\nWhen to mention in essays: Explain the gap between what the speaker thinks and what the reader understands — e.g., "The dramatic irony lies in the Duke\'s casual tone, which reveals his cruelty without his awareness."',
      },
      {
        id: 'pt-14',
        front: 'Persona / Speaker',
        back: 'Definition: The voice speaking in the poem — which is NOT necessarily the poet. The speaker is a character created by the poet.\n\nExample: The speaker in "Porphyria\'s Lover" is a fictional murderer — not Robert Browning himself.\n\nEffect on reader: Allows the poet to explore perspectives they do not personally hold. Creates distance between poet and subject.\n\nWhen to mention in essays: Always say "the speaker" not "the poet" unless you are sure the poem is autobiographical — e.g., "Browning creates a speaker whose calm tone disturbs the reader."',
      },
      {
        id: 'pt-15',
        front: 'Metre and Rhythm',
        back: 'Definition: The pattern of stressed and unstressed syllables in a line of poetry. Common metres include iambic (da-DUM), trochaic (DUM-da), anapaestic (da-da-DUM), and dactylic (DUM-da-da).\n\nExample: "The Charge of the Light Brigade" uses dactylic rhythm (DUM-da-da) to mimic galloping horses.\n\nEffect on reader: Rhythm controls pace, mood, and emphasis. Regular metre feels controlled; disrupted metre feels unsettling.\n\nWhen to mention in essays: Tap out the rhythm and link it to content — e.g., "The dactylic metre creates a relentless galloping rhythm that mirrors the cavalry charge."',
      },
      {
        id: 'pt-16',
        front: 'Blank Verse',
        back: 'Definition: Poetry written in unrhymed iambic pentameter. It does NOT mean "free verse" — blank verse has a strict metrical pattern, just no rhyme.\n\nExample: Much of Shakespeare\'s dialogue is in blank verse: "But soft, what light through yonder window breaks?"\n\nEffect on reader: Sounds natural and speech-like but has an underlying formal rhythm. Elevates everyday speech to something grander.\n\nWhen to mention in essays: Distinguish it clearly from free verse — e.g., "The use of blank verse gives the speaker\'s words a measured dignity while retaining a conversational quality."',
      },
      {
        id: 'pt-17',
        front: 'Couplet',
        back: 'Definition: Two consecutive lines that rhyme with each other. Often used to close a Shakespearean sonnet (the final couplet).\n\nExample: Shakespeare\'s "Sonnet 18" ends: "So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee."\n\nEffect on reader: Creates a sense of resolution, finality, or a memorable concluding statement. The rhyme makes the ending feel decisive and complete.\n\nWhen to mention in essays: If a poem ends with a couplet, discuss its effect — e.g., "The final couplet delivers the poem\'s message with epigrammatic force."',
      },
      {
        id: 'pt-18',
        front: 'Quatrain',
        back: 'Definition: A stanza of four lines, often with an ABAB or ABCB rhyme scheme. The most common stanza form in English poetry.\n\nExample: "When We Two Parted" is written in quatrains — the regular structure contrasts with the speaker\'s emotional pain.\n\nEffect on reader: Creates a balanced, ordered structure. When content is chaotic or emotional, the orderly quatrain can suggest the speaker is trying to maintain control.\n\nWhen to mention in essays: Comment on the tension between form and content — e.g., "The neat quatrains suggest Byron\'s speaker is restraining powerful emotions behind a controlled surface."',
      },
      {
        id: 'pt-19',
        front: 'Narrative Voice / Perspective',
        back: 'Definition: Who tells the poem\'s story and from what viewpoint — first person (I), second person (you), or third person (he/she/they). Also includes tense (past, present, future).\n\nExample: "Kamikaze" shifts between third-person narration and first-person daughter, creating multiple perspectives on the pilot\'s decision.\n\nEffect on reader: First person creates intimacy; third person creates distance. Shifts in voice can show changing perspectives or emotional distance.\n\nWhen to mention in essays: Note any shifts in voice or tense — e.g., "The shift from third to first person in \'Kamikaze\' brings the reader closer to the family\'s pain."',
      },
      {
        id: 'pt-20',
        front: 'Ambiguity',
        back: 'Definition: When a word, phrase, or image has more than one possible meaning, and the poet deliberately leaves it open to interpretation.\n\nExample: "Crossing is not as hard as you might think" in "Eden Rock" — crossing a stream, or crossing from life to death?\n\nEffect on reader: Enriches the poem by allowing multiple readings. Forces the reader to think actively and consider different interpretations.\n\nWhen to mention in essays: Explore BOTH meanings — e.g., "The ambiguity of \'crossing\' allows the reader to interpret this as both a physical and metaphysical journey, adding depth to the poem\'s meditation on mortality."',
      },
    ],
  },
];
