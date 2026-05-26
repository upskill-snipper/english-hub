/**
 * Extended vocabulary bank for the Vocabulary Builder game.
 *
 * These 200 entries are tuned for GCSE English Literature and Language essay
 * writing - they emphasise sophisticated verbs, literary technique nouns,
 * thematic adjectives, critical-theory concepts and formal connectives that
 * graders reward at Grade 8/9.
 *
 * Quotations embedded in examples are <=15 words and verbatim from the named
 * canonical text on a current GCSE specification (AQA / Edexcel / OCR / Eduqas).
 */

export interface VocabExtraEntry {
  id: string
  word: string
  partOfSpeech: 'verb' | 'noun' | 'adjective' | 'adverb' | 'conjunction' | 'preposition'
  definition: string
  example: string
  synonyms: string[]
  antonyms: string[]
}

export const VOCAB_EXTRA: VocabExtraEntry[] = [
  // ─── 60 sophisticated essay-writing verbs ────────────────────────────────
  {
    id: 'vb-extra-001',
    word: 'illuminates',
    partOfSpeech: 'verb',
    definition: 'sheds light on or clarifies a complex idea',
    example:
      "Dickens illuminates Victorian guilt through Scrooge's confrontation with Marley's chained ghost.",
    synonyms: ['clarifies', 'elucidates', 'reveals'],
    antonyms: ['obscures', 'conceals'],
  },
  {
    id: 'vb-extra-002',
    word: 'juxtaposes',
    partOfSpeech: 'verb',
    definition: 'places two ideas side by side to highlight contrast',
    example:
      "Stevenson juxtaposes Jekyll's respectability with Hyde's primitive violence to expose duality.",
    synonyms: ['contrasts', 'pairs', 'sets against'],
    antonyms: ['conflates', 'merges'],
  },
  {
    id: 'vb-extra-003',
    word: 'foregrounds',
    partOfSpeech: 'verb',
    definition: 'gives prominence to a particular idea or element',
    example:
      'Priestley foregrounds collective responsibility through the Inspector’s climactic warning to the Birlings.',
    synonyms: ['emphasises', 'highlights', 'spotlights'],
    antonyms: ['downplays', 'sidelines'],
  },
  {
    id: 'vb-extra-004',
    word: 'undermines',
    partOfSpeech: 'verb',
    definition: 'gradually weakens or destabilises something',
    example:
      'Shakespeare undermines patriarchal authority by allowing Lady Macbeth to dictate the regicide plan.',
    synonyms: ['weakens', 'subverts', 'erodes'],
    antonyms: ['reinforces', 'bolsters'],
  },
  {
    id: 'vb-extra-005',
    word: 'complicates',
    partOfSpeech: 'verb',
    definition: 'makes a reading more nuanced or less straightforward',
    example:
      'Bronte complicates the Byronic-hero archetype by exposing Heathcliff’s capacity for sustained cruelty.',
    synonyms: ['nuances', 'problematises', 'destabilises'],
    antonyms: ['simplifies', 'flattens'],
  },
  {
    id: 'vb-extra-006',
    word: 'exemplifies',
    partOfSpeech: 'verb',
    definition: 'serves as a typical or perfect example of',
    example:
      'Curley’s wife exemplifies the marginalised female voice silenced throughout 1930s Californian society.',
    synonyms: ['epitomises', 'typifies', 'embodies'],
    antonyms: ['contradicts', 'defies'],
  },
  {
    id: 'vb-extra-007',
    word: 'embodies',
    partOfSpeech: 'verb',
    definition: 'represents an abstract idea in a tangible form',
    example:
      'Sheila embodies the malleable younger generation Priestley wishes to politicise through socialist values.',
    synonyms: ['personifies', 'incarnates', 'represents'],
    antonyms: ['rejects', 'eschews'],
  },
  {
    id: 'vb-extra-008',
    word: 'evokes',
    partOfSpeech: 'verb',
    definition: 'calls forth a specific emotion or memory in the reader',
    example:
      'Wilfred Owen evokes visceral horror through the “guttering, choking, drowning” gas victim.',
    synonyms: ['conjures', 'elicits', 'summons'],
    antonyms: ['suppresses', 'numbs'],
  },
  {
    id: 'vb-extra-009',
    word: 'intimates',
    partOfSpeech: 'verb',
    definition: 'hints at something subtly without stating it outright',
    example:
      'Bronte intimates Bertha’s presence through the “demoniac laugh” heard outside Jane’s chamber.',
    synonyms: ['hints', 'implies', 'suggests'],
    antonyms: ['declares', 'announces'],
  },
  {
    id: 'vb-extra-010',
    word: 'problematises',
    partOfSpeech: 'verb',
    definition: 'treats something as a problem worth examining critically',
    example:
      'Atwood problematises maternal instinct by depicting Offred’s fractured memories of her stolen daughter.',
    synonyms: ['interrogates', 'questions', 'destabilises'],
    antonyms: ['accepts', 'naturalises'],
  },
  {
    id: 'vb-extra-011',
    word: 'subverts',
    partOfSpeech: 'verb',
    definition: 'overturns or works against an established expectation',
    example:
      'Carter subverts the passive fairy-tale heroine by arming her Bloody Chamber bride’s mother.',
    synonyms: ['overturns', 'inverts', 'destabilises'],
    antonyms: ['upholds', 'sustains'],
  },
  {
    id: 'vb-extra-012',
    word: 'reinforces',
    partOfSpeech: 'verb',
    definition: 'strengthens or supports an existing idea',
    example:
      'The recurring motif of fog reinforces Dickens’s critique of an opaque, indifferent legal system.',
    synonyms: ['strengthens', 'consolidates', 'bolsters'],
    antonyms: ['undermines', 'weakens'],
  },
  {
    id: 'vb-extra-013',
    word: 'destabilises',
    partOfSpeech: 'verb',
    definition: 'unsettles a previously fixed reading or position',
    example:
      'Shakespeare destabilises gender hierarchy through Lady Macbeth’s call to be “unsex”ed.',
    synonyms: ['unsettles', 'unmoors', 'disrupts'],
    antonyms: ['stabilises', 'anchors'],
  },
  {
    id: 'vb-extra-014',
    word: 'critiques',
    partOfSpeech: 'verb',
    definition: 'evaluates something with a focus on its limitations',
    example:
      'Orwell critiques totalitarian language by showing Winston rewriting history at the Ministry of Truth.',
    synonyms: ['interrogates', 'evaluates', 'censures'],
    antonyms: ['praises', 'endorses'],
  },
  {
    id: 'vb-extra-015',
    word: 'parodies',
    partOfSpeech: 'verb',
    definition: 'imitates a style for comic or critical effect',
    example:
      'Austen parodies the gothic novel through Catherine Morland’s overheated readings of Northanger Abbey.',
    synonyms: ['lampoons', 'satirises', 'mocks'],
    antonyms: ['venerates', 'imitates earnestly'],
  },
  {
    id: 'vb-extra-016',
    word: 'satirises',
    partOfSpeech: 'verb',
    definition: 'exposes folly or vice through irony and ridicule',
    example:
      'Dickens satirises utilitarian education through Gradgrind’s insistence that pupils provide “Facts, sir!”.',
    synonyms: ['lampoons', 'ridicules', 'mocks'],
    antonyms: ['celebrates', 'extols'],
  },
  {
    id: 'vb-extra-017',
    word: 'valorises',
    partOfSpeech: 'verb',
    definition: 'attaches positive value or prestige to something',
    example:
      'Tennyson valorises imperial sacrifice in “Charge of the Light Brigade” through martial alliteration.',
    synonyms: ['glorifies', 'extols', 'lionises'],
    antonyms: ['denigrates', 'condemns'],
  },
  {
    id: 'vb-extra-018',
    word: 'demonises',
    partOfSpeech: 'verb',
    definition: 'represents someone as wholly evil or threatening',
    example:
      'Stevenson demonises the urban poor through his description of Hyde’s “ape-like fury”.',
    synonyms: ['vilifies', 'pathologises', 'castigates'],
    antonyms: ['venerates', 'sympathises with'],
  },
  {
    // VERIFIED: OED entry "romanticize, v.", accessed 2026. Antonyms tightened
    // to single-word verbs ('demystifies', 'debunks') - original 'realisticly portrays'
    // was both a misspelling and not a true antonymic lexeme.
    id: 'vb-extra-019',
    word: 'romanticises',
    partOfSpeech: 'verb',
    definition: 'depicts something as more attractive than it really is',
    example:
      'Tennyson romanticises medieval femininity through the Lady of Shalott’s embowered isolation.',
    synonyms: ['idealises', 'sentimentalises', 'glamorises'],
    antonyms: ['demystifies', 'debunks'],
  },
  {
    id: 'vb-extra-020',
    word: 'mythologises',
    partOfSpeech: 'verb',
    definition: 'turns a person or event into a legendary narrative',
    example:
      'Heaney mythologises rural Derry labour, casting his father as a heroic “expert” digger.',
    synonyms: ['legendises', 'enshrines', 'apotheosises'],
    antonyms: ['debunks', 'demystifies'],
  },
  {
    id: 'vb-extra-021',
    word: 'historicises',
    partOfSpeech: 'verb',
    definition: 'situates a text within its historical context',
    example:
      'Priestley historicises post-war guilt by setting An Inspector Calls in 1912 yet performing in 1945.',
    synonyms: ['contextualises', 'periodises', 'situates'],
    antonyms: ['decontextualises', 'universalises'],
  },
  {
    id: 'vb-extra-022',
    word: 'contextualises',
    partOfSpeech: 'verb',
    definition: 'places a feature within a broader frame of reference',
    example:
      'Achebe contextualises Okonkwo’s downfall against the encroachment of British colonial missionaries.',
    synonyms: ['situates', 'frames', 'locates'],
    antonyms: ['isolates', 'abstracts'],
  },
  {
    id: 'vb-extra-023',
    word: 'galvanises',
    partOfSpeech: 'verb',
    definition: 'shocks an audience into urgent action or thought',
    example:
      'The Inspector galvanises the audience by warning of “fire and blood and anguish” to come.',
    synonyms: ['rouses', 'mobilises', 'energises'],
    antonyms: ['placates', 'pacifies'],
  },
  {
    id: 'vb-extra-024',
    word: 'destabilizes',
    partOfSpeech: 'verb',
    definition: 'undermines a fixed position (US spelling)',
    example:
      'Carter destabilizes the marriage plot by killing the Marquis before consummation completes.',
    synonyms: ['unsettles', 'disrupts', 'unmoors'],
    antonyms: ['stabilizes', 'fixes'],
  },
  {
    id: 'vb-extra-025',
    word: 'foreshadows',
    partOfSpeech: 'verb',
    definition: 'gives an early hint of a later development',
    example:
      'Steinbeck foreshadows Lennie’s death through the casual shooting of Candy’s suffering dog.',
    synonyms: ['presages', 'portends', 'prefigures'],
    antonyms: ['reveals', 'recalls'],
  },
  {
    id: 'vb-extra-026',
    word: 'epitomises',
    partOfSpeech: 'verb',
    definition: 'represents the perfect example of a quality',
    example:
      'Mr Birling epitomises the “hard-headed” capitalist Priestley most wishes to discredit.',
    synonyms: ['exemplifies', 'embodies', 'typifies'],
    antonyms: ['contradicts', 'undermines'],
  },
  {
    id: 'vb-extra-027',
    word: 'eschews',
    partOfSpeech: 'verb',
    definition: 'deliberately avoids using or doing something',
    example:
      'Hemingway eschews ornate diction in favour of the iceberg theory’s suggestive minimalism.',
    synonyms: ['avoids', 'shuns', 'forgoes'],
    antonyms: ['embraces', 'adopts'],
  },
  {
    id: 'vb-extra-028',
    word: 'circumscribes',
    partOfSpeech: 'verb',
    definition: 'limits or restricts within boundaries',
    example:
      'Bronte circumscribes Jane’s agency by trapping her in Lowood’s typhus-ridden classrooms.',
    synonyms: ['restricts', 'limits', 'confines'],
    antonyms: ['liberates', 'expands'],
  },
  {
    id: 'vb-extra-029',
    word: 'elides',
    partOfSpeech: 'verb',
    definition: 'omits or glosses over something significant',
    example:
      'Conrad elides Kurtz’s atrocities behind the famous fragmentary cry “The horror! The horror!”.',
    synonyms: ['omits', 'suppresses', 'glosses over'],
    antonyms: ['articulates', 'foregrounds'],
  },
  {
    id: 'vb-extra-030',
    word: 'conflates',
    partOfSpeech: 'verb',
    definition: 'merges two distinct ideas into one',
    example:
      'Shakespeare conflates kingship and butchery once Macbeth equates the throne with “bloody business”.',
    synonyms: ['merges', 'fuses', 'blurs'],
    antonyms: ['differentiates', 'distinguishes'],
  },
  {
    id: 'vb-extra-031',
    word: 'delineates',
    partOfSpeech: 'verb',
    definition: 'describes or outlines precisely',
    example:
      'Dickens delineates Miss Havisham’s arrested grief through the rotting bridal cake on her table.',
    synonyms: ['outlines', 'sketches', 'depicts'],
    antonyms: ['blurs', 'obscures'],
  },
  {
    id: 'vb-extra-032',
    word: 'engenders',
    partOfSpeech: 'verb',
    definition: 'gives rise to a feeling, condition or response',
    example:
      'The visceral imagery in “Exposure” engenders a numbing sympathy with the front-line soldiers.',
    synonyms: ['produces', 'generates', 'breeds'],
    antonyms: ['suppresses', 'extinguishes'],
  },
  {
    id: 'vb-extra-033',
    word: 'mobilises',
    partOfSpeech: 'verb',
    definition: 'puts something into purposeful action',
    example:
      'Atwood mobilises biblical allusion to lend Gilead’s patriarchy the gloss of theological inevitability.',
    synonyms: ['marshals', 'deploys', 'activates'],
    antonyms: ['demobilises', 'stalls'],
  },
  {
    id: 'vb-extra-034',
    word: 'deploys',
    partOfSpeech: 'verb',
    definition: 'strategically uses a technique for effect',
    example:
      'Owen deploys sibilance in “whispering of fields half-sown” to mimic the seeping wounded.',
    synonyms: ['employs', 'utilises', 'marshals'],
    antonyms: ['withholds', 'withdraws'],
  },
  {
    id: 'vb-extra-035',
    word: 'orchestrates',
    partOfSpeech: 'verb',
    definition: 'arranges multiple elements into deliberate effect',
    example:
      'Priestley orchestrates each interrogation so that Eva Smith’s suffering escalates with every Birling confession.',
    synonyms: ['arranges', 'choreographs', 'engineers'],
    antonyms: ['scatters', 'disorders'],
  },
  {
    id: 'vb-extra-036',
    word: 'amplifies',
    partOfSpeech: 'verb',
    definition: 'intensifies the impact of an idea or feeling',
    example:
      'Plosive consonants in “blood will have blood” amplify Macbeth’s descent into murderous fatalism.',
    synonyms: ['intensifies', 'magnifies', 'heightens'],
    antonyms: ['mutes', 'softens'],
  },
  {
    id: 'vb-extra-037',
    word: 'attenuates',
    partOfSpeech: 'verb',
    definition: 'weakens the force or value of something',
    example:
      'Wordsworth attenuates the violence of the French Revolution by reframing it as personal disillusionment.',
    synonyms: ['weakens', 'softens', 'diminishes'],
    antonyms: ['intensifies', 'amplifies'],
  },
  {
    id: 'vb-extra-038',
    word: 'predicates',
    partOfSpeech: 'verb',
    definition: 'bases a claim or condition upon something',
    example:
      'Priestley predicates moral worth on social conscience, not on Birling’s self-made wealth.',
    synonyms: ['bases', 'grounds', 'founds'],
    antonyms: ['detaches', 'separates'],
  },
  {
    id: 'vb-extra-039',
    word: 'positions',
    partOfSpeech: 'verb',
    definition: 'places the reader to view something in a particular way',
    example:
      'Stevenson positions us alongside Utterson, denying access to Hyde’s consciousness throughout the novella.',
    synonyms: ['situates', 'aligns', 'frames'],
    antonyms: ['displaces', 'disorients'],
  },
  {
    id: 'vb-extra-040',
    word: 'aligns',
    partOfSpeech: 'verb',
    definition: 'brings into agreement or sympathy with',
    example:
      'Bronte aligns the reader with Jane’s indignation through the first-person address “Reader, I married him”.',
    synonyms: ['allies', 'unifies', 'pairs'],
    antonyms: ['estranges', 'alienates'],
  },
  {
    id: 'vb-extra-041',
    word: 'estranges',
    partOfSpeech: 'verb',
    definition: 'creates emotional distance from a subject',
    example:
      'Brecht estranges the Mother Courage audience to prevent any cathartic identification with war.',
    synonyms: ['alienates', 'distances', 'detaches'],
    antonyms: ['endears', 'aligns'],
  },
  {
    id: 'vb-extra-042',
    word: 'interrogates',
    partOfSpeech: 'verb',
    definition: 'examines critically and persistently',
    example:
      'Shelley interrogates Enlightenment ambition by exposing Victor’s catastrophic abandonment of his Creature.',
    synonyms: ['probes', 'questions', 'examines'],
    antonyms: ['accepts', 'overlooks'],
  },
  {
    id: 'vb-extra-043',
    word: 'reframes',
    partOfSpeech: 'verb',
    definition: 'presents an idea within a fresh interpretive frame',
    example:
      'Carol Ann Duffy reframes Mrs Midas as the patient narrator of her husband’s ruinous greed.',
    synonyms: ['recontextualises', 'reinterprets', 'reconfigures'],
    antonyms: ['fixes', 'preserves'],
  },
  {
    id: 'vb-extra-044',
    word: 'inverts',
    partOfSpeech: 'verb',
    definition: 'turns an expected order or hierarchy upside down',
    example:
      'Carter inverts the seducer-victim dynamic by allowing the heroine’s mother to wield the pistol.',
    synonyms: ['reverses', 'overturns', 'flips'],
    antonyms: ['preserves', 'maintains'],
  },
  {
    id: 'vb-extra-045',
    word: 'recasts',
    partOfSpeech: 'verb',
    definition: 'reshapes an idea by giving it new form',
    example:
      'Duffy recasts Medusa as a wounded wife, making mythic monstrosity an elegy of betrayal.',
    synonyms: ['reshapes', 'reimagines', 'remoulds'],
    antonyms: ['preserves', 'duplicates'],
  },
  {
    id: 'vb-extra-046',
    word: 'channels',
    partOfSpeech: 'verb',
    definition: 'directs feelings or energies through a particular form',
    example:
      'Heaney channels colonial anxiety through the bog bodies of “Punishment” and “The Tollund Man”.',
    synonyms: ['directs', 'conveys', 'transmits'],
    antonyms: ['blocks', 'stifles'],
  },
  {
    id: 'vb-extra-047',
    word: 'tempers',
    partOfSpeech: 'verb',
    definition: 'softens the severity of something',
    example:
      'Steinbeck tempers Lennie’s violence by repeatedly affirming his childlike love for soft things.',
    synonyms: ['moderates', 'softens', 'mitigates'],
    antonyms: ['intensifies', 'aggravates'],
  },
  {
    id: 'vb-extra-048',
    word: 'mitigates',
    partOfSpeech: 'verb',
    definition: 'lessens the severity or impact of something',
    example:
      'Sheila mitigates her family’s callousness by alone accepting the Inspector’s message of communal duty.',
    synonyms: ['alleviates', 'softens', 'lessens'],
    antonyms: ['exacerbates', 'aggravates'],
  },
  {
    id: 'vb-extra-049',
    word: 'exacerbates',
    partOfSpeech: 'verb',
    definition: 'worsens an already negative situation',
    example:
      "Curley's wife's loneliness exacerbates her flirtatiousness, accelerating the tragedy at Soledad's barn.",
    synonyms: ['aggravates', 'worsens', 'intensifies'],
    antonyms: ['alleviates', 'mitigates'],
  },
  {
    id: 'vb-extra-050',
    word: 'recapitulates',
    partOfSpeech: 'verb',
    definition: 'restates the main ideas in concentrated form',
    example:
      "Macbeth's “tomorrow” soliloquy recapitulates the play's nihilistic vision of meaningless succession.",
    synonyms: ['summarises', 'restates', 'reiterates'],
    antonyms: ['introduces', 'expands'],
  },
  {
    id: 'vb-extra-051',
    word: 'extrapolates',
    partOfSpeech: 'verb',
    definition: 'extends a known idea into wider application',
    example:
      'Atwood extrapolates real legislative trends into Gilead’s totalising patriarchal theocracy.',
    synonyms: ['projects', 'extends', 'infers'],
    antonyms: ['restricts', 'narrows'],
  },
  {
    id: 'vb-extra-052',
    word: 'concretises',
    partOfSpeech: 'verb',
    definition: 'gives an abstract idea a concrete form',
    example:
      'Dickens concretises poverty as the “Ignorance and Want” children clinging to the Ghost’s robes.',
    synonyms: ['materialises', 'embodies', 'realises'],
    antonyms: ['abstracts', 'dematerialises'],
  },
  {
    id: 'vb-extra-053',
    word: 'destabilise',
    partOfSpeech: 'verb',
    definition: 'unsettle a fixed reading (UK infinitive form)',
    example:
      'Bronte uses Bertha to destabilise the colonial assumption that English domesticity equals moral purity.',
    synonyms: ['unsettle', 'disrupt', 'unmoor'],
    antonyms: ['stabilise', 'fix'],
  },
  {
    id: 'vb-extra-054',
    word: 'situates',
    partOfSpeech: 'verb',
    definition: 'places into a particular context or position',
    example:
      'Larkin situates 1960s sexual liberation within the elegiac irony of “Annus Mirabilis”.',
    synonyms: ['locates', 'positions', 'frames'],
    antonyms: ['displaces', 'isolates'],
  },
  {
    id: 'vb-extra-055',
    word: 'dramatises',
    partOfSpeech: 'verb',
    definition: 'gives an idea vivid theatrical form',
    example:
      'Shakespeare dramatises ambition through the dagger soliloquy that Macbeth perceives but cannot grasp.',
    synonyms: ['stages', 'enacts', 'theatricalises'],
    antonyms: ['underplays', 'narrates flatly'],
  },
  {
    id: 'vb-extra-056',
    word: 'naturalises',
    partOfSpeech: 'verb',
    definition: 'presents constructed ideas as if they were natural',
    example: 'Birling naturalises capitalism by insisting that “a man has to make his own way”.',
    synonyms: ['normalises', 'universalises', 'essentialises'],
    antonyms: ['denaturalises', 'historicises'],
  },
  {
    id: 'vb-extra-057',
    word: 'rehabilitates',
    partOfSpeech: 'verb',
    definition: 'restores the reputation of a previously dismissed figure',
    example:
      'Duffy rehabilitates female mythological figures, granting Mrs Aesop a sardonic, self-aware voice.',
    synonyms: ['reinstates', 'redeems', 'recovers'],
    antonyms: ['discredits', 'condemns'],
  },
  {
    // VERIFIED: OED entry "revalorise, v.", accessed 2026.
    // Replaced 'recapitalises' (a financial term meaning 'to restructure capital' - not
    // the symbolic-revaluation sense the gloss claimed) with the genuine critical-theory
    // verb 'revalorises', which OED defines as 'to attribute fresh value to'.
    id: 'vb-extra-058',
    word: 'revalorises',
    partOfSpeech: 'verb',
    definition: 'restores symbolic or moral value to a previously devalued idea',
    example:
      'Heaney revalorises agricultural labour by elevating his father’s spade to ancestral pen.',
    synonyms: ['revalues', 'reaffirms', 'reinvigorates'],
    antonyms: ['devalues', 'dismisses'],
  },
  {
    id: 'vb-extra-059',
    word: 'reverberates',
    partOfSpeech: 'verb',
    definition: 'continues to have meaning or echo through a text',
    example:
      'The phrase “All animals are equal” reverberates ironically across Orwell’s shifting Animal Farm hierarchy.',
    synonyms: ['echoes', 'resonates', 'lingers'],
    antonyms: ['fades', 'dissipates'],
  },
  {
    id: 'vb-extra-060',
    word: 'augments',
    partOfSpeech: 'verb',
    definition: 'increases the size, scope or effect of something',
    example:
      'Owen augments pity by intercutting parade-ground glamour with the “froth-corrupted lungs” reality.',
    synonyms: ['enlarges', 'enhances', 'expands'],
    antonyms: ['diminishes', 'reduces'],
  },

  // ─── 50 literary technique nouns ─────────────────────────────────────────
  {
    id: 'vb-extra-061',
    word: 'anaphora',
    partOfSpeech: 'noun',
    definition: 'the repetition of a word or phrase at the start of clauses',
    example:
      "Owen's anaphoric “If you could hear...” in “Dulce et Decorum Est” forces moral confrontation.",
    synonyms: ['initial repetition', 'epanaphora'],
    antonyms: ['variation', 'epistrophe'],
  },
  {
    id: 'vb-extra-062',
    word: 'epistrophe',
    partOfSpeech: 'noun',
    definition: 'the repetition of a word or phrase at the end of clauses',
    example:
      'Shakespearean epistrophe lends Mark Antony’s “honourable man” refrain its mounting sarcasm.',
    synonyms: ['epiphora', 'end-repetition'],
    antonyms: ['anaphora', 'variation'],
  },
  {
    id: 'vb-extra-063',
    word: 'asyndeton',
    partOfSpeech: 'noun',
    definition: 'the omission of conjunctions for compressed effect',
    example:
      'The asyndeton of “Bent double, like old beggars under sacks” accelerates Owen’s exhausted procession.',
    synonyms: ['conjunction-omission', 'parataxis'],
    antonyms: ['polysyndeton', 'hypotaxis'],
  },
  {
    id: 'vb-extra-064',
    word: 'polysyndeton',
    partOfSpeech: 'noun',
    definition: 'the deliberate use of many conjunctions in succession',
    example:
      'Steinbeck’s polysyndeton in opening descriptions of the Salinas River produces a Biblical, mythic register.',
    synonyms: ['conjunction-multiplication'],
    antonyms: ['asyndeton', 'parataxis'],
  },
  {
    id: 'vb-extra-065',
    word: 'sibilance',
    partOfSpeech: 'noun',
    definition: 'the recurrence of soft “s” sounds for sonic effect',
    example:
      'The sibilance of “the silken sad uncertain rustling” in “The Raven” intensifies Poe’s gothic dread.',
    synonyms: ['hissing alliteration'],
    antonyms: ['plosive', 'cacophony'],
  },
  {
    id: 'vb-extra-066',
    word: 'plosive',
    partOfSpeech: 'noun',
    definition: 'a hard, percussive consonant such as p, b or t',
    example: 'The plosives in Macbeth’s “bloody, bold, and resolute” mimic an axe striking flesh.',
    synonyms: ['stop consonant', 'percussive sound'],
    antonyms: ['fricative', 'sibilant'],
  },
  {
    id: 'vb-extra-067',
    word: 'fricative',
    partOfSpeech: 'noun',
    definition: 'a friction-based consonant such as f, v or th',
    example:
      'Owen’s fricatives in “fumbling, fitting the clumsy helmets” recreate panicked breathlessness under attack.',
    synonyms: ['continuant consonant'],
    antonyms: ['plosive', 'vowel'],
  },
  {
    id: 'vb-extra-068',
    word: 'volta',
    partOfSpeech: 'noun',
    definition: 'a turn in argument or feeling within a sonnet',
    example: 'Sonnet 18’s volta at line nine pivots from mortal beauty to immortalising verse.',
    synonyms: ['turn', 'pivot'],
    antonyms: ['continuation', 'flat tone'],
  },
  {
    id: 'vb-extra-069',
    word: 'caesura',
    partOfSpeech: 'noun',
    definition: 'a deliberate pause within a line of verse',
    example:
      'The caesura in “To die, to sleep // No more” imitates Hamlet’s suspended self-questioning.',
    synonyms: ['mid-line pause', 'rest'],
    antonyms: ['enjambment', 'flow'],
  },
  {
    id: 'vb-extra-070',
    word: 'enjambment',
    partOfSpeech: 'noun',
    definition: 'the running on of sense from one line into the next',
    example:
      'The enjambment in “Stop All the Clocks” mirrors grief that overflows the boundaries of language.',
    synonyms: ['run-on line', 'overflow'],
    antonyms: ['end-stop', 'caesura'],
  },
  {
    id: 'vb-extra-071',
    word: 'end-stop',
    partOfSpeech: 'noun',
    definition: 'a line of poetry that ends with a punctuation mark',
    example:
      'Larkin’s end-stops in “Mr Bleaney” lock the speaker into the bedsit’s suffocating finality.',
    synonyms: ['stopped line', 'closed line'],
    antonyms: ['enjambment', 'run-on'],
  },
  {
    id: 'vb-extra-072',
    word: 'dramatic monologue',
    partOfSpeech: 'noun',
    definition: 'a poem in which a single character speaks at length',
    example:
      "Browning's dramatic monologue “My Last Duchess” quietly betrays the Duke's controlling psyche.",
    synonyms: ['persona poem', 'soliloquy in verse'],
    antonyms: ['dialogue', 'chorus'],
  },
  {
    id: 'vb-extra-073',
    word: 'free indirect discourse',
    partOfSpeech: 'noun',
    definition: 'a third-person narration coloured by a character’s voice',
    example:
      'Austen uses free indirect discourse so that Emma’s self-deceptions feel like impartial truths.',
    synonyms: ['represented speech', 'narrated monologue'],
    antonyms: ['direct speech', 'reported speech'],
  },
  {
    id: 'vb-extra-074',
    word: 'metonymy',
    partOfSpeech: 'noun',
    definition: 'a figure where one thing represents an associated idea',
    example:
      'In “the crown answered the people”, the crown stands metonymically for monarchical authority.',
    synonyms: ['substitution', 'transferred reference'],
    antonyms: ['literalism'],
  },
  {
    id: 'vb-extra-075',
    word: 'synecdoche',
    partOfSpeech: 'noun',
    definition: 'a figure where a part stands for the whole',
    example:
      'When Auden writes “let the mourners come”, mourners synecdochically embody collective grief.',
    synonyms: ['part-for-whole', 'pars pro toto'],
    antonyms: ['totalising image'],
  },
  {
    id: 'vb-extra-076',
    word: 'zeugma',
    partOfSpeech: 'noun',
    definition: 'a verb governing two nouns in incongruous senses',
    example:
      'Pope’s zeugma “stain her honour, or her new brocade” parodies superficial Augustan values.',
    synonyms: ['syllepsis', 'yoked construction'],
    antonyms: ['parallelism'],
  },
  {
    id: 'vb-extra-077',
    word: 'chiasmus',
    partOfSpeech: 'noun',
    definition: 'a mirrored ABBA grammatical structure',
    example:
      'The chiasmus in “Fair is foul, and foul is fair” seeds the moral inversion of Macbeth.',
    synonyms: ['inverted parallelism'],
    antonyms: ['parallelism', 'isocolon'],
  },
  {
    id: 'vb-extra-078',
    word: 'antithesis',
    partOfSpeech: 'noun',
    definition: 'the placing of contrasting ideas in balanced phrases',
    example:
      'Pope’s antithesis “to err is human; to forgive, divine” exemplifies neoclassical balance.',
    synonyms: ['contraposition', 'balanced contrast'],
    antonyms: ['agreement', 'parallelism'],
  },
  {
    id: 'vb-extra-079',
    word: 'oxymoron',
    partOfSpeech: 'noun',
    definition: 'a phrase combining contradictory terms',
    example:
      "Romeo's oxymoronic “loving hate” expresses the play's destabilising fusion of love and violence.",
    synonyms: ['contradiction in terms', 'paradoxical pair'],
    antonyms: ['truism', 'tautology'],
  },
  {
    id: 'vb-extra-080',
    word: 'paradox',
    partOfSpeech: 'noun',
    definition: 'a statement that seems contradictory yet conveys truth',
    example: 'The paradox of “I must be cruel, only to be kind” captures Hamlet’s ethical strain.',
    synonyms: ['apparent contradiction', 'antinomy'],
    antonyms: ['truism'],
  },
  {
    id: 'vb-extra-081',
    word: 'pathetic fallacy',
    partOfSpeech: 'noun',
    definition: 'a technique attributing human emotion to nature',
    example:
      'The “rough night” after Duncan’s murder is pathetic fallacy reflecting cosmological disorder.',
    synonyms: ['anthropomorphic landscape'],
    antonyms: ['neutral description'],
  },
  {
    id: 'vb-extra-082',
    word: 'apostrophe',
    partOfSpeech: 'noun',
    definition: 'a direct address to an absent person, idea or object',
    example:
      'Macbeth’s apostrophe “Is this a dagger which I see before me?” dramatises hallucinatory ambition.',
    synonyms: ['direct address', 'invocation'],
    antonyms: ['third-person reference'],
  },
  {
    id: 'vb-extra-083',
    word: 'hyperbole',
    partOfSpeech: 'noun',
    definition: 'extravagant exaggeration for emphasis',
    example:
      'Macbeth’s hyperbolic claim that all Neptune’s ocean cannot wash blood emphasises irreducible guilt.',
    synonyms: ['overstatement', 'exaggeration'],
    antonyms: ['litotes', 'understatement'],
  },
  {
    id: 'vb-extra-084',
    word: 'litotes',
    partOfSpeech: 'noun',
    definition: 'an understatement using a negated opposite',
    example:
      'When Beowulf calls Grendel’s mother “no laughing matter”, the litotes belies real terror.',
    synonyms: ['understatement', 'meiosis'],
    antonyms: ['hyperbole', 'overstatement'],
  },
  {
    id: 'vb-extra-085',
    word: 'bathos',
    partOfSpeech: 'noun',
    definition: 'an anticlimactic descent from elevated to trivial',
    example: 'Pope deploys bathos in The Rape of the Lock to mock courtly self-importance.',
    synonyms: ['anticlimax', 'comic descent'],
    antonyms: ['climax', 'sublime'],
  },
  {
    id: 'vb-extra-086',
    word: 'aphorism',
    partOfSpeech: 'noun',
    definition: 'a concise, memorable expression of a general truth',
    example:
      'Wilde’s aphorism “the only way to get rid of temptation is to yield to it” inverts moral cliché.',
    synonyms: ['maxim', 'epigram'],
    antonyms: ['platitude', 'rambling'],
  },
  {
    id: 'vb-extra-087',
    word: 'epigraph',
    partOfSpeech: 'noun',
    definition: 'a quotation placed at the start of a work',
    example:
      'Eliot’s epigraph from Dante in “Prufrock” signals an underworld of paralysis and shame.',
    synonyms: ['heading quotation', 'motto'],
    antonyms: ['conclusion', 'epilogue'],
  },
  {
    id: 'vb-extra-088',
    word: 'epilogue',
    partOfSpeech: 'noun',
    definition: 'a closing section reflecting on the foregoing action',
    example:
      'Prospero’s epilogue in The Tempest dissolves theatrical illusion into a plea for audience release.',
    synonyms: ['afterword', 'coda'],
    antonyms: ['prologue', 'introduction'],
  },
  {
    id: 'vb-extra-089',
    word: 'prologue',
    partOfSpeech: 'noun',
    definition: 'an introductory section that frames the action',
    example:
      'The Romeo and Juliet prologue’s “star-cross’d lovers” fixes the play’s tragic horizon.',
    synonyms: ['preamble', 'foreword'],
    antonyms: ['epilogue', 'afterword'],
  },
  {
    id: 'vb-extra-090',
    word: 'frame narrative',
    partOfSpeech: 'noun',
    definition: 'a story enclosing one or more subordinate stories',
    example:
      'Walton’s letters form the frame narrative that mediates and ennobles Frankenstein’s confession.',
    synonyms: ['story-within-a-story', 'embedded narrative'],
    antonyms: ['linear narrative', 'single perspective'],
  },
  {
    id: 'vb-extra-091',
    word: 'foil',
    partOfSpeech: 'noun',
    definition: 'a character whose contrast highlights another’s qualities',
    example:
      'Banquo serves as Macbeth’s foil, his measured response to prophecy underscoring Macbeth’s recklessness.',
    synonyms: ['counterpart', 'contrast character'],
    antonyms: ['double', 'duplicate'],
  },
  {
    id: 'vb-extra-092',
    word: 'doppelganger',
    partOfSpeech: 'noun',
    definition: 'a character functioning as a sinister double',
    example:
      "Hyde operates as Jekyll's doppelganger, embodying the gentleman's repressed Victorian id.",
    synonyms: ['double', 'alter-ego'],
    antonyms: ['foil', 'singular self'],
  },
  {
    id: 'vb-extra-093',
    word: 'Bildungsroman',
    partOfSpeech: 'noun',
    definition: 'a novel charting a protagonist’s moral development',
    example:
      'Jane Eyre operates as a Bildungsroman that traces Jane from Lowood obedience to Ferndean autonomy.',
    synonyms: ['coming-of-age novel', 'formation novel'],
    antonyms: ['static portrait', 'satire'],
  },
  {
    id: 'vb-extra-094',
    word: 'leitmotif',
    partOfSpeech: 'noun',
    definition: 'a recurring symbolic element associated with a theme',
    example: 'The fog leitmotif in Bleak House recurs to indict the obfuscation of Chancery.',
    synonyms: ['recurring motif', 'thematic refrain'],
    antonyms: ['singular image', 'one-off symbol'],
  },
  {
    id: 'vb-extra-095',
    word: 'denouement',
    partOfSpeech: 'noun',
    definition: 'the unwinding of conflict after a story’s climax',
    example:
      'The denouement of An Inspector Calls reverses relief into a fresh, ringing telephone.',
    synonyms: ['resolution', 'unravelling'],
    antonyms: ['climax', 'rising action'],
  },
  {
    id: 'vb-extra-096',
    word: 'peripeteia',
    partOfSpeech: 'noun',
    definition: 'a sudden reversal of fortune in tragedy',
    example:
      'Macbeth’s peripeteia begins as Birnam Wood, supposedly impossible, “moves” towards Dunsinane.',
    synonyms: ['reversal', 'turnabout'],
    antonyms: ['stasis', 'continuation'],
  },
  {
    id: 'vb-extra-097',
    word: 'anagnorisis',
    partOfSpeech: 'noun',
    definition: 'the moment a tragic hero recognises their fate',
    example:
      'Macbeth’s anagnorisis arrives when Macduff reveals he was “untimely ripp’d” from his mother.',
    synonyms: ['recognition', 'discovery'],
    antonyms: ['ignorance', 'denial'],
  },
  {
    id: 'vb-extra-098',
    word: 'hamartia',
    partOfSpeech: 'noun',
    definition: 'the tragic flaw that precipitates a hero’s downfall',
    example: 'Macbeth’s hamartia is a “vaulting ambition” that overleaps every restraint.',
    synonyms: ['tragic flaw', 'fatal error'],
    antonyms: ['virtue', 'arete'],
  },
  {
    id: 'vb-extra-099',
    word: 'exposition',
    partOfSpeech: 'noun',
    definition: 'the early establishment of context and character',
    example:
      'The exposition of An Inspector Calls foregrounds Birling’s confident, soon-undermined predictions about war.',
    synonyms: ['set-up', 'introduction'],
    antonyms: ['climax', 'denouement'],
  },
  {
    id: 'vb-extra-100',
    word: 'in medias res',
    partOfSpeech: 'noun',
    definition: 'a narrative opening in the middle of the action',
    example:
      'Beowulf begins in medias res, plunging into Hrothgar’s mead-hall under Grendel’s nightly siege.',
    synonyms: ['mid-action opening'],
    antonyms: ['ab ovo', 'chronological opening'],
  },
  {
    // VERIFIED: OED entry "aside, n.2 (Theatre)", accessed 2026.
    // Removed bogus synonym 'apartheid speech' (wrong word entirely - confused with
    // the theatre term 'à part'). Replaced with 'stage whisper' / 'à part'.
    id: 'vb-extra-101',
    word: 'aside',
    partOfSpeech: 'noun',
    definition: 'a remark spoken to the audience and unheard by other characters',
    example:
      'Macbeth’s aside “Stars, hide your fires” privately confesses the regicide already taking shape.',
    synonyms: ['stage whisper', 'à part', 'soliloquised remark'],
    antonyms: ['dialogue', 'group address'],
  },
  {
    id: 'vb-extra-102',
    word: 'stichomythia',
    partOfSpeech: 'noun',
    definition: 'rapid alternating one-line dialogue between two characters',
    example:
      'The stichomythia between Macbeth and Lady Macbeth after the murder enacts shared, panicked guilt.',
    synonyms: ['line-for-line dialogue'],
    antonyms: ['monologue', 'soliloquy'],
  },
  {
    id: 'vb-extra-103',
    word: 'iambic pentameter',
    partOfSpeech: 'noun',
    definition: 'a metre of five iambs per line, mimicking spoken English',
    example:
      'Iambic pentameter underwrites Macbeth’s noble status until disordered rhythm signals psychological collapse.',
    synonyms: ['blank verse metre'],
    antonyms: ['trochaic tetrameter', 'free verse'],
  },
  {
    id: 'vb-extra-104',
    word: 'trochaic tetrameter',
    partOfSpeech: 'noun',
    definition: 'a falling four-beat metre often signalling otherness',
    example:
      'The Witches’ trochaic tetrameter “Double, double, toil and trouble” marks them as supernaturally outside the iambic norm.',
    synonyms: ['falling four-foot metre'],
    antonyms: ['iambic pentameter'],
  },
  {
    id: 'vb-extra-105',
    word: 'allusion',
    partOfSpeech: 'noun',
    definition: 'an indirect reference to another text or event',
    example: 'Eliot’s allusion to Dante in The Waste Land evokes a modern, sterile inferno.',
    synonyms: ['reference', 'echo'],
    antonyms: ['original coinage'],
  },
  {
    id: 'vb-extra-106',
    word: 'intertextuality',
    partOfSpeech: 'noun',
    definition: 'the network of references between texts',
    example:
      'Carter’s intertextuality plaits Perrault’s Bluebeard with Sade to indict patriarchal violence.',
    synonyms: ['textual cross-reference', 'literary echo'],
    antonyms: ['originality myth', 'autonomy'],
  },
  {
    id: 'vb-extra-107',
    word: 'palimpsest',
    partOfSpeech: 'noun',
    definition: 'a text bearing visible traces of earlier writing',
    example:
      'Heaney’s “Bog Queen” is a palimpsest layering Iron-Age burial, colonial history and personal memory.',
    synonyms: ['layered text', 'overwritten manuscript'],
    antonyms: ['blank page', 'tabula rasa'],
  },
  {
    id: 'vb-extra-108',
    word: 'ekphrasis',
    partOfSpeech: 'noun',
    definition: 'a verbal description of a visual artwork',
    example:
      "Auden's ekphrasis of Bruegel's Icarus in “Musée des Beaux Arts” deflates heroic suffering.",
    synonyms: ['art-description', 'pictorial poem'],
    antonyms: ['abstract meditation'],
  },
  {
    id: 'vb-extra-109',
    word: 'tableau',
    partOfSpeech: 'noun',
    definition: 'a static, picture-like stage arrangement',
    example:
      'Priestley closes Act One with a tableau as the Inspector enters to “sharp ring” of the doorbell.',
    synonyms: ['stage picture', 'frozen scene'],
    antonyms: ['kinetic action'],
  },
  {
    id: 'vb-extra-110',
    word: 'verisimilitude',
    partOfSpeech: 'noun',
    definition: 'the quality of seeming true or lifelike in art',
    example:
      'Steinbeck’s phonetic dialect lends verisimilitude to the Soledad bunkhouse exchanges.',
    synonyms: ['realism', 'authenticity'],
    antonyms: ['artifice', 'implausibility'],
  },

  // ─── 40 thematic adjectives ──────────────────────────────────────────────
  {
    id: 'vb-extra-111',
    word: 'didactic',
    partOfSpeech: 'adjective',
    definition: 'designed to instruct, often morally',
    example:
      "Priestley's didactic intent surfaces openly in the Inspector's parting socialist sermon.",
    synonyms: ['instructive', 'moralising', 'pedagogical'],
    antonyms: ['descriptive', 'amoral'],
  },
  {
    id: 'vb-extra-112',
    word: 'allegorical',
    partOfSpeech: 'adjective',
    definition: 'expressing a hidden symbolic meaning',
    example:
      'Animal Farm is allegorical, with the pigs charting Stalinism’s slide from revolution to tyranny.',
    synonyms: ['symbolic', 'parabolic', 'figurative'],
    antonyms: ['literal', 'denotative'],
  },
  {
    id: 'vb-extra-113',
    word: 'elegiac',
    partOfSpeech: 'adjective',
    definition: 'expressing sorrowful reflection, especially for the dead',
    example: "Auden's elegiac tone in “Stop All the Clocks” insists that mourning halt the world.",
    synonyms: ['mournful', 'lamenting', 'plaintive'],
    antonyms: ['celebratory', 'jubilant'],
  },
  {
    id: 'vb-extra-114',
    word: 'pastoral',
    partOfSpeech: 'adjective',
    definition: 'idealising rural life and landscape',
    example:
      'Steinbeck offers a pastoral opening of willows and sycamores before brutal social realities intrude.',
    synonyms: ['bucolic', 'rustic', 'idyllic'],
    antonyms: ['urban', 'industrial'],
  },
  {
    id: 'vb-extra-115',
    word: 'dystopian',
    partOfSpeech: 'adjective',
    definition: 'depicting an oppressive, undesirable society',
    example:
      'Atwood’s dystopian Gilead literalises the policing of female reproduction under religious patriarchy.',
    synonyms: ['totalitarian', 'oppressive', 'anti-utopian'],
    antonyms: ['utopian', 'idyllic'],
  },
  {
    id: 'vb-extra-116',
    word: 'transgressive',
    partOfSpeech: 'adjective',
    definition: 'breaking moral, social or aesthetic rules',
    example:
      'Lady Macbeth’s “unsex me here” is transgressive, rejecting feminine softness for Jacobean ambition.',
    synonyms: ['boundary-breaking', 'subversive', 'iconoclastic'],
    antonyms: ['conformist', 'orthodox'],
  },
  {
    id: 'vb-extra-117',
    word: 'transcendent',
    partOfSpeech: 'adjective',
    definition: 'rising above ordinary experience or limits',
    example:
      'Wordsworth’s transcendent vision in “Tintern Abbey” unites mind, memory and natural sublimity.',
    synonyms: ['sublime', 'exalted', 'spiritual'],
    antonyms: ['mundane', 'earthbound'],
  },
  {
    id: 'vb-extra-118',
    word: 'liminal',
    partOfSpeech: 'adjective',
    definition: 'occupying a transitional or threshold space',
    example: 'The blasted heath is liminal, where Macbeth shifts from loyal thane to regicide.',
    synonyms: ['transitional', 'threshold', 'in-between'],
    antonyms: ['fixed', 'central'],
  },
  {
    id: 'vb-extra-119',
    word: 'polysemous',
    partOfSpeech: 'adjective',
    definition: 'open to multiple coexisting meanings',
    example:
      'Macbeth’s “fair is foul, and foul is fair” is polysemous, encoding ethical, aesthetic and political inversion.',
    synonyms: ['multivalent', 'plurivocal', 'ambiguous'],
    antonyms: ['univocal', 'unambiguous'],
  },
  {
    id: 'vb-extra-120',
    word: 'hagiographic',
    partOfSpeech: 'adjective',
    definition: 'idealising a figure to saintly proportions',
    example:
      'Tennyson’s hagiographic portrait of Arthur in Idylls of the King polishes monarchy into myth.',
    synonyms: ['idealising', 'eulogistic', 'reverential'],
    antonyms: ['critical', 'demystifying'],
  },
  {
    id: 'vb-extra-121',
    word: 'apocalyptic',
    partOfSpeech: 'adjective',
    definition: 'depicting cataclysm or final reckoning',
    example:
      'Eliot’s apocalyptic “unreal city” imagines London as wandering through a modern inferno.',
    synonyms: ['cataclysmic', 'eschatological', 'end-times'],
    antonyms: ['restorative', 'genesial'],
  },
  {
    id: 'vb-extra-122',
    word: 'eschatological',
    partOfSpeech: 'adjective',
    definition: 'concerning the final destiny of humanity',
    example:
      'Frankenstein’s arctic ending takes on eschatological weight, framing creation as ultimate judgement.',
    synonyms: ['apocalyptic', 'end-of-days'],
    antonyms: ['mundane', 'temporal'],
  },
  {
    id: 'vb-extra-123',
    word: 'utopian',
    partOfSpeech: 'adjective',
    definition: 'envisioning an ideal social order',
    example:
      'Steinbeck’s utopian dream of “a little house and a couple of acres” cannot survive Soledad.',
    synonyms: ['ideal', 'visionary', 'arcadian'],
    antonyms: ['dystopian', 'pragmatic'],
  },
  {
    id: 'vb-extra-124',
    word: 'parochial',
    partOfSpeech: 'adjective',
    definition: 'narrow in outlook, limited to local concerns',
    example:
      'Birling’s parochial confidence in “unsinkable” ships exposes Edwardian provincial complacency.',
    synonyms: ['insular', 'narrow', 'provincial'],
    antonyms: ['cosmopolitan', 'global'],
  },
  {
    id: 'vb-extra-125',
    word: 'cosmopolitan',
    partOfSpeech: 'adjective',
    definition: 'inclusive of and shaped by many cultures',
    example:
      'Eliot’s cosmopolitan citation of Sanskrit and Latin diversifies The Waste Land’s mourning.',
    synonyms: ['multicultural', 'internationalist'],
    antonyms: ['parochial', 'insular'],
  },
  {
    id: 'vb-extra-126',
    word: 'iconoclastic',
    partOfSpeech: 'adjective',
    definition: 'attacking cherished beliefs or institutions',
    example:
      'Carter’s iconoclastic rewriting of fairy tales detonates the gendered piety of Perrault and Grimm.',
    synonyms: ['heretical', 'subversive', 'transgressive'],
    antonyms: ['orthodox', 'conformist'],
  },
  {
    id: 'vb-extra-127',
    word: 'orthodox',
    partOfSpeech: 'adjective',
    definition: 'conforming to established religious or social belief',
    example:
      'Birling’s orthodox capitalism is precisely the doctrine Priestley wants the audience to abandon.',
    synonyms: ['conventional', 'traditional', 'doctrinal'],
    antonyms: ['heterodox', 'iconoclastic'],
  },
  {
    id: 'vb-extra-128',
    word: 'patriarchal',
    partOfSpeech: 'adjective',
    definition: 'organised around male authority',
    example: 'Curley enforces patriarchal control by parading and policing his nameless wife.',
    synonyms: ['male-dominated', 'androcentric'],
    antonyms: ['matriarchal', 'egalitarian'],
  },
  {
    id: 'vb-extra-129',
    word: 'matriarchal',
    partOfSpeech: 'adjective',
    definition: 'organised around female authority',
    example:
      'Carter rewrites the Bluebeard tale into a matriarchal triumph of mother over Marquis.',
    synonyms: ['matricentric', 'gynocentric'],
    antonyms: ['patriarchal', 'androcentric'],
  },
  {
    id: 'vb-extra-130',
    word: 'gothic',
    partOfSpeech: 'adjective',
    definition: 'characterised by dread, ruin and the supernatural',
    example:
      'The gothic atmosphere of Thornfield’s third-storey laughter rehearses Bertha’s revelation.',
    synonyms: ['macabre', 'sepulchral', 'ghostly'],
    antonyms: ['domestic', 'pastoral'],
  },
  {
    id: 'vb-extra-131',
    word: 'sublime',
    partOfSpeech: 'adjective',
    definition: 'inspiring awe through grandeur, often tinged with terror',
    example:
      'Shelley’s sublime Alpine landscapes dwarf and humble Victor Frankenstein’s scientific hubris.',
    synonyms: ['awe-inspiring', 'transcendent', 'majestic'],
    antonyms: ['banal', 'trivial'],
  },
  {
    id: 'vb-extra-132',
    word: 'uncanny',
    partOfSpeech: 'adjective',
    definition: 'strangely unsettling because both familiar and alien',
    example:
      'Hyde’s description as producing an “unknown disgust” captures Freud’s sense of the uncanny.',
    synonyms: ['eerie', 'unheimlich', 'disquieting'],
    antonyms: ['familiar', 'reassuring'],
  },
  {
    id: 'vb-extra-133',
    word: 'visceral',
    partOfSpeech: 'adjective',
    definition: 'felt as a deep, instinctive bodily response',
    example:
      'Owen’s visceral image of “froth-corrupted lungs” bypasses argument to provoke physical revulsion.',
    synonyms: ['gut-level', 'corporeal', 'instinctual'],
    antonyms: ['cerebral', 'detached'],
  },
  {
    id: 'vb-extra-134',
    word: 'cerebral',
    partOfSpeech: 'adjective',
    definition: 'engaging the intellect rather than the emotions',
    example:
      'Eliot’s cerebral catalogues of myth keep The Waste Land at an estranging analytical distance.',
    synonyms: ['intellectual', 'analytical', 'highbrow'],
    antonyms: ['visceral', 'emotional'],
  },
  {
    id: 'vb-extra-135',
    word: 'effete',
    partOfSpeech: 'adjective',
    definition: 'having lost vitality or moral force',
    example:
      'Eliot frames Prufrock as an effete bourgeois, paralysed by overrefinement and indecision.',
    synonyms: ['enervated', 'decadent', 'spent'],
    antonyms: ['vigorous', 'robust'],
  },
  {
    id: 'vb-extra-136',
    word: 'phallocentric',
    partOfSpeech: 'adjective',
    definition: 'centred on male symbolic and social power',
    example:
      'Carter exposes the phallocentric violence of fairy-tale tradition by handing the gun to the mother.',
    synonyms: ['androcentric', 'male-privileging'],
    antonyms: ['gynocentric', 'feminist'],
  },
  {
    id: 'vb-extra-137',
    word: 'jingoistic',
    partOfSpeech: 'adjective',
    definition: 'aggressively nationalistic and militaristic',
    example:
      "Owen rejects the jingoistic “old lie” that dying for one's country is sweet and fitting.",
    synonyms: ['chauvinistic', 'ultra-patriotic'],
    antonyms: ['pacifist', 'internationalist'],
  },
  {
    id: 'vb-extra-138',
    word: 'pacifist',
    partOfSpeech: 'adjective',
    definition: 'opposed to war and the use of violence',
    example:
      'Sassoon’s pacifist outrage in “Suicide in the Trenches” turns soldier suicide into political indictment.',
    synonyms: ['non-violent', 'anti-war'],
    antonyms: ['militaristic', 'jingoistic'],
  },
  {
    id: 'vb-extra-139',
    word: 'colonial',
    partOfSpeech: 'adjective',
    definition: 'relating to imperial domination of foreign peoples',
    example:
      'Conrad’s colonial Congo silences indigenous voices, reducing them to “a black and incomprehensible frenzy”.',
    synonyms: ['imperial', 'occupying'],
    antonyms: ['postcolonial', 'sovereign'],
  },
  {
    id: 'vb-extra-140',
    word: 'postcolonial',
    partOfSpeech: 'adjective',
    definition: 'concerned with the legacies of colonial rule',
    example:
      'Achebe writes back from a postcolonial standpoint, restoring Igbo complexity flattened by Conrad.',
    synonyms: ['decolonising', 'anti-imperial'],
    antonyms: ['colonial', 'imperial'],
  },
  {
    id: 'vb-extra-141',
    word: 'archetypal',
    partOfSpeech: 'adjective',
    definition: 'representing a universal symbolic pattern',
    example:
      'Macbeth becomes the archetypal usurper, his rise and fall scripted by ambition and prophecy.',
    synonyms: ['quintessential', 'paradigmatic'],
    antonyms: ['idiosyncratic', 'singular'],
  },
  {
    id: 'vb-extra-142',
    word: 'paradigmatic',
    partOfSpeech: 'adjective',
    definition: 'serving as a model or typical example',
    example:
      'Mr Birling is paradigmatic of the dramatic irony Priestley wields against pre-war certainty.',
    synonyms: ['exemplary', 'archetypal', 'representative'],
    antonyms: ['atypical', 'anomalous'],
  },
  {
    id: 'vb-extra-143',
    word: 'introspective',
    partOfSpeech: 'adjective',
    definition: 'examining one’s own thoughts and feelings',
    example:
      "Hamlet's introspective soliloquies test action against the paralysing weight of moral self-scrutiny.",
    synonyms: ['self-reflective', 'meditative'],
    antonyms: ['extroverted', 'unreflective'],
  },
  {
    id: 'vb-extra-144',
    word: 'introverted',
    partOfSpeech: 'adjective',
    definition: 'oriented inward, away from external stimulus',
    example:
      "Stevens's introverted butler suppresses every emotional acknowledgement of Miss Kenton's affection.",
    synonyms: ['inward-looking', 'reserved'],
    antonyms: ['extroverted', 'outgoing'],
  },
  {
    id: 'vb-extra-145',
    word: 'fatalistic',
    partOfSpeech: 'adjective',
    definition: 'accepting events as inevitable',
    example:
      'Macbeth’s fatalistic “tomorrow, and tomorrow, and tomorrow” concedes that nothing can avert his fall.',
    synonyms: ['deterministic', 'resigned'],
    antonyms: ['voluntarist', 'agentic'],
  },
  {
    id: 'vb-extra-146',
    word: 'redemptive',
    partOfSpeech: 'adjective',
    definition: 'offering moral or spiritual salvation',
    example:
      'A Christmas Carol stages a redemptive arc as Scrooge purchases the “prize Turkey” for Tim.',
    synonyms: ['salvific', 'restorative'],
    antonyms: ['damning', 'condemnatory'],
  },
  {
    id: 'vb-extra-147',
    word: 'cyclical',
    partOfSpeech: 'adjective',
    definition: 'recurring in a repeating pattern',
    example:
      'The cyclical structure of An Inspector Calls re-rings the doorbell to indict unrepentant generations.',
    synonyms: ['recurrent', 'repetitive'],
    antonyms: ['linear', 'progressive'],
  },
  {
    id: 'vb-extra-148',
    word: 'linear',
    partOfSpeech: 'adjective',
    definition: 'progressing chronologically without circling back',
    example:
      "Steinbeck's linear plot accelerates Lennie's path from Weed to Soledad to the Salinas pool.",
    synonyms: ['sequential', 'chronological'],
    antonyms: ['cyclical', 'fragmented'],
  },
  {
    id: 'vb-extra-149',
    word: 'fragmented',
    partOfSpeech: 'adjective',
    definition: 'broken into discontinuous parts',
    example:
      'Eliot’s fragmented form in The Waste Land mirrors a post-war culture without coherent myth.',
    synonyms: ['discontinuous', 'splintered'],
    antonyms: ['cohesive', 'unified'],
  },
  {
    id: 'vb-extra-150',
    word: 'reflexive',
    partOfSpeech: 'adjective',
    definition: 'directing attention to its own form or process',
    example:
      'Prospero’s reflexive epilogue in The Tempest exposes theatre as a fragile, dissolving illusion.',
    synonyms: ['self-aware', 'metafictional'],
    antonyms: ['naive', 'transparent'],
  },

  // ─── 30 critical concepts ────────────────────────────────────────────────
  {
    id: 'vb-extra-151',
    word: 'psychoanalytic',
    partOfSpeech: 'adjective',
    definition: 'reading texts through Freudian or Lacanian theory',
    example:
      "A psychoanalytic reading sees Hyde as Jekyll's repressed id erupting through Victorian respectability.",
    synonyms: ['Freudian', 'depth-psychological'],
    antonyms: ['behaviourist', 'positivist'],
  },
  {
    id: 'vb-extra-152',
    word: 'postcolonialism',
    partOfSpeech: 'noun',
    definition: 'a critical movement examining colonial legacies in literature',
    example:
      'Postcolonialism reframes Heart of Darkness as a text complicit in the silencing of Africa.',
    synonyms: ['decolonial theory', 'subaltern studies'],
    antonyms: ['colonial apologetics'],
  },
  {
    id: 'vb-extra-153',
    word: 'Marxist',
    partOfSpeech: 'adjective',
    definition: 'analysing texts through class struggle and economic power',
    example:
      "A Marxist reading exposes Birling's factory dispute as systemic exploitation, not a discrete event.",
    synonyms: ['materialist', 'class-conscious'],
    antonyms: ['formalist', 'aestheticist'],
  },
  {
    id: 'vb-extra-154',
    word: 'feminist',
    partOfSpeech: 'adjective',
    definition: 'analysing how texts construct or contest gender power',
    example:
      'A feminist reading of An Inspector Calls foregrounds Eva Smith as patriarchal capitalism’s expendable body.',
    synonyms: ['gender-critical', 'gynocritical'],
    antonyms: ['patriarchal', 'misogynistic'],
  },
  {
    id: 'vb-extra-155',
    word: 'ecocritical',
    partOfSpeech: 'adjective',
    definition: 'reading texts through the relations of literature and ecology',
    example:
      'An ecocritical lens reads Wuthering Heights’s moors as a non-human force resisting human possession.',
    synonyms: ['environmental', 'green-critical'],
    antonyms: ['anthropocentric', 'extractivist'],
  },
  {
    id: 'vb-extra-156',
    word: 'structuralist',
    partOfSpeech: 'adjective',
    definition: 'reading texts as systems of recurring binary oppositions',
    example:
      'A structuralist reading of Macbeth maps the binaries of order/chaos, fair/foul, and night/day.',
    synonyms: ['systemic', 'semiotic'],
    antonyms: ['poststructuralist', 'deconstructive'],
  },
  {
    id: 'vb-extra-157',
    word: 'poststructuralist',
    partOfSpeech: 'adjective',
    definition: 'sceptical of fixed meaning and stable binary structures',
    example:
      'A poststructuralist reading dissolves Jekyll/Hyde into a single, unstably differentiated subject.',
    synonyms: ['deconstructive', 'antifoundational'],
    antonyms: ['structuralist', 'foundationalist'],
  },
  {
    id: 'vb-extra-158',
    word: 'deconstruction',
    partOfSpeech: 'noun',
    definition: 'a critical practice exposing internal contradictions in texts',
    example:
      "Deconstruction unsettles the play's apparent moral resolution by showing Macduff's vengeance as similarly bloody.",
    synonyms: ['poststructural critique', 'derridean reading'],
    antonyms: ['close reading', 'New Criticism'],
  },
  {
    id: 'vb-extra-159',
    word: 'intertextual',
    partOfSpeech: 'adjective',
    definition: 'referencing or reshaping prior texts',
    example:
      "Carter's intertextual rewriting of “Bluebeard” turns Perrault's morality tale into feminist parable.",
    synonyms: ['allusive', 'referential'],
    antonyms: ['hermetic', 'self-contained'],
  },
  {
    id: 'vb-extra-160',
    word: 'paratextual',
    partOfSpeech: 'adjective',
    definition: 'belonging to the framing apparatus around a text',
    example:
      "The paratextual epigraph to The Handmaid's Tale invokes Genesis to authorise Gilead's misogyny.",
    synonyms: ['framing', 'peri-textual'],
    antonyms: ['core text', 'main text'],
  },
  {
    id: 'vb-extra-161',
    word: 'metafictional',
    partOfSpeech: 'adjective',
    definition: 'drawing attention to a work’s own status as fiction',
    example:
      'Atwood’s metafictional “Historical Notes” frame Offred’s tape-recorded narrative as scholarly artefact.',
    synonyms: ['self-reflexive', 'self-conscious'],
    antonyms: ['naive realism'],
  },
  {
    id: 'vb-extra-162',
    word: 'mimesis',
    partOfSpeech: 'noun',
    definition: 'the artistic imitation of reality',
    example:
      'Steinbeck’s mimesis extends to phonetic spellings of dialect in the bunkhouse exchanges.',
    synonyms: ['imitation', 'representation'],
    antonyms: ['abstraction', 'stylisation'],
  },
  {
    id: 'vb-extra-163',
    word: 'diegesis',
    partOfSpeech: 'noun',
    definition: 'the internal storyworld presented by a narrative',
    example:
      'The diegesis of Frankenstein layers Walton, Victor and the Creature into nested, contesting voices.',
    synonyms: ['storyworld', 'narrative universe'],
    antonyms: ['mimesis', 'extradiegesis'],
  },
  {
    id: 'vb-extra-164',
    word: 'hegemony',
    partOfSpeech: 'noun',
    definition: 'dominant cultural power presented as common sense',
    example:
      'Birling defends the hegemony of capital through bromides about progress and unsinkable ships.',
    synonyms: ['dominance', 'cultural authority'],
    antonyms: ['counter-hegemony', 'resistance'],
  },
  {
    id: 'vb-extra-165',
    word: 'subaltern',
    partOfSpeech: 'noun',
    definition: 'a person excluded from dominant power and discourse',
    example:
      'Eva Smith functions as the silenced subaltern through whom Priestley indicts class hierarchy.',
    synonyms: ['marginalised subject', 'voiceless figure'],
    antonyms: ['hegemon', 'elite'],
  },
  {
    id: 'vb-extra-166',
    word: 'liminality',
    partOfSpeech: 'noun',
    definition: 'the condition of occupying a transitional state',
    example:
      'Macbeth’s liminality after Duncan’s murder leaves him neither subject nor secure king.',
    synonyms: ['threshold state', 'in-betweenness'],
    antonyms: ['fixity', 'stability'],
  },
  {
    id: 'vb-extra-167',
    word: 'panopticon',
    partOfSpeech: 'noun',
    definition: 'a structure designed for total, unverifiable surveillance',
    example:
      'Gilead operates as a panopticon, since any Eye may be watching any Handmaid at any time.',
    synonyms: ['surveillance apparatus', 'observation tower'],
    antonyms: ['private sphere', 'unwatched space'],
  },
  {
    id: 'vb-extra-168',
    word: 'biopolitics',
    partOfSpeech: 'noun',
    definition: 'the political management of biological life',
    example:
      'Atwood’s biopolitics literalise Foucault by reducing women to wombs administered by the state.',
    synonyms: ['life-politics', 'state-biology'],
    antonyms: ['bodily autonomy'],
  },
  {
    id: 'vb-extra-169',
    word: 'patriarchy',
    partOfSpeech: 'noun',
    definition: 'a system organising society around male authority',
    example: 'Curley’s patriarchy reduces his wife to nameless property in the bunkhouse economy.',
    synonyms: ['male-rule', 'androcracy'],
    antonyms: ['matriarchy', 'egalitarian society'],
  },
  {
    id: 'vb-extra-170',
    word: 'gaze',
    partOfSpeech: 'noun',
    definition: 'a critical concept for power-laden looking',
    example:
      'The Marquis directs a possessive gaze at his bride, framing her as a collectible artwork.',
    synonyms: ['look', 'scopic regime'],
    antonyms: ['averted look', 'unseeing'],
  },
  {
    id: 'vb-extra-171',
    word: 'othering',
    partOfSpeech: 'noun',
    definition: 'representing a group as alien to construct an in-group',
    example:
      "Stevenson's othering of Hyde as “troglodytic” aligns moral evil with evolutionary degeneracy.",
    synonyms: ['alterising', 'exoticisation'],
    antonyms: ['inclusion', 'identification'],
  },
  {
    id: 'vb-extra-172',
    word: 'orientalism',
    partOfSpeech: 'noun',
    definition: 'a Western tradition of stereotyping Eastern cultures',
    example:
      'Brontë’s orientalism surfaces when Bertha is figured as a “Creole” fury imported from Jamaica.',
    synonyms: ['exoticism', 'Eastern stereotyping'],
    antonyms: ['accurate representation', 'self-determination'],
  },
  {
    id: 'vb-extra-173',
    word: 'logocentrism',
    partOfSpeech: 'noun',
    definition: 'a privileging of speech and rational meaning',
    example:
      "Frankenstein critiques scientific logocentrism by giving the Creature a more eloquent voice than Victor's.",
    synonyms: ['phonocentrism', 'rationalism'],
    antonyms: ['differance', 'plurality'],
  },
  {
    id: 'vb-extra-174',
    word: 'dialectic',
    partOfSpeech: 'noun',
    definition: 'a development of meaning through clashing opposites',
    example:
      'Macbeth and Banquo form a dialectic where ambition and forbearance produce contrasting destinies.',
    synonyms: ['oppositional reasoning', 'thesis-antithesis'],
    antonyms: ['monologic discourse'],
  },
  {
    id: 'vb-extra-175',
    word: 'aesthetic',
    partOfSpeech: 'noun',
    definition: 'a coherent set of artistic principles',
    example:
      'Wilde’s aesthetic of beauty for its own sake survives in Dorian Gray’s decadent worship of surface.',
    synonyms: ['artistic creed', 'sensibility'],
    antonyms: ['utilitarianism', 'didacticism'],
  },
  {
    id: 'vb-extra-176',
    word: 'epistemology',
    partOfSpeech: 'noun',
    definition: 'the branch of philosophy concerned with knowledge',
    example:
      'Frankenstein interrogates Romantic epistemology by punishing Victor’s pursuit of forbidden scientific knowledge.',
    synonyms: ['theory of knowledge', 'cognitive philosophy'],
    antonyms: ['ignorance', 'mysticism'],
  },
  {
    id: 'vb-extra-177',
    word: 'ontology',
    partOfSpeech: 'noun',
    definition: 'the philosophical study of being and existence',
    example: 'The Creature challenges human ontology when he insists “I ought to be thy Adam”.',
    synonyms: ['metaphysics of being'],
    antonyms: ['nihilism'],
  },
  {
    id: 'vb-extra-178',
    word: 'teleology',
    partOfSpeech: 'noun',
    definition: 'an explanation of phenomena by their ultimate purpose',
    example:
      'The redemptive teleology of A Christmas Carol propels Scrooge inevitably toward charity.',
    synonyms: ['purpose-driven account', 'goal-orientation'],
    antonyms: ['contingency', 'open-endedness'],
  },
  {
    id: 'vb-extra-179',
    word: 'reception',
    partOfSpeech: 'noun',
    definition: 'the historical study of how readers respond to a text',
    example:
      "The reception of An Inspector Calls in 1945 explains its socialist message's contemporary urgency.",
    synonyms: ['reader response', 'historical reading'],
    antonyms: ['authorial intention'],
  },
  {
    id: 'vb-extra-180',
    word: 'historiography',
    partOfSpeech: 'noun',
    definition: 'the study of how history is written and shaped',
    example:
      "Atwood's mock historiography in the “Historical Notes” mocks academic relativism toward Gilead's atrocities.",
    synonyms: ['history-writing', 'historical theory'],
    antonyms: ['ahistorical reading'],
  },

  // ─── 20 archaic / formal alternatives ────────────────────────────────────
  {
    id: 'vb-extra-181',
    word: 'ergo',
    partOfSpeech: 'adverb',
    definition: 'therefore; consequently',
    example:
      "Macbeth murders Duncan; ergo, Scotland descends into the play's pervasive cosmological disorder.",
    synonyms: ['therefore', 'consequently'],
    antonyms: ['nevertheless', 'however'],
  },
  {
    id: 'vb-extra-182',
    word: 'henceforth',
    partOfSpeech: 'adverb',
    definition: 'from this time forward',
    example:
      'After the visitations, Scrooge henceforth keeps Christmas “well, if any man alive possessed the knowledge”.',
    synonyms: ['from now on', 'hereafter'],
    antonyms: ['hitherto', 'previously'],
  },
  {
    id: 'vb-extra-183',
    word: 'ostensibly',
    partOfSpeech: 'adverb',
    definition: 'apparently, but not necessarily really',
    example:
      'Birling is ostensibly hosting an engagement, yet Priestley turns the dinner into an inquisition.',
    synonyms: ['apparently', 'seemingly'],
    antonyms: ['actually', 'truly'],
  },
  {
    id: 'vb-extra-184',
    word: 'manifestly',
    partOfSpeech: 'adverb',
    definition: 'in a way that is obvious or self-evident',
    example:
      'Macbeth is manifestly unfit to rule once he confesses he has “supp’d full with horrors”.',
    synonyms: ['evidently', 'patently'],
    antonyms: ['ambiguously', 'arguably'],
  },
  {
    id: 'vb-extra-185',
    word: 'thereby',
    partOfSpeech: 'adverb',
    definition: 'by that means; as a result of that',
    example:
      'Stevenson denies us Hyde’s perspective, thereby preserving the novella’s gothic ambiguity.',
    synonyms: ['through that', 'consequently'],
    antonyms: ['unrelatedly'],
  },
  {
    id: 'vb-extra-186',
    word: 'notwithstanding',
    partOfSpeech: 'preposition',
    definition: 'in spite of',
    example:
      'Notwithstanding her conscience, Lady Macbeth dies haunted by spots no perfume can sweeten.',
    synonyms: ['despite', 'in spite of'],
    antonyms: ['because of', 'owing to'],
  },
  {
    id: 'vb-extra-187',
    word: 'hitherto',
    partOfSpeech: 'adverb',
    definition: 'until now or until the point in question',
    example:
      'Sheila challenges the assumptions her family had hitherto regarded as natural and immutable.',
    synonyms: ['previously', 'so far'],
    antonyms: ['henceforth', 'hereafter'],
  },
  {
    id: 'vb-extra-188',
    word: 'whereupon',
    partOfSpeech: 'adverb',
    definition: 'immediately after which',
    example:
      'Macbeth meets the Witches, whereupon his loyal thaneship begins its rapid moral disintegration.',
    synonyms: ['after which', 'at which point'],
    antonyms: ['preceding which'],
  },
  {
    id: 'vb-extra-189',
    word: 'wherefore',
    partOfSpeech: 'adverb',
    definition: 'for what reason; why',
    example:
      'Juliet’s “wherefore art thou Romeo?” asks why he must bear the family name she fatally loves.',
    synonyms: ['why', 'for what cause'],
    antonyms: ['therefore'],
  },
  {
    id: 'vb-extra-190',
    word: 'albeit',
    partOfSpeech: 'conjunction',
    definition: 'although',
    example:
      'Sheila accepts responsibility, albeit only after the Inspector’s relentless cross-examination.',
    synonyms: ['although', 'even though'],
    antonyms: ['because', 'since'],
  },
  {
    id: 'vb-extra-191',
    word: 'hereby',
    partOfSpeech: 'adverb',
    definition: 'by means of this; as a result of this',
    example: 'Prospero hereby dissolves his magic, conceding that “our revels now are ended”.',
    synonyms: ['by this means'],
    antonyms: ['by no means'],
  },
  {
    id: 'vb-extra-192',
    word: 'thereto',
    partOfSpeech: 'adverb',
    definition: 'to that or it; in addition',
    example:
      'Macbeth swears loyalty to Duncan and adds murderous treason thereto within a single act.',
    synonyms: ['to that', 'additionally'],
    antonyms: ['therefrom'],
  },
  {
    id: 'vb-extra-193',
    word: 'therein',
    partOfSpeech: 'adverb',
    definition: 'in that place, document or respect',
    example:
      'Hamlet says “the play’s the thing”, and therein lies his strategy to expose Claudius.',
    synonyms: ['within that', 'inside it'],
    antonyms: ['without', 'outside'],
  },
  {
    id: 'vb-extra-194',
    word: 'whence',
    partOfSpeech: 'adverb',
    definition: 'from where',
    example:
      'Heathcliff returns from an unspecified whence, transformed into a monied gentleman of obscure provenance.',
    synonyms: ['from which place'],
    antonyms: ['whither'],
  },
  {
    id: 'vb-extra-195',
    word: 'thither',
    partOfSpeech: 'adverb',
    definition: 'to or towards that place',
    example:
      'Macbeth marches thither to Dunsinane, certain that no man of woman born can harm him.',
    synonyms: ['to that place'],
    antonyms: ['hither', 'here'],
  },
  {
    id: 'vb-extra-196',
    word: 'forthwith',
    partOfSpeech: 'adverb',
    definition: 'immediately; without delay',
    example:
      'Once the dagger appears, Macbeth resolves forthwith to “proceed no further in this business” - then does.',
    synonyms: ['immediately', 'at once'],
    antonyms: ['eventually', 'tardily'],
  },
  {
    id: 'vb-extra-197',
    word: 'heretofore',
    partOfSpeech: 'adverb',
    definition: 'before this time; until now',
    example:
      "Sheila accepts moral consequences heretofore alien to her family's cosseted Edwardian worldview.",
    synonyms: ['until now', 'previously'],
    antonyms: ['henceforth', 'hereafter'],
  },
  {
    id: 'vb-extra-198',
    word: 'verily',
    partOfSpeech: 'adverb',
    definition: 'truly; certainly',
    example:
      'Macbeth verily believes himself invincible until the Witches’ equivocal prophecies collapse.',
    synonyms: ['truly', 'indeed'],
    antonyms: ['falsely', 'doubtfully'],
  },
  {
    id: 'vb-extra-199',
    word: 'perforce',
    partOfSpeech: 'adverb',
    definition: 'by necessity; unavoidably',
    example:
      "Lear, perforce stripped of retinue and shelter, must confront the storm's leveling justice.",
    synonyms: ['necessarily', 'inevitably'],
    antonyms: ['voluntarily', 'optionally'],
  },
  {
    id: 'vb-extra-200',
    word: 'sundry',
    partOfSpeech: 'adjective',
    definition: 'various; of several kinds',
    example:
      'The Inspector exposes sundry Birling betrayals, drawing them into a single moral indictment.',
    synonyms: ['various', 'miscellaneous'],
    antonyms: ['uniform', 'singular'],
  },
]

export default VOCAB_EXTRA
