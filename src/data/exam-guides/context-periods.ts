// @ts-nocheck
import type { ContextPeriod } from './types';

export const contextPeriods: ContextPeriod[] = [
  // ── 1. Elizabethan / Jacobean ───────────────────────────────────────────────
  {
    period: 'Elizabethan & Jacobean',
    years: '1558–1625',
    relevantTexts:
      'Shakespeare (Macbeth, Romeo and Juliet, The Tempest, Much Ado About Nothing, The Merchant of Venice)',
    keyPoints: [
      'The Great Chain of Being: a rigid hierarchy placing God at the top, then the monarch, then nobles, then commoners. Disrupting this order — through regicide, rebellion, or social transgression — was believed to cause cosmic disorder, reflected in storms, disease, and unnatural events.',
      'The Divine Right of Kings: monarchs were believed to be chosen by God. Killing a king was not merely murder but a sin against the divine order — this is central to Macbeth and the chaos that follows Duncan\'s assassination.',
      'Patriarchal society: women were legally the property of their fathers and then their husbands. Female independence, outspokenness, or sexual autonomy was seen as transgressive and dangerous — relevant to characters like Lady Macbeth and Juliet.',
      'Witchcraft and the supernatural: James I was personally obsessed with witchcraft and wrote "Daemonologie" (1597). The witches in Macbeth would have been genuinely terrifying to a Jacobean audience, not merely theatrical devices.',
      'Theatre as a political tool: plays were performed at court and for public audiences. Writers had to navigate censorship while using drama to comment on power, morality, and social order — often using historical or fantastical settings to discuss contemporary politics safely.',
    ],
  },

  // ── 2. Romantic Period ──────────────────────────────────────────────────────
  {
    period: 'Romantic Period',
    years: '1780–1850',
    relevantTexts:
      'Blake (Songs of Innocence and Experience, "London"), Shelley ("Ozymandias", Frankenstein), Wordsworth (The Prelude, "Tintern Abbey"), Keats, Byron',
    keyPoints: [
      'Reaction against industrialisation: the Romantics saw the Industrial Revolution as destroying the natural world and dehumanising workers. They celebrated nature as a source of spiritual renewal, moral truth, and emotional power.',
      'The French Revolution (1789): initially inspired many Romantic writers with its ideals of liberty, equality, and fraternity. The subsequent Reign of Terror complicated these feelings, leading to disillusionment but also to deeper reflections on power and tyranny — central to "Ozymandias."',
      'The power of the individual imagination: Romanticism valued personal emotion, subjective experience, and the creative power of the individual mind over Enlightenment rationalism and collective conformity.',
      'The sublime: a key Romantic concept — the experience of awe, terror, and wonder when confronted with the vastness and power of nature. The sublime is both beautiful and terrifying, reminding humanity of its insignificance.',
      'Social inequality and childhood: Blake in particular attacked child labour, poverty, and institutional hypocrisy (the Church, the government). His poems give voice to the powerless and challenge readers to see suffering they would prefer to ignore.',
      'Galvanism and the ethics of science: Luigi Galvani\'s experiments with electricity and dead tissue sparked public debate about whether science could conquer death. Mary Shelley drew on these ideas in Frankenstein, asking whether knowledge pursued without moral restraint is inherently destructive.',
    ],
  },

  // ── 3. Victorian Era ────────────────────────────────────────────────────────
  {
    period: 'Victorian Era',
    years: '1837–1901',
    relevantTexts:
      'Dickens (A Christmas Carol, Great Expectations), Bront\u00eb (Jane Eyre), Stevenson (Jekyll and Hyde), Conan Doyle, Wilde',
    keyPoints: [
      'The class divide: Victorian society was sharply divided between rich and poor. The 1834 Poor Law created workhouses designed to be so unpleasant that only the truly desperate would enter them. Dickens attacked this system relentlessly — Scrooge\'s transformation is a direct challenge to laissez-faire capitalism.',
      'The British Empire: at its height, the Empire covered a quarter of the globe. This created a sense of British superiority but also anxieties about degeneration, racial "purity," and the moral cost of colonialism — themes that surface in Gothic literature.',
      'Victorian morality and hypocrisy: outwardly, Victorian society demanded strict moral codes — sexual purity, religious devotion, temperance, and respectability. Privately, vice was rampant. This duality is the central theme of Jekyll and Hyde.',
      'Scientific discoveries: Darwin\'s "On the Origin of Species" (1859) shattered religious certainty and raised terrifying questions about humanity\'s animal nature. This fear of "the beast within" pervades Gothic fiction of the period.',
      'The role of women: women were expected to be the "Angel in the House" — pure, domestic, self-sacrificing. Female characters who resist this role (Jane Eyre, Lady Audley) are both celebrated and punished by the texts they inhabit.',
      'Urbanisation and poverty: rapid industrial growth created overcrowded, polluted cities. Disease, crime, and poverty were rampant in working-class areas, while the wealthy lived in wilful ignorance — a tension Dickens exploits in almost every novel.',
    ],
  },

  // ── 4. Edwardian / Pre-WWI ──────────────────────────────────────────────────
  {
    period: 'Edwardian & Pre-WWI',
    years: '1901–1914',
    relevantTexts:
      'Priestley (An Inspector Calls — set in 1912), H.G. Wells, E.M. Forster',
    keyPoints: [
      'The class system under pressure: the rigid Victorian class hierarchy was beginning to crack. Trade unions were growing, the Labour Party was founded (1900), and working-class people were beginning to demand political representation and rights.',
      'The Suffragette movement: women were campaigning — often violently — for the right to vote. The Suffragettes used direct action, hunger strikes, and civil disobedience, challenging the patriarchal assumption that women were unfit for public life.',
      'Imperial confidence masking anxiety: the Edwardian era projected confidence and prosperity, but beneath the surface lay deep anxieties about the sustainability of the Empire, the threat of war, and the growing demands of the working class.',
      'The sinking of the Titanic (1912): Priestley deliberately sets An Inspector Calls in 1912 so that Birling\'s confident predictions ("unsinkable, absolutely unsinkable") are exposed as catastrophically wrong. The Titanic becomes a symbol of Edwardian hubris and class arrogance — first-class passengers survived; steerage passengers drowned.',
      'Social reform: the Liberal government (1906–1914) introduced old-age pensions, national insurance, and free school meals — the beginnings of the welfare state. These reforms were fiercely opposed by the wealthy, who saw them as an attack on property and individual liberty.',
    ],
  },

  // ── 5. World War I ──────────────────────────────────────────────────────────
  {
    period: 'World War I',
    years: '1914–1918',
    relevantTexts:
      'Owen (Exposure, Futility, Dulce et Decorum Est), Sassoon (Attack, Counter-Attack), Brooke (The Soldier)',
    keyPoints: [
      'Patriotism vs reality: the war began with a wave of patriotic fervour — young men enlisted enthusiastically, encouraged by propaganda that presented war as glorious and honourable. The brutal reality of trench warfare destroyed this illusion completely.',
      'The horror of trench warfare: mud, rats, gas attacks, constant shelling, disease, and the psychological trauma of watching comrades die. Owen\'s poetry is a direct, unflinching record of these experiences, written to counter the propaganda that glorified war.',
      'Shell shock (PTSD): soldiers returned with severe psychological trauma that was poorly understood and often stigmatised. Many were accused of cowardice or malingering. This is relevant to poems like "Remains" by Armitage, which deals with modern equivalents.',
      'The failure of the establishment: the war was directed by generals and politicians who were seen as incompetent, callous, and detached from the suffering of ordinary soldiers. Sassoon\'s poetry is often bitterly satirical about the officer class and the home front.',
      'The loss of a generation: approximately 700,000 British soldiers were killed and over 1.6 million wounded. The war devastated a generation of young men and left a permanent scar on British culture, literature, and national identity.',
    ],
  },

  // ── 6. Interwar & WWII ─────────────────────────────────────────────────────
  {
    period: 'Interwar & World War II',
    years: '1918–1945',
    relevantTexts:
      'Priestley (An Inspector Calls — written 1945), Orwell, T.S. Eliot',
    keyPoints: [
      'Post-WWI disillusionment: the "war to end all wars" had solved nothing. The Treaty of Versailles created resentment, the economy collapsed (the Great Depression, 1929–1939), and unemployment and poverty were widespread.',
      'The rise of fascism: Hitler, Mussolini, and Franco rose to power by exploiting economic hardship and national humiliation. The failure to prevent WWII deepened the sense that the old ruling class had failed catastrophically.',
      'Class consciousness and socialism: the interwar period saw a surge in socialist thinking. Priestley was a committed socialist who wrote An Inspector Calls in 1945 — the final week of WWII — as a warning: if Britain returned to the selfish, class-divided society of 1912, the suffering of two world wars would have been for nothing.',
      'The Beveridge Report (1942) and the welfare state: William Beveridge\'s report identified five "giant evils" — Want, Disease, Ignorance, Squalor, and Idleness — and proposed a comprehensive welfare state. This directly influenced the 1945 Labour government and reflects the Inspector\'s message of collective responsibility.',
      'The Blitz and collective spirit: the shared suffering of the Blitz created a sense of national unity that crossed class lines. Many hoped this spirit would continue after the war, transforming Britain into a more equal society — this hope drives Priestley\'s message.',
    ],
  },

  // ── 7. Post-War & Modern ────────────────────────────────────────────────────
  {
    period: 'Post-War & Modern',
    years: '1945–2000',
    relevantTexts:
      'Golding (Lord of the Flies), Shelagh Delaney (A Taste of Honey), Hughes (Bayonet Charge), Heaney, Agard',
    keyPoints: [
      'The Cold War and nuclear anxiety: the threat of nuclear annihilation shaped the post-war imagination. Golding wrote Lord of the Flies (1954) as an exploration of innate human evil, directly influenced by the horrors of WWII and the threat of nuclear war.',
      'The welfare state and social change: the NHS was founded in 1948, and the welfare state expanded access to education, healthcare, and housing. These changes gradually weakened the old class system, though inequality persisted.',
      'Immigration and multiculturalism: the Windrush generation (1948 onwards) and subsequent waves of immigration transformed British society. Writers like John Agard explore themes of identity, belonging, and the experience of being caught between cultures.',
      'The decline of Empire: decolonisation dismantled the British Empire. This forced a reckoning with Britain\'s colonial past and created complex questions about national identity, guilt, and the legacy of imperialism.',
      'Feminism and changing gender roles: the second-wave feminist movement (1960s–1980s) challenged traditional gender roles. Shelagh Delaney\'s A Taste of Honey (1958), written when she was 18, broke conventions by centring a working-class girl navigating pregnancy, race, sexuality, and class.',
      'Kitchen sink realism: a literary and theatrical movement that focused on working-class life, rejecting the middle-class drawing rooms of traditional drama. This movement gave voice to people previously excluded from serious literature.',
    ],
  },

  // ── 8. Contemporary ─────────────────────────────────────────────────────────
  {
    period: 'Contemporary',
    years: '2000–present',
    relevantTexts:
      'Armitage (Remains), Duffy (War Photographer, Valentine), Dharker (Tissue), Sheers (Mametz Wood)',
    keyPoints: [
      'The War on Terror and modern conflict: the wars in Iraq and Afghanistan (2001 onwards) produced a new generation of war literature. Armitage\'s "Remains" deals with a soldier\'s PTSD after shooting a looter in Iraq — the poem explores guilt, trauma, and the failure of society to support returning soldiers.',
      'Globalisation and identity: in an increasingly connected world, questions of national identity, cultural belonging, and the tension between local and global perspectives are central concerns. Dharker\'s "Tissue" explores how identity is constructed, layered, and fragile.',
      'Media and representation: 24-hour news, social media, and the internet have transformed how we experience conflict, suffering, and political events. Duffy\'s "War Photographer" examines the gap between the reality of war zones and the indifference of comfortable Western audiences.',
      'Climate change and environmental anxiety: growing awareness of environmental destruction and climate change has influenced contemporary poetry and literature, echoing the Romantic concern for the natural world but with a new urgency.',
      'Mental health awareness: contemporary literature increasingly engages with mental health, trauma, and psychological wellbeing. The stigma surrounding mental illness is being challenged, and texts like "Remains" have become important in discussions about PTSD and veterans\' care.',
    ],
  },
];
